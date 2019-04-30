$(document).ready(function () {
   $(".menuButton").on ("click", function(){
       $(".menu").slideToggle(300, function(){
           if($(this).css("display") === "none"){
               $(this).removeAttr("style");
           }
       });
   });
   $(".text").on ("mouseenter", function(){
       $(".text").toggleClass("borderMain")
   });
   $(".text").on ("mouseleave", function(){
       $(this).toggleClass("borderMain")
   });
   $(".logoPuma").on("click", function(){
       $("html, body").animate({scrollTop:0},500);
       return false;
   });
});