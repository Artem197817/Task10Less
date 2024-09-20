module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "dist/styles/style.css": "src/styles/style.less"
                }
            }
        },

        watch: {
            styles: {
                files: ['src/styles/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    // Default task(s)
    grunt.registerTask('default', ['less', 'watch']);
};