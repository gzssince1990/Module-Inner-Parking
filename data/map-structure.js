/**
 * Created by W2BI on 11/25/2015.
 */

$.ajax({
    url: "/parking-inner-map",
    type: "GET",
    dataType: 'json',
    success: function(map_info){

        var mySvg = new SVG(document.getElementById('floor3'));
        for(var i=0; i<19; i++){
            mySvg.drawRectangle("col"+0+"r"+i,22,71+i*20,39,18,"green","none",0);
            mySvg.drawRectangle("col"+5+"r"+i,459,71+i*20,39,18,"green","none",0);
        }

        for(var i=0; i<20; i++){
            mySvg.drawLine(null,20,70+i*20,20+40,70+i*20,"black",2);
            mySvg.drawLine(null,460,70+i*20,460+40,70+i*20,"black",2);
        }

        for(var i=0; i<13; i++){
            mySvg.drawRectangle("col"+1+"r"+i,139,141+i*20,39,18,"green","none",0);
            mySvg.drawRectangle("col"+2+"r"+i,182,141+i*20,39,18,"green","none",0);
            mySvg.drawRectangle("col"+3+"r"+i,299,141+i*20,39,18,"green","none",0);
            mySvg.drawRectangle("col"+4+"r"+i,342,141+i*20,39,18,"green","none",0);
        }

        for(var i=0; i<14; i++){
            mySvg.drawLine(null,140,140+i*20,140+80,140+i*20,"black",2);
            mySvg.drawLine(null,300,140+i*20,300+80,140+i*20,"black",2);
        }

    },
    error: function(error){
        alert(error);
    }
});


