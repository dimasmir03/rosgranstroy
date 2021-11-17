port = process.env.PORT || 8000
express = require("express")
app = express()
fs = require("fs")
sql = require("mysql2")
bodyParser = require('body-parser');
//app.use(bodyParser.json());
app.use(express.json());

//data = excel.readFile('WКопия База данных ПП.xlsx')
//datas = excel.utils.sheet_to_json(data.Sheets[data.SheetNames[1]])

conn = sql.createConnection({
    host: "192.168.88.128",
    user: "mysql",
    password: "mysql",
    database: "rosgranstroy",
})
points = []

app.listen(port, function () {
    console.log("Сервер работает")
    conn.connect(err => {
        if (err) {console.log("Error => ", err)}
        else {console.log("Success connect sql")}
        GetPoints()
    })
})

app.use("/", express.static(__dirname + "/sites/main/"))
app.get("/", (res, req) => {
    req.sendFile(__dirname + "/sites/main/main.html")
    //sqladd()
})

app.use("/main/", express.static(__dirname + "/sites/main/"))
app.get("/main", (res, req) => {
    req.sendFile(__dirname + "/sites/main/main.html")
    //sqladd()
})

app.use("/lk", express.static(__dirname + "/sites/lk/"))
app.use("/pp", express.static(__dirname + "/sites/pp/"))
app.use("/", express.static(__dirname + "/sites/pp/"))
app.use("/", express.static(__dirname + "/sites/pp/pps"))
app.get('/ppi', (res,req) => {
    console.log("pp")
    fs.readFile("./sites/pp/pps/ppi.html", "utf8",(err,data)=>{
    points.forEach(function(item, index, array) {
        if(item['Наименование ПП']===res.query.ppn.split(' ')[1] && item['Вид']==="АПП"){ 
            data = data.replace("{adress}", item.Адрес )
            .replace("{time}", "круглосуточно" )
            .replace("{npp}", item['Наименование ПП'] )
            .replace("{state}", item['Сопредельное государство'] )
            .replace("{spp}", item['Сопредельный ПП'] )
            
            req.end(data)
        }
      });
      
    
       
        //req.sendFile(__dirname + "/sites/pp/pps/"+res.query.ppn+".html")
    })
})


app.get("/points", (res, req) => {
    //res.json({ points: points });
    req.send(points)
    console.log("points")
})

app.get("/reg", (res, req) => {
    req.sendFile(__dirname + "/sites/log/reg.html")
    //req.redirect("/reg")
    console.log("reg")
})

app.post("/reg_user",(res,req) =>{
    console.log("reg_user")
})

function sqladd() {
    for (i = 0; i < datas.length; i++) {
        conn.query('INSERT INTO rosgranstroy.points values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', Object.values(datas[i]))
    }
}

function GetPoints() {
    conn.query('SELECT * FROM points', (result, fields) => {
        points = fields
    })
    return points
}