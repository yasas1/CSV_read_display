var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
var fs = require('fs');
var csv = require('fast-csv');

var mydata=[];

router.get('/csv', function(req, res, next) {
    
    //res.send('Testing Fucking shit');
    fs.createReadStream('zeptocsv.csv')
    .pipe(csv())
    .on('data',function(data){
        //console.log(data);
        //for (var index = 0; index < data.length; index++) {
           // mydata.push(data[index]);
        //}
        mydata.push(data);
        console.log(mydata);
        
    })
    .on('end',function(data){
        console.log('Read Finished');
        console.log(mydata[0][2]);
        res.send(JSON.stringify( mydata));
    });
    //res.send(JSON.stringify( mydata));

}); */

module.exports = router;


