/**
 * Created by W2BI on 11/25/2015.
 */
require('mootools');

exports.StatusProducer = new Class({
    initialize: function(){
    },
    getStatus: function(n){
        var status = {};
        for(var i=0; i<n; i++){
            status[i] = (Math.floor(Math.random()*2));
        }
        return status;
    }
});