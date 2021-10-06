var http=require('http')
var fs=require('fs')

http.createServer(function(req,res){
    if(req.url==='/'){
    fs.readFile('sample.html',function (err,kal){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(kal)
        res.end()
    })
}else if(req.url==='/login'){
    res.write('Login')
    res.end()
}else{
    res,writeHead(404)
    res.write('error')
    res.end()
}
    
}).listen(7000,function (){
    console.log("Server Started")
})



