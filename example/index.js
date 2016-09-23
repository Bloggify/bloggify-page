"use strict";

const BloggifyPage = require("../lib");


let home = new BloggifyPage({
    title: "Home"
  , content: "Hey there!"
});

console.log(home);
// BloggifyPage {
//   title: 'Home',
//   slug: 'Home',
//   url: '/Home',
//   content: 'Hey there!',
//   raw_content: 'Hey there!' }
