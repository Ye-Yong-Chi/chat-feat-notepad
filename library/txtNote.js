var fs = require("fs");
var qs = require('querystring');


var noteTemplate = "";
var saveTemplate = "";

fs.readFile("./static/index.html", "utf8", function(err, file) {
	// console.log(err);
	noteTemplate = file;
});

fs.readFile("./static/save.html", "utf8", function(err, file) {
	saveTemplate = file;
});


var response = function(res, type, text) {
	res.send(text);
	res.end();
}
function read(res,path,noteName){
	fs.readFile(path, "utf8", function(err, file) {
		if (err){
			// response(res, "text/html", "no exist");
			var text = noteTemplate
			.replace("[[?path?]]", noteName)
			.replace("[[?path?]]", noteName)
			.replace("[[?fileText?]]", "檔案並不存在，可在修改後存檔"
				);
			response(res, "text/html", text);
		}
		else
		{
			// response(res, "text/html", file);
			var text = noteTemplate
			.replace("[[?path?]]", noteName)
			.replace("[[?path?]]", noteName)
			.replace("[[?fileText?]]", file
				);
			response(res, "text/html", text);
		}
	});
};

function save(req,res,path,noteName){
	console.log(noteName);
	formData = ''; 
	req.on("data", function (chunk) {
		formData += chunk;
	});

	req.on("end", function () {
		form = qs.parse(formData);
		fs.writeFile(path, form.note, function (err) {
			if (!err)
			{
				// console.log(noteName);
				var text = saveTemplate
				.replace("[[?path?]]", noteName)
				.replace("[[?path?]]", noteName)
				.replace("[[?fileText?]]", form.note
					);
				response(res, "text/html", text);
			}

		});
	});	
};

var file={
	read:read
	,save:save
};

module.exports=file;