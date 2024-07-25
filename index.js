// var typed= new Typed("#element", {
//     strings:["Web Developer"],
//     typeSpeed:500,
// });

const div = document.querySelector(".element");
const text = "web Developer";

function typingEffect(element, text, i = 0) {
    element.textContent += text[i];
    if (i === text.length - 1) {

        return;
    }
    setTimeout(() => typingEffect(element, text, i + 1), 200);

}

typingEffect(div, text);














// <--------------------About section query-------------------->

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-links");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-200px";
}









