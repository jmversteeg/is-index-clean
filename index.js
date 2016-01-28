'use strict';

const execa = require('execa');

const isIndexClean = function () {

    return execa.shell('git diff-index --quiet --cached HEAD')
        .then(() => execa.shell('git diff-files --quiet'))
        .then(() => execa.shell('test -z "$(git ls-files --exclude-standard --others)"').then(output => {
            if (output.stderr || output.stdout)
                throw new Error('Contains untracked files');
        }));
};

module.exports = isIndexClean;