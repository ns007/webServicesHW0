'use strict';

var data = "success\n";

var http = require('http');
//create the server 
http.createServer(function(req,res){
    main();
    res.writeHeader(200,{'Content-Type':'text/plain'}); 
    res.end(data);
}).listen(8080,'127.0.0.1'); // listen to localhost on port 8080

function main() {

var EventEmitter  = require('events');

var eventsConfig = require('./mdls/config');;

var Hotel = require('./mdl.js');
var myHotel = new Hotel("Netanel Shilo Best Hotel");


myHotel.on(eventsConfig.RankChanged,function(){
    console.log("Hotel name is :" + myHotel.name);
    console.log("Hotel rank is :" + myHotel.rank);
    if(myHotel.rank < 0){
            console.log("Hotel rank is lower then 0");
    }
});
myHotel.on(eventsConfig.RankChanged,function(){
    data = data + "Hotel name:" + myHotel.name + "\n";
    data = data + "Hotel rank:" + myHotel.rank + "\n";
    if(myHotel.rank < 0){
            data = data + "Hotel rank is lower then 0" +"\n";
    }
});

myHotel.plusStar(2);
myHotel.minusStar(1);
myHotel.minusStar(2);//to see what happens when we get under zero;

}
