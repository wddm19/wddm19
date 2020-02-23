// Nav bar
function responsiveMenu() {
    let menu = document.getElementById("toggled");
    let menuStyle = window.getComputedStyle(menu);
    let display = menuStyle.getPropertyValue('display');
  
    if (display === 'none') {
      toggle.style.backgroundColor = "gray";
      menu.style.display = "block";
    } else {
      toggle.style.backgroundColor = "transparent";
      menu.style.display = "none";
    };
  };
  
  // add event listener to menu button
  let toggle = document.getElementById("menu-toggle");
  toggle.addEventListener("click", responsiveMenu, false);
