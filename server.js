
	//����http��urlģ��  
    var http = require("http");
	var url = require("url");
	var fs = require("fs");
	
	console.log("Hi This is Server.");
    var start = function(route,handle){  
		//ͨ��http�ṩ�Ķ˿ڼ�������������3000�˿ڽ��м���  
        http.createServer(function(request,response){
			//�����ص�3000�˿ڱ�����ʱ���ص����������� 
            var pathname = url.parse(request.url).pathname;
			console.log("Hi pathname is="+pathname);
			//url ������Ŀ¼�������ڡ�tomcat server�ϴ������url/xxx.do��servlet��������
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
    //����start�����ɱ��ⲿ����  
    exports.start  = start ;