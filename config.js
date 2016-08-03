System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  meta: {
    "*.css": {
      "loader": "css"
    }
  },

  map: {
    "ace": "github:ajaxorg/ace-builds@1.2.4",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "codemirror": "npm:codemirror@5.17.0",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.26",
    "postcss": "npm:postcss@5.0.21",
    "postcss-atomised": "npm:postcss-atomised@0.2.3",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.6"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:codemirror@5.17.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:css-color-names@0.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-font-size-keywords@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-font-stretch-keywords@1.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-font-style-keywords@1.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-font-weight-keywords@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-global-keywords@1.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-list-helpers@1.0.1": {
      "tcomb": "npm:tcomb@2.7.0"
    },
    "npm:css-mqpacker@5.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@1.2.0",
      "postcss": "npm:postcss@5.0.21",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "cssesc": "npm:cssesc@0.1.0",
      "fastparse": "npm:fastparse@1.1.1"
    },
    "npm:css-shorthand-expand@1.1.0": {
      "css-color-names": "npm:css-color-names@0.0.1",
      "css-url-regex": "npm:css-url-regex@0.0.1",
      "hex-color-regex": "npm:hex-color-regex@1.0.3",
      "hsl-regex": "npm:hsl-regex@1.0.0",
      "hsla-regex": "npm:hsla-regex@1.0.0",
      "map-obj": "npm:map-obj@1.0.1",
      "repeat-element": "npm:repeat-element@1.1.2",
      "rgb-regex": "npm:rgb-regex@1.0.1",
      "rgba-regex": "npm:rgba-regex@1.0.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:css-system-font-keywords@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:cssstats@3.0.0-beta.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@2.4.0",
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "css-shorthand-expand": "npm:css-shorthand-expand@1.1.0",
      "gzip-size": "npm:gzip-size@3.0.0",
      "has-class-selector": "npm:has-class-selector@1.0.0",
      "has-element-selector": "npm:has-element-selector@1.0.0",
      "has-id-selector": "npm:has-id-selector@1.0.0",
      "has-pseudo-class": "npm:has-pseudo-class@1.0.1",
      "has-pseudo-element": "npm:has-pseudo-element@1.0.0",
      "is-blank": "npm:is-blank@1.1.0",
      "is-css-shorthand": "npm:is-css-shorthand@1.0.1",
      "is-present": "npm:is-present@1.0.0",
      "is-vendor-prefixed": "npm:is-vendor-prefixed@0.0.1",
      "lodash": "npm:lodash@4.13.1",
      "postcss": "npm:postcss@5.0.21",
      "postcss-safe-parser": "npm:postcss-safe-parser@1.0.7",
      "specificity": "npm:specificity@0.1.6"
    },
    "npm:duplexer@0.1.1": {
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:fastparse@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:flatten@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:gzip-size@3.0.0": {
      "duplexer": "npm:duplexer@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:has-element-selector@1.0.0": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has-pseudo-class@1.0.1": {
      "pseudo-classes": "npm:pseudo-classes@0.0.1"
    },
    "npm:has-pseudo-element@1.0.0": {
      "pseudo-elements": "npm:pseudo-elements@1.0.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-blank@1.0.0": {
      "is-empty": "npm:is-empty@0.0.1",
      "is-whitespace": "npm:is-whitespace@0.3.0"
    },
    "npm:is-blank@1.1.0": {
      "is-empty": "npm:is-empty@0.0.1",
      "is-whitespace": "npm:is-whitespace@0.3.0"
    },
    "npm:is-css-shorthand@1.0.1": {
      "css-shorthand-properties": "npm:css-shorthand-properties@1.0.0"
    },
    "npm:is-present@1.0.0": {
      "is-blank": "npm:is-blank@1.0.0"
    },
    "npm:is-vendor-prefixed@0.0.1": {
      "vendor-prefixes": "npm:vendor-prefixes@0.0.1"
    },
    "npm:js-base64@2.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:lodash._baseiteratee@4.7.0": {
      "lodash._stringtopath": "npm:lodash._stringtopath@4.8.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._basetostring@4.12.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseuniq@4.6.0": {
      "lodash._createset": "npm:lodash._createset@4.0.3",
      "lodash._root": "npm:lodash._root@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._createset@4.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._stringtopath@4.8.0": {
      "lodash._basetostring": "npm:lodash._basetostring@4.12.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.uniqby@4.5.0": {
      "lodash._baseiteratee": "npm:lodash._baseiteratee@4.7.0",
      "lodash._baseuniq": "npm:lodash._baseuniq@4.6.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-css-font@2.0.2": {
      "css-font-size-keywords": "npm:css-font-size-keywords@1.0.0",
      "css-font-stretch-keywords": "npm:css-font-stretch-keywords@1.0.1",
      "css-font-style-keywords": "npm:css-font-style-keywords@1.0.1",
      "css-font-weight-keywords": "npm:css-font-weight-keywords@1.0.0",
      "css-global-keywords": "npm:css-global-keywords@1.0.1",
      "css-list-helpers": "npm:css-list-helpers@1.0.1",
      "css-system-font-keywords": "npm:css-system-font-keywords@1.0.0",
      "tcomb": "npm:tcomb@2.7.0",
      "unquote": "npm:unquote@1.1.0"
    },
    "npm:parse-css-sides@2.0.0": {
      "css-list-helpers": "npm:css-list-helpers@1.0.1",
      "tcomb": "npm:tcomb@2.7.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-atomised@0.2.3": {
      "chalk": "npm:chalk@1.1.3",
      "css-mqpacker": "npm:css-mqpacker@5.0.1",
      "cssstats": "npm:cssstats@3.0.0-beta.1",
      "lodash.uniqby": "npm:lodash.uniqby@4.5.0",
      "parse-css-font": "npm:parse-css-font@2.0.2",
      "parse-css-sides": "npm:parse-css-sides@2.0.0",
      "postcss": "npm:postcss@5.0.21",
      "postcss-resolve-prop": "npm:postcss-resolve-prop@3.1.0",
      "postcss-selector-parser": "npm:postcss-selector-parser@2.1.0",
      "pretty-bytes": "npm:pretty-bytes@3.0.1",
      "shorthash": "npm:shorthash@0.0.2"
    },
    "npm:postcss-each-decl@1.0.2": {
      "tcomb-postcss": "npm:tcomb-postcss@1.0.2"
    },
    "npm:postcss-resolve-prop@3.1.0": {
      "object-assign": "npm:object-assign@4.1.0",
      "postcss-each-decl": "npm:postcss-each-decl@1.0.2",
      "tcomb-postcss": "npm:tcomb-postcss@1.0.2"
    },
    "npm:postcss-safe-parser@1.0.7": {
      "postcss": "npm:postcss@5.0.21"
    },
    "npm:postcss-selector-parser@2.1.0": {
      "flatten": "npm:flatten@1.0.2",
      "indexes-of": "npm:indexes-of@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:postcss@5.0.21": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6",
      "supports-color": "npm:supports-color@3.1.2"
    },
    "npm:pretty-bytes@3.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@3.1.2": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:tcomb-postcss@1.0.2": {
      "tcomb": "npm:tcomb@2.7.0"
    },
    "npm:tcomb@2.7.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
