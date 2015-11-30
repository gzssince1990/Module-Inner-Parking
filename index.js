/**
 * Created by W2BI on 11/24/2015.
 */
var express = require("express")
    , app = express();

app.use(express.static(__dirname));

//Status producer object
var StatusProducer = require('./module/StatusProducer.js').StatusProducer;
var statusProducer = new StatusProducer();

//handle get request for retrieving parking status
app.get('/parking-status',function(req,res){
    //produce fake status using StatusProducer class
    var col = [19,13,13,13,13,19];

    var status = {};
    for(var i=0; i<col.length; i++){
        status[i] = statusProducer.getStatus(col[i]);
    }

    res.send(status);
});

//handle get request for retrieving
// inner parking map structure
app.get('/parking-inner-map',function(req,res){
    var map_info = {
        num_spots : 90
    };
    res.send(map_info);
});


app.listen(8080);



