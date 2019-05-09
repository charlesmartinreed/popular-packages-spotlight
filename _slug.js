const slug = require("slug");

// as a second param, slug can take in an object that specifies options
const slugify = words => {
  return slug(words, {
    lower: true,
    replacement: "_"
  });
};

console.log(slugify("Blog Post One")); //becomes blog-post-one
