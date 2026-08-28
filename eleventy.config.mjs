import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { RenderPlugin } from "@11ty/eleventy";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: true });

export default function (eleventyConfig) {
  // Enables {% renderTemplate "md" %}...{% endrenderTemplate %} so an HTML/
  // Nunjucks page can embed a Markdown-rendered block without the whole file
  // being run through markdown-it (which mangled raw HTML into stray <p>s).
  eleventyConfig.addPlugin(RenderPlugin);

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  // Renders a single string through markdown-it inline (no wrapping <p>) —
  // used for front-matter fields (e.g. résumé bullet points) that need
  // [text](url)-style links without embedding raw HTML in the data itself.
  eleventyConfig.addFilter("markdownify", (str) => md.renderInline(str || ""));

  // .css isn't a template format, so Eleventy won't discover/copy it on its
  // own. src/site/styles lives inside dir.input, so Eleventy strips that
  // prefix on copy: src/site/styles/now.css -> dist/styles/now.css
  eleventyConfig.addPassthroughCopy("src/site/styles");

  // Same story for images/icons/etc. that aren't template formats.
  eleventyConfig.addPassthroughCopy("src/site/assets");

  // ...and for the plain vanilla-JS files (nav toggle, typed.js init).
  eleventyConfig.addPassthroughCopy("src/site/scripts");

  // typed.js has no bundler step anymore — passthrough-copy its prebuilt
  // browser build so the About page can load it as a plain <script>.
  eleventyConfig.addPassthroughCopy({
    "node_modules/typed.js/dist/typed.umd.js": "scripts/typed.umd.js",
  });

  // Post-processes any <img> in the built HTML (including ones markdown-it
  // generates from ![alt](src) syntax, and remote https:// sources) into
  // resized, modern-format images. urlPath/outputDir are intentionally
  // omitted: without them, eleventy-img colocates each optimized image next
  // to the page that references it, which works correctly for /now,
  // /projects/<slug>/, and /bookshelf/<slug>/ alike with no per-section
  // config.
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["webp", "jpeg"],
    widths: ["auto", 600],
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
  });

  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes",
    },
  };
};
