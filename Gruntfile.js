module.exports = function(grunt){

	grunt.initConfig({

		uglify: {
			
			options: {
				mangle: true
			},

		    dev: {
		      files: {
		        'dist/js/Patty-0.0.1.min.js': ['src/js/Patty-0.0.1.js']
		      }
		    }
	  	}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);

};