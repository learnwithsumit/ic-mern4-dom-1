// D O M = Document Object Model

// const header = document.getElementById("header");
// console.log(header);

// const header = document.getElementsByClassName("header"); // collection return kore
// const header = document.getElementsByClassName("header")[0];

// const header = document.getElementById("header");
// header.textContent = "DOM tutorial";
// header.innerText = "DOM tutorial";

/* 
innerText vs textContent 
--------------------------
console.log(header.textContent); // DOM tutorial
console.log(header.innerText); // DOM TUTORIAL
*/

// header.style.color = "red";
// header.style.backgroundColor = "gray";
// header.style.fontSize = "50px";
// header.style.textTransform = "uppercase";

// const item = document.querySelector(".item");
// item.style.color = "red";

// const items = document.querySelectorAll(".item");
// for (let i = 0; i <= items.length; i++) {
//   items[i].style.color = "red";
// }

// let container = document.querySelector("#items");

// let lastItem = container.querySelector(".item:last-child");
// let lastItem = document.querySelector(".item:last-child");
// lastItem.style.color = "green";

// let lastItems = document.querySelectorAll(".item:last-child");
// console.log(lastItems);

// let children = document.querySelector("#items");
// console.log(children.parentElement);
// console.log(children.child);

// let child = document.querySelector("#items");
// console.log(child.closest(".container"));

// let vai = document.querySelector("#items");
// console.log(vai.nextElementSibling);
// console.log(vai.previousElementSibling);

// const chotoVaiElement = document.createElement("div");
// chotoVaiElement.innerHTML = "<span>choto vhai</span>";
// const container = document.querySelector(".todo-list");
// container.append(chotoVaiElement);


/* append text accept kore, appendChild text accept kore na
append kisu return kore na, appendChild full element retrun kore
append e multiple element ba parameter accept kore, appendChild kore na */
