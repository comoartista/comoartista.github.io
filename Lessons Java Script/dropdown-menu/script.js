
/* ================================================
     DROPDOWN
   ================================================ */

document.getElementById('nav').onmouseover = function (event) {

  let target = event.target;
  if (target.className == 'menu-rental') {
    let s = target.getElementsByClassName('submenu');
    closeMenu();
    s[0].style.display = 'block';
  }
}

document.onmouseover = function (event) {
  let target = event.target;
  console.log(event.target);
  if (target.className != 'menu-rental' && target.className != 'submenu') {
    closeMenu();
  }
}

function closeMenu() {
  let subm = document.getElementsByClassName('submenu');
  for (var i = 0; i < subm.length; i++) {
    subm[i].style.display = "none";
  }
}