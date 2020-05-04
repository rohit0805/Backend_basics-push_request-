var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
var frnd=["Tony","Milley","Rander","Walle","Zena"];
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home");
});

app.get("/friends",function(req,res){
    res.render("friends",{friend:frnd});
});

app.post("/addfriend",function(req,res){
    var newfriend=req.body.newfriend;
    frnd.push(newfriend);
    res.redirect("/friends");
});

app.listen(3000,function(){
    console.log("Server started");
});

