function openWindowCV() {
  const windowCv = document.getElementById("window_cv"); // get the cv window
  windowCv.classList.remove("hidden"); // remove 'hidden' class to show window
}

function closeWindowCV() {
  const windowCv = document.getElementById("window_cv"); // get the cv window
  windowCv.classList.add("hidden"); // add 'hidden' class to hide window
  tabCV.style.display = "none"; // close the taskbar tab
}
function minimizeWindowCV() {
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

function maximizeWindowCV() {
  const windowCv = document.getElementById("window_cv");
  windowCv.classList.remove("hidden"); // show the window
  windowCv.classList.add("maximized"); // add open anim

  setTimeout(() => {
    windowCv.classList.remove("maximized");
  }, 500); // Durée de l'animation d'ouverture
}

// Event listener to open window when cv icon clicked
document.getElementById("icon_cv").addEventListener("dblclick", openWindowCV);

// Event listener to close window when close is clicked
document.getElementById("close_cv").addEventListener("click", closeWindowCV);

// Event listener pour reduce window when close is clicked
document
  .getElementById("reduce_cv")
  .addEventListener("click", minimizeWindowCV);

// Event listener for re-opening when clicking on taskbar
document.getElementById("tab_cv").addEventListener("click", maximizeWindowCV);

// get icon and tab
const iconCV = document.getElementById("icon_cv");
const tabCV = document.getElementById("tab_cv");

// add event listener for click on icon
iconCV.addEventListener("dblclick", function () {
  // show or hide the tab
  if (tabCV.style.display === "none" || tabCV.style.display === "") {
    tabCV.style.display = "flex";
  } else {
    tabCV.style.display = "none";
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

function openWindowBrowser() {
  const windowBrowser = document.getElementById("window_browser"); // get the browser window
  windowBrowser.classList.remove("hidden"); // remove 'hidden' class to show window
}

// Event listener to open window when browser icon clicked
document
  .getElementById("icon_ie")
  .addEventListener("dblclick", openWindowBrowser);

// get icon and tab
const iconBrowser = document.getElementById("icon_ie");
const tabBrowser = document.getElementById("tab_browser");

// add event listener for click on icon
iconBrowser.addEventListener("dblclick", function () {
  // show or hide the tab
  if (tabBrowser.style.display === "none" || tabBrowser.style.display === "") {
    tabBrowser.style.display = "flex";
  } else {
    tabBrowser.style.display = "none";
  }
});

function closeWindowBrowser() {
  const windowBrowser = document.getElementById("window_browser"); // get the browser window
  windowBrowser.classList.add("hidden"); // add 'hidden' class to hide window
  tabBrowser.style.display = "none"; // close the taskbar tab
}
function minimizeWindowBrowser() {
  const windowBrowser = document.getElementById("window_browser"); // get the cv window

  // if the window is already openned : return
  if (windowBrowser.classList.contains("minimized")) {
    return;
  }

  // Add class minimized to start anim
  windowBrowser.classList.add("minimized");

  // after anim add 'hidden' to hide the window
  setTimeout(() => {
    windowBrowser.classList.add("hidden");

    // delete classe minimized after anim
    windowBrowser.classList.remove("minimized");
  }, 500);
}

function maximizeWindowBrowser() {
  const windowBrowser = document.getElementById("window_browser");
  windowBrowser.classList.remove("hidden"); // show the window
  windowBrowser.classList.add("maximized"); // add open anim

  setTimeout(() => {
    windowBrowser.classList.remove("maximized");
  }, 500); // Durée de l'animation d'ouverture
}

// Event listener to close window when close is clicked
document
  .getElementById("close_browser")
  .addEventListener("click", closeWindowBrowser);

// Event listener pour reduce window when close is clicked
document
  .getElementById("reduce_browser")
  .addEventListener("click", minimizeWindowBrowser);

// Event listener for re-opening when clicking on taskbar
document
  .getElementById("tab_browser")
  .addEventListener("click", maximizeWindowBrowser);

document.addEventListener("DOMContentLoaded", () => {
  const windowBrowser = document.getElementById("window_browser"); // get window
  const titleBar = windowBrowser.querySelector(".window-browser-title"); // get the title to move

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  titleBar.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - windowBrowser.offsetLeft;
    offsetY = e.clientY - windowBrowser.offsetTop;
    windowBrowser.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      windowBrowser.style.left = `${x}px`;
      windowBrowser.style.top = `${y}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      windowBrowser.style.cursor = "default";
    }
  });
});

let zIndexCounter = 10;

// Add event listener to all windows
document.querySelectorAll(".window").forEach((window) => {
  window.addEventListener("mousedown", () => {
    // Bring clicked window to the front
    zIndexCounter++;
    window.style.zIndex = zIndexCounter;
  });
});

// Function to open the browser window with the specified URL
function openWindowWithUrl(url) {
  const browserWindow = document.getElementById("window_browser");
  const browserIframe = document.getElementById("iframe_content");

  // Set the iframe src to the provided URL
  browserIframe.src = url;

  // Show the browser window
  browserWindow.classList.remove("hidden");
}

// Add event listeners to desktop icons
document.querySelectorAll(".desktop-icon").forEach((icon) => {
  icon.addEventListener("dblclick", () => {
    const url = icon.getAttribute("data-url"); // Get the URL from the data attribute
    openWindowWithUrl(url); // Open the window with the URL
  });
});

// Event listener to close the browser window
document.getElementById("close_browser").addEventListener("click", () => {
  const browserWindow = document.getElementById("window_browser");
  const browserIframe = document.getElementById("iframe_content");

  // Hide the browser window and clear the iframe src
  browserWindow.classList.add("hidden");
  browserIframe.src = "";
});
