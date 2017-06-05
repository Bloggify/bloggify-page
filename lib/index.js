"use strict";

const slugify = require("slug")
    , iterateObject = require("iterate-object")
    ;

/**
 * BloggifyPage
 * The Bloggify page class.
 *
 * @name bloggifyPage
 * @function
 * @param {Object} data The page data:
 *
 *   - `metadata` (Object):
 *     - `title` (String): The page title.
 *     - `slug` (String): The page slug.
 *     - `url` (String): The page url.
 *     - `main_image` (String): The recommended image.
 *   - `title` (String): The page title. If provided, has greater priority than the `metadata.title`.
 *   - `slug` (String): The page slug. If provided, has greater priority than the `metadata.slug`.
 *   - `url` (String):  The page url. If provided, has greater priority than the `metadata.url`.
 *   - `content` (String): The page content.
 *   - `html` (String): The page html.
 *   - `markdown` (String): The page content.
 *   - `rawContent` (String): The page raw content.
 *
 * Additional keys passed in the metadata or in the main object, they will be merged in the result object.
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
