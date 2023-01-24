var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
  port = process.env.PORT || 8010;
console.log("Server launched => 127.0.0.1:" + port);

const directoryPath = path.join(__dirname, 'movelists');

http.createServer(function(request, response) {
  var uri = url.parse(request.url).pathname
    , filename =decodeURI( path.join(process.cwd(), uri));


	 if (request.url.includes( '/movelists') && !request.url.toLowerCase().endsWith('.txt')) { // default files list folder
	var flist=[]; 
fs.readdir(directoryPath+request.url.replace('/movelists',''), function (err, files) { 
    //handling error
    if (err) {
		        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write("Unable to scan directory: " + err);
        response.end();
			  console.log(err); 
        return  ;
    } 
    //listing all files using forEach 
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        flist.push(file); 
     });
	       response.writeHead(200); 
 response.end(flist.join(";"));}); 
  } 	
 /* else	  if (request.url.toLowerCase().endsWith('.txt')) { 
        response.writeHead(200, {'Content-Type': 'text/html'});
              fs.createReadStream('aikido_start.html').pipe(response); 
			  
    }  */
  else{
  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
	  console.log(filename + " 404 not found."); 
      response.end();
      return;
    }

     else if (fs.statSync(filename).isDirectory()){ filename += '/lasersaber_alt.html';}//'/aikido_start.html';}

    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
			  console.log(err); 
        return;
      }

      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(file, "binary");
	  console.log(filename + " 200 ok!")
      response.end();
    });
  });}
}).listen(parseInt(port, 10));
