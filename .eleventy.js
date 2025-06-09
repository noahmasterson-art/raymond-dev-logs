module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByTag("posts").reverse();
  });

  return {
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
  };
};