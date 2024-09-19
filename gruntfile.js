module.exports = function(grunt) {
    // Загружаем необходимые плагины
    grunt.loadNpmTasks('grunt-contrib-less');

    // Конфигурация задач
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
        }
    });

    // Определяем задачу по умолчанию
    grunt.registerTask('default', ['less']);
};
// grunt.loadNpmTasks('grunt-contrib-watch');
//
// grunt.initConfig({
//     watch: {
//         styles: {
//             files: ['path/to/**/*.less'], // Укажите путь к вашим .less файлам
//             tasks: ['less'],
//             options: {
//                 spawn: false,
//             },
//         },
//     },
// });
//
// // Задача по умолчанию с watch
//grunt.registerTask('default', ['less', 'watch']);