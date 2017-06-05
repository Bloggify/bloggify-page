"use strict";

const BloggifyPage = require("../lib");


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
