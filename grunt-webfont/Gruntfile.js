module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-webfont");

  grunt.initConfig({
    webfont: {
      icons: {
        src: ["/src/*.svg", "/src/**/*.svg"],
        dest: "/dest/",
        options: {
          // Output from using this should generally be used as part of a
          // deploy process that will do its own hashing.
          hashes: false,
          // the version of ttfautohint easily available in this image appears
          // to have problems:
          // https://github.com/sapegin/grunt-webfont/issues/162
          autoHint: false,
          // For reliable output, I suggest you optimize SVGs separately so you
          // can check results.
          optimize: false,
          // add woff2 to the types to generate: seems common/preferred for
          // browsers these days
          types: ["woff2", "woff", "eof", "ttf"]
        }
      }
    },
  });

  grunt.registerTask("default", ["webfont"]);
};
