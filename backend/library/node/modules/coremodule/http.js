const http=require('http')



const server=http.createServer((req,res)=>{
    if(req.url=='/bindu'){
        res.write("idoit u dont have any work")
        res.end()
    }
})

server.listen(8089,()=>{console.log("im working")})