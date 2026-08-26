import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
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

  // Post-processes any <img> in the built HTML (including ones markdown-it
  // generates from ![alt](src) syntax) into resized, modern-format images.
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["webp", "jpeg"],
    widths: ["auto", 600],
    urlPath: "/now/images/",
    outputDir: "./dist/now/images/",
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
  });

  return {
    dir: {
      input: "src/blogs",
      output: "dist",
      includes: "_includes",
    },
  };
};
