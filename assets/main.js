// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
//
// function myFunction2() {
//   var x = document.getElementById("myDIV2");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
//
// function myFunction3() {
//   var x = document.getElementById("myDIV3");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
//
// document.addEventListener('DOMContentLoaded', ready)
//
// function ready (){
// var myDIV = document.querySelector('.myDIV')
// var menuitem = document.querySelector('.menuitem')
//
// function menuitemClicked () {
//     console.log("you clicked it")
//     if (myDIV.classList.contains('clicked')){
//       myDIV.classList.remove('clicked');
//     } else {
//       myDIV.classList.add('clicked');
//     }
// }
//
// menuitem.addEventListener('click', menuitemClicked)
// }

$(document).ready(function(){
  $("#info").click(function(){
  $(".infocopy").slideToggle();
});
  $("#consign").click(function(){
    $(".consigncopy").slideToggle();
});
$("#contact").click(function(){
$(".contactcopy").slideToggle();
});
});
