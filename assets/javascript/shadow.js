window.onscroll = function () {
  scroll()
};

function scroll() {
  var topbar = document.body.scrollTop;
  if (topbar >= 100 || document.documentElement.scrollTop >100) {

    document.getElementsByTagName('header')[0].classList.add("bg-white");
    document.getElementsByTagName('header')[0].classList.add("header-shadow");
    document.getElementById('secondry-toggle-button').classList.add("border")

  } 
  else {
    document.getElementsByTagName('header')[0].classList.remove("bg-white");
    document.getElementById('secondry-toggle-button').classList.remove("border")
    document.getElementsByTagName('header')[0].classList.remove("header-shadow");
  }

}