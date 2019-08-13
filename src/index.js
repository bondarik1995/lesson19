// let cells = document.querySelectorAll("td");

// cells.forEach((cell) => {
//     cell.onclick = function(e) {
//         e.target.classList.toggle("active");
//     }
// });

const table = document.querySelector("table");
table.onclick = function(e) {
    if (e.target.tagName === "TD") {
        e.target.classList.toggle("active");
    }
}

let btn = document.querySelector("button");
// btn.onclick = function(e) {
//     e.stopPropagation();
//     console.log("click btn");
// }

// document.body.onclick = function(e) {
//     e.stopPropagation();
//     console.log("body");
// }

// document.documentElement.onclick = function() {
//     console.log("html");
// }

btn.addEventListener('click', function() {
    console.log("click btn addevent");
}, true);
document.body.addEventListener('click', function() {
    console.log("click body addevent");
}, true);
document.documentElement.addEventListener('click', function() {
    console.log("click html addevent");
}, true);
