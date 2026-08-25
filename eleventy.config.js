module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  // .css isn't a template format, so Eleventy won't discover/copy it on its
  // own. src/blogs/styles lives inside dir.input, so Eleventy strips that
  // prefix on copy: src/blogs/styles/now.css -> dist/styles/now.css
  eleventyConfig.addPassthroughCopy("src/blogs/styles");

  return {
    dir: {
      input: "src/blogs",
      output: "dist",
      includes: "_includes",
    },
  };
};
