var fs = require('fs');
module.exports = {
	LeerJson:function(res){
		fs.readFile('./Json.json',function(err,data){
			if(err){
				res.json(err);
			}else{
				res.json(data.toString());
			}
		});
	}
}