"use strict";

const slugify = require("slug");

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
        this.slug = data.slug || m.slug || slugify(this.title);
        this.url = data.url || m.url || `/${this.slug}`;
        this.content = data.html || data.content;
        this.raw_content = data.markdown || data.rawContent || this.content;
    }
};
