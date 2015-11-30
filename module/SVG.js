/**
 * Created by W2BI on 11/29/2015.
 */

var SVG = new Class({
   //Constructor of SVG;
    initialize: function(svg){
        this.svg = svg;
        this.svgNS = "http://www.w3.org/2000/svg";
    },
    //draw a rectangle;
    drawRectangle: function(id,x,y,w,h,fill,stroke,stroke_width){
        var myRect = document.createElementNS(this.svgNS,"rect");
        myRect.setAttributeNS(null,"id",id);
        myRect.setAttributeNS(null,"x",x);
        myRect.setAttributeNS(null,"y",y);
        myRect.setAttributeNS(null,"width",w);
        myRect.setAttributeNS(null,"height",h);
        myRect.setAttributeNS(null,"fill",fill);
        myRect.setAttributeNS(null,"stroke",stroke);
        myRect.setAttributeNS(null,"stroke-width",stroke_width);
        this.svg.appendChild(myRect);
    },
    //draw a line
    drawLine: function(id,x1,y1,x2,y2,stroke,stroke_width){
        var myLine = document.createElementNS(this.svgNS,"line");
        myLine.setAttributeNS(null,"id",id);
        myLine.setAttributeNS(null,"x1",x1);
        myLine.setAttributeNS(null,"y1",y1);
        myLine.setAttributeNS(null,"x2",x2);
        myLine.setAttributeNS(null,"y2",y2);
        myLine.setAttributeNS(null,"stroke",stroke);
        myLine.setAttributeNS(null,"stroke-width",stroke_width);
        this.svg.appendChild(myLine);
    }
});