module.exports = {
  cache: {
    cacheId: "brendu-electrode",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "brendu-electrode",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
