/*
  Do NOT uncomment the lines of code below, they will cause errors.  
  But I am providing it as a template.
  */
// document.querySelector("ELEMENT").addEventListener("EVENT",function(){}



// Alot the the questions I had came after class ended so it was no way for me to ask anythin



// Problem 1
window.addEventListener("load", function() {
  console.log("Tanay Dixon")});

// Problem 2
document.getElementsByTagName("h1")[0].addEventListener("click", function(){
  h1.remove()
});

// Problem 3

document.querySelector("#container").addEventListener("dblclick", function(){
  document.querySelector('#container :nth-child(5)').remove;
});

// Problem 4
// Part 1
document.getElementsByTagName("figcaption")[0].addEventListener('mouseover', function(){
  console.log("add cursive");
  figcap1.style.fontFamily = "Cursive";
 });
  
 // Problem 4
 // Part 
 document.querySelectorAll("figcaption")[0].addEventListener('mouseout', function(){
  document.querySelectorAll("figcaption")[0].style.fontFamily = "Times";
 });
 


// Problem 5
document.querySelectorAll("figcaption")[0].addEventListener('', function(){
  document.querySelectorAll("figcaption")[0].style.fontFamily = "Times";
 });
 

// Problem 6
document.querySelectorAll("figcaption")[0].addEventListener('focus', function(){
  document.querySelectorAll("figcaption")[0].style.fontFamily = "Times";
 });


// Problem 7




// Problem 8
var img = document.getElementsByTagName("img")[8];
document.getElementById("style2").addEventListener("click", function(){
  if(img.classList.contains("pizazz")){
    img.classList.remove("pizazz");
} else{
  img.classList.add("pizazz");
}
})


// Problem 9