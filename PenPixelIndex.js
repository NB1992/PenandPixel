// JavaScript Document
//  Loop
$(document).ready(function() {   
//Landing	
var angle=0;
setInterval(function(){
angle+=3;
 $("#Reel").rotate(angle);
},50);

var angle1=0;
setInterval(function(){
angle1+=3;
  $("#Reel2").rotate(angle1);
},50);







});