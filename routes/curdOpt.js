var express=require('express');
var bodyparser=require('body-parser');
var cookieParser=require('cookie-parser');
var fs=require('fs');
var path=require('path');

var router = express.Router();
var app = express();

app.use(cookieParser());

//Creating a new movie list
router.post('/add',function(request,response)
{

  console.log("in addM");
  //var reqData="";
  var content=JSON.parse(fs.readFileSync('data/input.json'));

    //  request.on('data', function (data) {
    //    reqData+=data;
    //  });

       var obj={};

      //console.log(request.body);

      // var parseData=querystring.parse(reqData);
      // console.log(parseData);
       obj.Title=request.body.Title;
       obj.Year=request.body.Year;
       obj.Actors=request.body.Actors;
       obj.Director=request.body.Director;
       obj.Released=request.body.Released;
       obj.Plot=request.body.Plot;
       obj.imdbRating=request.body.Rating;
       obj.Awards=request.body.Awards;
       obj.Poster="images/" + request.body.imageurl;

       //Pushing the object to content Array
       content.push(obj);

       fs.writeFile('data/input.json', JSON.stringify(content), function(err) {
        if(err) {
        console.log(err);
        }
      });
      response.redirect('/');
      console.log("Cookies" , request.cookies);

});

//Updating the Movie Details
router.post('/update',function(request,response)
{
  console.log("in update");
//  console.log(request.body);
  // var reqData="";
  var content=JSON.parse(fs.readFileSync('data/input.json'));

      //var  obj={};

       //var parseData=querystring.parse(reqData);

       console.log(request.body.Title );

       for(var k=0;k<content.length;k++)
       {
         if(request.body.Title == content[k].Title)
         {
           console.log("Inside if loop")
           content[k].imdbRating=request.body.updRating;
           content[k].Awards=request.body.updAwards;
           content[k].Poster="images/" + request.body.imageurl;
         }
       }

       fs.writeFile('data/input.json', JSON.stringify(content), function(err) {
        if(err) {
        console.log(err);
        }
      });

  //   response.sendFile(path.join(__dirname,'../views/'));
    response.redirect('/');

});



router.delete('/deletePage/:x',function(request,response)
{
  console.log("Inside delete")
  var reqData="";
  reqData=request.params.x;

    console.log(reqData);
  var content=JSON.parse(fs.readFileSync('data/input.json'));

  for(var i=0;i<content.length;i++){
    if(content[i].Title==reqData)
    {
      content[i]="";
      start=i;
    }
  }

  for(var k=start+1;k<content.length;k++)
  {
    content[k-1]=content[k];
  }
  content.pop();


  fs.writeFile('data/input.json', JSON.stringify(content), function(err) {
   if(err) {
   console.log(err);
   }
 });

// response.sendFile(path.join(__dirname,'../views/'));
 response.redirect("/");


});

 module.exports = router;
