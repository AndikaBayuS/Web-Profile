function showMenu() {
    var menu = document.getElementById("menu");
    var box = document.getElementById("box-profile");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        box.style.paddingTop = "0px";
    } else {
        menu.style.display = "block";
        menu.style.marginTop = "10%";
        box.style.paddingTop = "20px";
    }
}