
let express = require("express")
let  app = express();


let port =8080;

app.listen(port,()=>{
    console.log("listening on port")
});

app.set("view engine","ejs");

app.get("/",(req,res)=>{
res.render("port.ejs");
}); 


app.use(express.static("public"));






























































