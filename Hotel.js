
var m = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  m++;
  if (m > x.length) {m = 1}    
  x[m-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
