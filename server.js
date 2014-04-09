
	//引入http，url模块  
    var http = require("http");
	var url = require("url");
	var fs = require("fs");
	
	console.log("Hi This is Server.");
    var start = function(route,handle){  
		//通过http提供的端口监听方法，来对3000端口进行监听  
        http.createServer(function(request,response){
			//当本地的3000端口被访问时，回调该匿名函数 
            var pathname = url.parse(request.url).pathname;
			console.log("Hi pathname is="+pathname);
			//url 的请求目录，类似于“tomcat server上处理访问url/xxx.do的servlet类的情况”
            if(pathname == "/start"){  
				response.writeHead(200,{"Content-Type":"text/plain"});  
				response.write("Hi I am server Start!");  
				response.end();  
            } else {
				fs.readFile('./index.vm',function(err, data) {
					response.writeHead(200, {"Content-Type": "text/html"});  
					response.write(data);  
					response.end();  
				});
            }
        }).listen(3000);  
  
    };
    //声明start方法可被外部调用  
    exports.start  = start ;