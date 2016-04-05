'use strict'

var EventEmitter  = require('events');
var eventsConfig = require('./mdls/config');;

module.exports  = class Hotel extends  EventEmitter{
    constructor(name){
        super();
        this.name = name;
        this.rank = 0;
    }
    plusStar(numberOfStars){
        this.rank += numberOfStars;
        this.emit(eventsConfig.RankChanged);
        
    }
    minusStar(numberOfStars){
        this.rank -= numberOfStars;
        this.emit(eventsConfig.RankChanged);
    }

}

