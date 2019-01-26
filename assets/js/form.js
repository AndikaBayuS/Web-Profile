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
    var availability = document.getElementById("pAvailability").innerHTML;
    var age = document.getElementById("pAge").innerHTML;
    var location = document.getElementById("pLocation").innerHTML;
    var experience = document.getElementById("pExperience").innerHTML;
    var email = document.getElementById("pEmail").innerHTML;

    document.getElementById("inpName").value = name;
    document.getElementById("inpRole").value = role;
    document.getElementById("inpAvailability").value = availability;
    document.getElementById("inpAge").value = age;
    document.getElementById("inpLocation").value = location;
    document.getElementById("inpExperience").value = experience;
    document.getElementById("inpEmail").value = email;
}

function saveInput() {
    form.style.display = "none";
    var name = document.getElementById("inpName").value;
    var role = document.getElementById("inpRole").value;
    var availability = document.getElementById("inpAvailability").value;
    var age = document.getElementById("inpAge").value;
    var location = document.getElementById("inpLocation").value;
    var experience = document.getElementById("inpExperience").value;
    var email = document.getElementById("inpEmail").value;

    document.getElementById("pName").innerHTML = name;
    document.getElementById("pRole").innerHTML = role;
    document.getElementById("pAvailability").innerHTML = availability;
    document.getElementById("pAge").innerHTML = age;
    document.getElementById("pLocation").innerHTML = location;
    document.getElementById("pExperience").innerHTML = experience;
    document.getElementById("pEmail").innerHTML = email;
}