function addNewWEField() {
    console.log("Adding new work experience field");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let weAddButtonOb = document.getElementById("weAddButton");

    if (weAddButtonOb) {
        weAddButtonOb.parentNode.insertBefore(newNode, weAddButtonOb);
    } else {
        console.error("Element with ID 'weAddButton' not found.");
    }
}

function addNewAQField() {
    console.log("Adding new academic qualification field");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let aqAddButtonOb = document.getElementById("aqAddButton");

    if (aqAddButtonOb) {
        aqAddButtonOb.parentNode.insertBefore(newNode, aqAddButtonOb);
    } else {
        console.error("Element with ID 'aqAddButton' not found.");
    }
}


function generateCV(){

    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = namefield;

    document.getElementById("nameT2").innerHTML=namefield;

    document.getElementById("caT").innerHTML = document.getElementById("cafield").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;

    document.getElementById("liT").innerHTML = document.getElementById("lifield").value;

    document.getElementById("objT").innerHTML = document.getElementById("objectiveField").value;

    let wes = document.getElementsByClassName("weField");
let str = "<ul>";

for (let e of wes) {
    str += `<li>${e.value}</li>`;
}

str += "</ul>";

document.getElementById("weT").innerHTML = str;


let aqs = document.getElementsByClassName("aqField");
let str1 = "<ul>";

for (let e of aqs) {
    str += `<li>${e.value}</li>`;
}

str += "</ul>";

document.getElementById("aqT").innerHTML = str1;


let file = document.getElementById("imgfield").files[0];

console.log(file);

let reader = new FileReader();

reader.readAsDataURL(file);
console.log(reader.result);


reader.onloadend = function () {
    document.getElementById("imgT").src = reader.result;
}


document.getElementById("cv-form").style.display = "none";
document.getElementById("cv-tempelate").style.display = "block";

}


function printCV() {
    window.print();
}


