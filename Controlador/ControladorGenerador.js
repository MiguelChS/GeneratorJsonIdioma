module.exports = function(router){
		var Services = require('../Service/ServiceArchivoJson.js');

		router.route('/index').get(function(req,res){
			Services.LeerJson(res);
		})

		router.route('/Armar').get(function(req,res){
			
		})
}