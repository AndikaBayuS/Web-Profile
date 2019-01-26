var form = document.getElementById("input-form");
form.style.display = "none";

function inputForm() {
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }

    var name = document.getElementById("pName").innerHTML;
    var role = document.getElementById("pRole").innerHTML;
    var experience = document.getElementById("pAvailability").innerHTML;
    var age = document.getElementById("pAge").innerHTML;
    var location = document.getElementById("pLocation").innerHTML;
    var experience = document.getElementById("pExperience").innerHTML;
    var email = document.getElementById("pEmail").innerHTML;

    document.getElementById("inpName").value = name;
    document.getElementById("inpRole").value = role;
    document.getElementById("inpAvailability").value = experience;
    document.getElementById("inpAge").value = age;
    document.getElementById("inpLocation").value = location;
    document.getElementById("inpExperience").value = experience;
    document.getElementById("inpEmail").value = email;
}