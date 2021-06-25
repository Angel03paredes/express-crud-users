const express = require('express');
const routes = require('./src/routes/User.routes');
const path = require("path");
const app = express();


app.set('port',process.env.PORT || '3000')
app.set("views", path.join(__dirname, "src/public"));
app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

app.use('/user', routes)


app.use("/about",(req,res)=>{
    res.render('about');
})

app.use('/', (req,res)=>{
    res.redirect('/user');
})




app.listen(app.get('port'));