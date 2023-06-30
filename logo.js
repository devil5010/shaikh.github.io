function toggleMenu() {
    var menuContent = document.getElementById("menuContent");
    var userPage = document.getElementById("userPage");
    var notify = document.getElementById("notify");
    
    // Close other menus if they are open
    if (userPage.style.display !== "none") {
        userPage.style.display = "none";
    }
    if (notify.style.display !== "none") {
        notify.style.display = "none";
    }
    
    // Toggle the current menu
    if (menuContent.style.display === "none") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "none";
    }
}

function toggleButton() {
    var userPage = document.getElementById("userPage");
    var menuContent = document.getElementById("menuContent");
    var notify = document.getElementById("notify");
    
    // Close other menus if they are open
    if (menuContent.style.display !== "none") {
        menuContent.style.display = "none";
    }
    if (notify.style.display !== "none") {
        notify.style.display = "none";
    }
    
    // Toggle the current menu
    if (userPage.style.display === "none") {
        userPage.style.display = "block";
    } else {
        userPage.style.display = "none";
    }
}

function toggleNotify() {
    var notify = document.getElementById("notify");
    var menuContent = document.getElementById("menuContent");
    var userPage = document.getElementById("userPage");
    
    // Close other menus if they are open
    if (menuContent.style.display !== "none") {
        menuContent.style.display = "none";
    }
    if (userPage.style.display !== "none") {
        userPage.style.display = "none";
    }
    
    // Toggle the current menu
    if (notify.style.display === "none") {
        notify.style.display = "block";
    } else {
        notify.style.display = "none";
    }
}

// Add event listener for hover on the menu icon
var menuIcon = document.getElementById("menuIcon");
menuIcon.addEventListener("mouseenter", toggleMenu);


// Slider

