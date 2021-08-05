var image=document.querySelector(".back-image");
var service=document.querySelectorAll(".services");
var text=document.querySelectorAll(".text-para");
var heading=document.querySelectorAll(".services-sub-heading");
var para=document.querySelectorAll(".services-para");
var up=document.querySelectorAll(".scroll-up");

function display(a){
  removeactiveclasses();
  removeHeading();
  removePara();
  service[a].classList.add("active");
  text[a].style.color="rgb(169, 170, 238)";
  heading[a].classList.add("s");
  para[a].classList.add("p");
  console.log(a);
  image.style.backgroundImage="url('images/"+ a +".jpg')";
}
function removeactiveclasses(){
  for (var i = 0; i < service.length; i++) {
    service[i].classList.remove("active");
  }

}
function removeHeading(){
  for (var i = 0; i < heading.length; i++) {
    heading[i].classList.remove("s");
  }

}
function removePara(){
  for (var i = 0; i < para.length; i++) {
    para[i].classList.remove("p");
  }

}




// text slidesup on scroll
window.addEventListener("scroll",move);
// move();
function move(){
  var windowHeight=window.innerHeight;
  for(var i=0;i<up.length;i++){
    var textTop=up[i].getBoundingClientRect().top;
    if(textTop<windowHeight){
      up[i].classList.add("move-up");
    }
    else{
      up[i].classList.remove("move-up");
    }
  }
}
