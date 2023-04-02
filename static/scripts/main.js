
var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
    document.getElementById("logo").setAttribute("class", "logoclass"); 

    document.getElementById("one").style.color="black";
    document.getElementById("one").classList.add('HoverClass1','HoverClass2');

    document.getElementById("two").style.color="black";
    document.getElementById("two").classList.add('HoverClass1','HoverClass2');

    document.getElementById("three").style.color="black";
    document.getElementById("three").classList.add('HoverClass1','HoverClass2');

    document.getElementById("four").style.color="black";
    document.getElementById("four").classList.add('HoverClass1','HoverClass2');




    
  } else {
    navbar.classList.remove('scrolled')
    document.getElementById("logo").setAttribute("class", "link"); 

    document.getElementById("one").style.color="white";
    document.getElementById("one").classList.remove('HoverClass1');

    document.getElementById("two").style.color="white";
    document.getElementById("two").classList.remove('HoverClass1');

    document.getElementById("three").style.color="white";
    document.getElementById("three").classList.remove('HoverClass1');

    document.getElementById("four").style.color="white";
    document.getElementById("four").classList.remove('HoverClass1');




  }
}








