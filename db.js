//inport and install mongodb
const mc = require("mongodb").MongoClient;

//import 
var dbo;
var usercollectionObj;
var admincollectionObj;
//get database url
const dbUrl = "mongodb+srv://<username>:<password>@cluster0-d804y.mongodb.net/test?retryWrites=true&w=majority";

function initDb() {
    mc.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            console.log("err during db conn", err);
        } else {
            dbo = client.db("mydb");
            console.log("connected to db..");
            usercollectionObj=dbo.collection("usercollection");
            admincollectionObj=dbo.collection("admincollection");
        }
    });
}

function getDb() {
    console.log(dbo, "Db has not been initialised. Please called initDb");
    return {
        usercollectionObj:usercollectionObj,
        admincollectionObj:admincollectionObj
    }
}

module.exports = {
    getDb,
    initDb
}