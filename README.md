
# bloggify-page

 [![Version](https://img.shields.io/npm/v/bloggify-page.svg)](https://www.npmjs.com/package/bloggify-page) [![Downloads](https://img.shields.io/npm/dt/bloggify-page.svg)](https://www.npmjs.com/package/bloggify-page)

> The Bloggify page class.

## :cloud: Installation

```sh
$ npm i --save bloggify-page
```


## :clipboard: Example



```js
const BloggifyPage = require("bloggify-page");


const home = new BloggifyPage({
    title: "Home"
  , content: "Hey there!"
  , metadata: {
        customField: "Hello Mars!"
    }
});

console.log(home);
// BloggifyPage {
//   title: 'Home',
//   slug: 'Home',
//   url: '/Home',
//   content: 'Hey there!',
//   customField: 'Hello Mars!',
//   raw_content: 'Hey there!' }
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `bloggifyPage(data)`
BloggifyPage
The Bloggify page class.

#### Params
- **Object** `data`: The page data:
  - `metadata` (Object):
    - `title` (String): The page title.
    - `slug` (String): The page slug.
    - `url` (String): The page url.
    - `main_image` (String): The recommended image.
  - `title` (String): The page title. If provided, has greater priority than the `metadata.title`.
  - `slug` (String): The page slug. If provided, has greater priority than the `metadata.slug`.
  - `url` (String):  The page url. If provided, has greater priority than the `metadata.url`.
  - `content` (String): The page content.
  - `html` (String): The page html.
  - `markdown` (String): The page content.
  - `rawContent` (String): The page raw content.

Additional keys passed in the metadata or in the main object, they will be merged in the result object.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bloggify-article`](https://github.com/IonicaBizau/bloggify-article#readme)—The Bloggify article class.
 - [`bloggify-viewer`](https://github.com/Bloggify/bloggify-viewer#readme) (by Bloggify)—Connects the CRUD operations with the renderer.

## :scroll: License

[MIT][license] © [Bloggify][website]

[license]: http://showalicense.com/?fullname=Bloggify%20%3Csupport%40bloggify.org%3E%20(https%3A%2F%2Fbloggify.org)&year=2016#license-mit
[website]: https://bloggify.org
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
