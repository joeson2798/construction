function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
  }



  
 
function reveal() {
  var reveals = document.querySelectorAll(".down-reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  reveals = document.querySelectorAll(".left-reveal");
  for (var i = 0; i < reveals.length; i++) {
    windowHeight = window.innerHeight;
    elementTop = reveals[i].getBoundingClientRect().top;
    elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  reveals = document.querySelectorAll(".right-reveal");
  for (var i = 0; i < reveals.length; i++) {
    windowHeight = window.innerHeight;
    elementTop = reveals[i].getBoundingClientRect().top;
    elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);