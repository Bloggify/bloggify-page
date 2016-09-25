"use strict";

const slugify = require("slug")
    , iterateObject = require("iterate-object")
    ;

/**
 * bloggifyPage
 * The Bloggify page class.
 *
 * @name bloggifyPage
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
module.exports = class BloggifyPage {
    constructor (data) {
        let m = data.metadata || {};
        this.title = data.title || m.title;
        this.slug = data.slug || m.slug || slugify(this.title, { lower: true });
        this.url = data.url || m.url || `/${this.slug}`;
        this.content = data.html || data.content;
        this.raw_content = data.markdown || data.rawContent || this.content;
        this.main_image = m.main_image || data.main_image;

        [data, m].forEach(c => {
            iterateObject(c, (value, name) => {
                let cv = this[name];
                this[name] = cv === undefined ? value : cv;
            });
        });
    }
};
