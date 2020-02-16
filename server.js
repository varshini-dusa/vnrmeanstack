//install & imprt express
const exp = require("express")

//import adminApp and userApp
const adminApp=require("./apis/adminApi");
const userApp=require("./apis/userApis");

//get express obj
const app = exp();

//get path module
const path=require("path");

//connect server.js with angular app of dist folder
app.use(exp.static(path.join(__dirname,'./dist/VNRMEANSTACK')));

//forwarding req obj to apis
app.use("/admin",adminApp);
app.use("/user",userApp);

 
//assign port
const port = 3000;
app.listen(port,()=>{console.log(`server runing on port ${port}`);
});