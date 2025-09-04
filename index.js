const express=require("express");
const app=express();
let port=8080;
const path=require("path");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
const {v4:uuidv4}=require('uuid');
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
let posts=[
    {
        id:uuidv4(),
    username: "Archana",
    content: "Smile More",
    },
    {
        id:uuidv4(),
        username:"Preeti",
        content:"hardwork beat talent when talent do not work hard",
    },
    {
        id:uuidv4(),
        username:"Antima",
        content:"Member may go,Member may come,but the company go on forever",
    },
    {
        id:uuidv4(),
            username:"Deeeedeeee",
            content:"Have a patience"
    },
    {
        id:uuidv4(),
        username:"Bhaiya",
        content:"First deserve,then desire",
    }

];



app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
});
app.get("/posts",(req,res)=>{
    // console.log("get request received");
    // res.send("server working well");
    res.render("index.ejs",{posts});
      });
    app.get("/posts/new",(req,res)=>{
        res.render("new.ejs");
  
});
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    posts.push({username,content});
    // res.send("post request working");
    res.redirect("/posts");
});
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    // console.log(id);
    let post=posts.find((p)=>id===p.id);
    // console.log(post);
    res.render("show.ejs",{post});
});
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(post);
    // res.send("patch request working");
    res.redirect("/posts");
});
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
});
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
       posts=posts.filter((p)=>id!==p.id);
    //   res.send("delete success");
    res.redirect("/posts");
});