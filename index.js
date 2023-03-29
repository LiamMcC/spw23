const express = require('express')
const app = express()
app.set('view engine', 'ejs');


app.use(express.static("views"));


var fs = require('fs')
var bodyParser = require("body-parser") // call body parser module and make use of it
app.use(bodyParser.urlencoded({extended:true}));


const fileUpload = require('express-fileupload');
app.use(fileUpload());

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/about', function (req, res) {
    res.render('about')

    
  })

  app.post('/', function(req,res){
    
    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
   charactersLength));
     }
     
     return result;
  }
  
  var randomPassword = makeid(36)

  console.log(randomPassword)
   let sampleFile = req.files.sampleFile;
   filename = randomPassword + ".jpg";
    
    sampleFile.mv('./images/' + filename, function(err){
        
        if(err)
        
        return res.status(500).send(err);
        console.log("Image you are uploading is " + filename)
        res.redirect('/');
    })
       
    
})
  

app.listen(3000, function(){
console.log("look in Browser")

})