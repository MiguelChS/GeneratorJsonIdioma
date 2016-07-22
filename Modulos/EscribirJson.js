module.exports = function(fs){

	fs.writeFile('./Json.json','Chau Miguel',function(err){
		if(err){
			console.log(err);
		}else{
			console.log('se escribio bien');
		}
	})
