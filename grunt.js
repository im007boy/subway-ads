/**
 * Date: 13-1-16
 * Desc:
 */
module.exports = function(grunt) {
    // Your grunt code goes in here.
    grunt.initConfig({
        manifest: {
            generate: {
                options: {
                    basePath: "./",
                    network: ["index.html","*"],
                    fallback: ["/"],
                    exclude: [],
                    preferOnline: true,
                    timestamp: true
                },
                src: [
                    "image/*",
                    "js/**"
                ],
                dest: "manifest.appcache"
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-manifest');
    grunt.registerInitTask('default', 'concat', function(){
        grunt.task.run('manifest:generate');
    });
};
