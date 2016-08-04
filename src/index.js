import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css!css';
import 'codemirror/addon/edit/closebrackets';
import './theme.css!css';

import demo from './demo.css!text';

const outputMessages = document.querySelector('.output-messages');
const versionMessage = document.querySelector('.version');
const storageKey = 'atomised-repl-src';

const editor = CodeMirror(document.querySelector('.editor'), {
    mode: 'css',
    lineNumbers: false,
    autofocus: true,
    indentUnit: 4,
    autoCloseBrackets: true,
    lineWrapping: true,
    theme: 'atomised'
});

const outputCSS = CodeMirror(document.querySelector('.output-css'), {
    mode: 'css',
    lineNumbers: false,
    readOnly: 'nocursor',
    value: 'waking up the API...',
    theme: 'atomised'
});

const outputJSON = CodeMirror(document.querySelector('.output-json'), {
    mode: {name: "javascript", json: true},
    lineNumbers: false,
    readOnly: 'nocursor',
    theme: 'atomised'
});

function atomise () {
    // fetch('http://localhost:1337', {
    fetch('https://atomised-service-sndbgazupx.now.sh', {
        method: 'POST',
        body: editor.getValue()
    })
    .then(res => {
        if (!res.ok) {
            const error = new Error(res.statusText || res.status)
            error.response = res;
            return Promise.reject(error);
        }
        return Promise.resolve(res);
    })
    .then(res => res.json())
    .then(json => {
        const {version, map, messages, css} = json;
        outputCSS.setValue(css);
        outputJSON.setValue(JSON.stringify(map)
            .replace(/(^{|],)/g, '$1\n    ')
            .replace(/(:)/g, '$1 ')
            .replace(/(",)"/g, '$1 "')
            .replace(/(})$/, '\n$1')
        );
        let messageString = `${messages.slice(0, 1)} / ${messages.slice(-1)}`.replace(/\.|:/g, '');
        if (messages.length > 2) {
            messageString += ` / ${messages.length - 2} ${pluralise('rule', messages.length - 2)} could not be atomised.`;
        }
        outputMessages.innerHTML = messageString;
        versionMessage.innerHTML = `v${version} /`;
    })
    .catch(error => {
        error.response.text().then(msg => {
            outputCSS.setValue(msg);
            outputJSON.setValue('');
            outputMessages.innerHTML = 'er...';
        })
    });
    const src = encodeURI(editor.getValue());
    location.hash = src;
    try {
        localStorage.setItem(storageKey, src);
    } catch (e) {};
}

const pluralise = (term, count) => count > 1 ? `${term}s` : term;

editor.on('change', atomise);
if (location.hash !== '') {
    editor.setValue(decodeURI(location.hash.substring(1)))
} else {
    let src = demo;
    try {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
            src = decodeURI(stored);
        }
    } catch (e) {};
    editor.setValue(src);
}

