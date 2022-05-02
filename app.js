const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

var items = []
var msg = ""

app.get("/", (req, res)=>{
    
    var today = new Date()
    var day = today.toLocaleString('en-us', {  weekday: 'long' })
    var month = today.toLocaleString('en-us', { month: 'short'})
    var date = today.getDate()
    var year = today.toLocaleString('en-us', { year: 'numeric'})

    res.render("list", {day: day, month: month, year: year, date: date, newListItem: items, errorMsg:msg})

})

app.post("/", (req, res)=>{
    
    var value = req.body.myButton
    msg = ""
    if(value == "addItem"){
        var item = req.body.newItem
        if(item !== "") items.push(item)
    }
    else if(value == "removeItem"){
        if(items.length === 0){
            msg = "Sorry there are no added tasks. Please add some tasks first."
        }
        else items.pop()
    }
    
    res.redirect("/")

})

app.listen(3000, ()=>{
    console.log("server is running on port: 3000")
})