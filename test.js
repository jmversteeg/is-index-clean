'use strict';

const Promise        = require('bluebird');
const chai           = require('chai');
const chaiAsPromised = require('chai-as-promised');
const execa          = require('execa');
const del            = require('del');
const path           = require('path');
const pify           = require('pify');
const mkdirp         = pify(require('mkdirp'));

chai.use(chaiAsPromised);

chai.should();

const isIndexClean = require('./');

describe('isIndexClean', () => {

    beforeEach(() => {
        return mkdirp('test')
            .then(() => {
                process.chdir(path.join(__dirname, 'test'));
                return Promise.mapSeries([
                    'git init',
                    'git config user.email "someone@example.com"',
                    'git config user.name "Foo Bar"',
                    'touch firstfile',
                    'git add -A',
                    'git commit -m "initial commit"'
                ], execa.shell);
            });
    });

    it('should detect a clean index', () => {
        return isIndexClean().should.be.fulfilled;
    });

    it('should detect unstaged changes', () => {
        return execa.shell('touch somefile')
            .then(() => isIndexClean().should.be.rejected);
    });

    it('should detect staged changes', () => {
        return execa.shell('touch somefile')
            .then(() => execa.shell('git add -A'))
            .then(() => isIndexClean().should.be.rejected);
    });

    it('should detect staged changes that are reverted by changes in HEAD', () => {
        return execa.shell('touch somefile')
            .then(() => execa.shell('git add -A'))
            .then(() => del('somefile'))
            .then(() => isIndexClean().should.be.rejected);
    });

    afterEach(() => {
        process.chdir(__dirname);
        return del('test');
    });
});
