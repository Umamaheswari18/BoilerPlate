var express = require('express');

var fs=require('fs');
var path=require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var querystring=require('querystring');
var router = express.Router();
var app = express();

app.use(cookieParser());

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
//  console.log('Cookies: ', req.cookies);
});


//app.use(express.static(path.join(__dirname,"public")));

// //Creating a new movie list
// router.post('/add',function(request,response)
// {
//
//   console.log("in addM");
//   //var reqData="";
//   var content=JSON.parse(fs.readFileSync('public/javascript/input.json'));
//     //  request.on('data', function (data) {
//     //    reqData+=data;
//     //  });
//
//        var obj={};
//
//        //var parseData=querystring.parse(reqData);
//
//        obj.Title=request.body.Title;
//        obj.Year=request.body.Year;
//        obj.Actors=request.body.Actors;
//        obj.Director=request.body.Director;
//        obj.Released=request.body.Released;
//        obj.Plot=request.body.Plot;
//        obj.imdbRating=request.body.Rating;
//        obj.Awards=request.body.Awards;
//        obj.Poster="images/" + request.body.imageurl;
//
//        //Pushing the object to content Array
//        content.push(obj);
//
//        fs.writeFile('public/javascript/input.json', JSON.stringify(content), function(err) {
//         if(err) {
//         console.log(err);
//         }
//       });
//
//
//       response.sendFile(path.join(__dirname,'../views/'));
//
//       console.log("Cookies" , request.cookies);
//
// });

//Reading the JSON File
router.get('/getJSON',function(req,res)
{
  console.log("inside get json");
  var content=fs.readFileSync('data/input.json');
  res.json(content.toString());
});



//Deleting the Movie name
// router.delete('/deletePage/:x',function(request,response)
// {
//   console.log("Inside delete")
//   var reqData="";
//   reqData=request.params.x;
//
//     console.log(reqData);
//   var content=JSON.parse(fs.readFileSync('data/input.json'));
//
//   for(var i=0;i<content.length;i++){
//     if(content[i].Title==reqData)
//     {
//       content[i]="";
//       start=i;
//     }
//   }
//
//   for(var k=start+1;k<content.length;k++)
//   {
//     content[k-1]=content[k];
//   }
//   content.pop();
//
//
//   fs.writeFile('data/input.json', JSON.stringify(content), function(err) {
//    if(err) {
//    console.log(err);
//    }
//  });

//  response.redirect("/");
//
// });
//


module.exports = router;
