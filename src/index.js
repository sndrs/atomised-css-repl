import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css!css';
import 'codemirror/addon/edit/closebrackets';
import './theme.css!css';

import demo from './demo.css!text';

const outputMessages = document.querySelector('.output-messages');

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
    fetch('https://atomised-service-fmrewhuwlb.now.sh', {
        method: 'POST',
        body: editor.getValue()
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
        outputMessages.innerHTML = `${messages.slice(0, 1)} / ${messages.slice(-1)} / ${messages.length - 2} rules could not be atomised.`.replace(/\.|:/g, '');
        document.querySelector('.version').innerHTML = `v${version} /`;
    })
}

editor.on('change', atomise);
editor.setValue(demo);
