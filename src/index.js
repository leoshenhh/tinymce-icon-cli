const SVGFixer = require('oslllo-svg-fixer');

SVGFixer('src/svg', 'src/dist').fix()
    .then(() => {
        console.log("done");
    })
    .catch((err) => {
        throw err;
    });
