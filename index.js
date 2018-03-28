var slideIndex = 0;
function carousel() {
    var i;
    var x = document.getElementsByClassName("imgslide");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2500);
}
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("imgslide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
var box = document.getElementsByClassName("box-small")
var text=document.getElementsByClassName("box-text")
var content = document.getElementsByClassName("box-content")
function expand(n){
  for (i=0; i<box.length; i++) {
    if (i==n){
      box[n].style.width = "100%";
      box[n].style.height = "100%";
      text[n].style.display="none";
      content[n].style.display="grid"
  }
    else{
      box[i].style.display="none"
    }
}
}
function close(){
      box.style.display="block";
      box.style.width="50%";
      box.style.height="50%"
}
