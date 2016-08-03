import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/addon/edit/closebrackets';

import demo from './demo.css!text';

const outputMessages = document.querySelector('.output-messages');

const editor = CodeMirror(document.querySelector('.editor'), {
    mode: 'css',
    theme: 'solarized dark',
    lineNumbers: true,
    autofocus: true,
    indentUnit: 4,
    autoCloseBrackets: true,
    lineWrapping: true
});

const outputCSS = CodeMirror(document.querySelector('.output-css'), {
    mode: 'css',
    theme: 'solarized light',
    lineNumbers: true,
    readOnly: 'nocursor',
    value: 'waking up the API...'
});

const outputJSON = CodeMirror(document.querySelector('.output-json'), {
    mode: {name: "javascript", json: true},
    theme: 'solarized light',
    lineNumbers: true,
    readOnly: 'nocursor'
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
        outputMessages.innerHTML = `${messages.slice(0, 1)}<br>${messages.pop()}<br>${messages.length} rules could not be atomised.`;
        document.querySelector('.version').innerHTML = `v${version}`;
    })
}

editor.on('change', atomise);
editor.setValue(demo);
