function openWindow() {
  const windowCv = document.getElementById("window_cv"); // get the cv window
  windowCv.classList.remove("hidden"); // remove 'hidden' class to show window
}

function closeWindow() {
  const windowCv = document.getElementById("window_cv"); // get the cv window
  windowCv.classList.add("hidden"); // add 'hidden' class to hide window
  tab.style.display = "none"; // close the taskbar tab
}
function minimizeWindow() {
  const windowCv = document.getElementById("window_cv"); // get the cv window

  // if the window is already openned : return
  if (windowCv.classList.contains("minimized")) {
    return;
  }

  // Add class minimized to start anim
  windowCv.classList.add("minimized");

  // after anim add 'hidden' to hide the window
  setTimeout(() => {
    windowCv.classList.add("hidden");

    // delete classe minimized after anim
    windowCv.classList.remove("minimized");
  }, 500);
}

function maximizeWindow() {
  const windowCv = document.getElementById("window_cv");
  windowCv.classList.remove("hidden"); // show the window
  windowCv.classList.add("maximized"); // add open anim

  setTimeout(() => {
    windowCv.classList.remove("maximized");
  }, 500); // Durée de l'animation d'ouverture
}

// Event listener to open window when cv icon clicked
document.getElementById("icon_cv").addEventListener("click", openWindow);

// Event listener to close window when close is clicked
document.getElementById("close_cv").addEventListener("click", closeWindow);

// Event listener pour reduce window when close is clicked
document.getElementById("reduce_cv").addEventListener("click", minimizeWindow);

// Event listener for re-opening when clicking on taskbar
document.getElementById("tab_cv").addEventListener("click", maximizeWindow);

// get icon and tab
const icon = document.getElementById("icon_cv");
const tab = document.getElementById("tab_cv");

// add event listener for click on icon
icon.addEventListener("dblclick", function () {
  // show or hide the tab
  if (tab.style.display === "none" || tab.style.display === "") {
    tab.style.display = "flex";
  } else {
    tab.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const windowCv = document.getElementById("window_cv"); // get window
  const titleBar = windowCv.querySelector(".window-cv-title"); // get the title to move

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  titleBar.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - windowCv.offsetLeft;
    offsetY = e.clientY - windowCv.offsetTop;
    windowCv.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      windowCv.style.left = `${x}px`;
      windowCv.style.top = `${y}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      windowCv.style.cursor = "default";
    }
  });
});

function openStartMenu() {
  const StartMenu = document.getElementById("window_start");
  StartMenu.classList.toggle("hidden"); // open-close the start menu
}

// Event listener to open menu when start button clicked
document.getElementById("start").addEventListener("click", openStartMenu);
