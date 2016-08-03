const pify = require('pify');

const fs = require('fs');
const pfs = pify(fs);

const mkdirp = require('mkdirp');
const pmkdirp = pify(mkdirp);

const useref = require('useref');
const jspm = require('jspm');

const gzipSize = require('gzip-size').sync;
const prettyBytes = require('pretty-bytes');

const src = './src';
const dest = './dist';

pfs.readFile(`${src}/index.html`, 'utf8')
    .then(html =>
        pfs.readFile(`${src}/style.css`, 'utf8')
            .then(css => html.replace(`<link rel="stylesheet" type="text/css" href="style.css">`, `<style>${css}</style>`))
    )
    .then(html =>
        new jspm.Builder().buildStatic(`${src}/index.js`, {minify: true, sourceMaps: false})
            .then(appJS => html.replace(/<!-- app -->[\s\S]*?<!-- \/app -->/, () => `<script>${appJS.source}</script>`))
    )
    .then(html => {
        pmkdirp(dest).then(() => pfs.writeFile(`${dest}/index.html`, html, 'utf8')).catch(console.log);
        return html;
    })
    .then(html => console.log(prettyBytes(gzipSize(html))))
    .catch(console.log)
