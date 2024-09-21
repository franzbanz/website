module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        },
        templateFormats: ["html", "njk", "md"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
}