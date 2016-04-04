// JavaScript Document

$(document).ready(function() {
   $("#instagram").click(function() {   
 
  $("#Media").fadeOut("slow");
  $("#Media").fadeOut(600);  
 
  
 });	
 
//SnapChat
$("#Snapchat").click(function() {   
  $("#Media2").hide("slow");
  $("#Media2").hide(300);  
 }); 	

//Facebook
$("#Facebook").click(function() {   
  $("#Media3").hide("slow");
  $("#Media3").hide(300);  
 });

 //Linkedin 
  $("#Linkedin").click(function() {   
    $("#Media4").slideUp();
  });
  
//Twitter
 $("#Twitter").click(function() {   
    $("#Media5").slideUp();
  });

//Google
$("#GS").click(function() {   
    $("#Media6").fadeOut("slow");
   $("#Media6").fadeOut(300);  
  });
//Youtube
$("#Youtube").click(function() {   
  $("#Media7").hide("slow");
  $("#Media7").hide(300);  
 });
 
 
//Reset
$("#Reset").click(function() {   
 
  $("#Media").fadeIn("slow");
  $("#Media").fadeIn(600);
  $("#Media2").show("slow");
  $("#Media2").show(300);
  $("#Media3").show("slow");
  $("#Media3").show(300);
  $("#Media4").slideDown();        
  $("#Media5").slideDown();
  $("#Media6").fadeIn("slow");
  $("#Media6").fadeIn(300);
  $("#Media7").show("slow");
  $("#Media7").show(300);  
 });
$("#effect").hover(function() {   
  $("#text").hide("slow");
  $("#text").hide(300);  
 });
$("#effect").hover(function() {   
  $("#text2").hide("slow");
  $("#text2").hide(300);  
 });

$("#effect").hover(function() {   
  $("#text3").hide("slow");
  $("#text3").hide(300);  
 });
$("#effect").hover(function() {   
  $("#text").show("slow");
  $("#text").show(300);  
 });
$("#effect").hover(function() {   
  $("#text2").show("slow");
  $("#text2").show(300);  
 });

$("#effect").hover(function() {   
  $("#text3").show("slow");
  $("#text3").show(300);  
 });     
 });
















