const head1 = document.querySelector("#head1");
console.log(head1);
head1.style.listStyleType = "none";
head1.style.margin = 0;
head1.style.padding = 0;
head1.style.overflow = "hidden";
head1.style.backgroundColor = "#333";

const list1 = document.querySelector("#list1");
console.log(list1);
list1.style.float = "left";

const list2 = document.querySelector("#list2");
list2.style.float = "left";
list2.style.display = "block";
list2.style.color = "white";
list2.style.textAlign = "center";
list2.style.padding = "25px";
list2.style.textDecoration = "none";

const list3 = document.querySelector("#list3");
list3.style.float = "left";
list3.style.display = "block";
list3.style.color = "white";
list3.style.textAlign = "center";
list3.style.padding = "25px";
list3.style.textDecoration = "none";

const list4 = document.querySelector("#list4");
list4.style.float = "left";
list4.style.display = "block";
list4.style.color = "white";
list4.style.textAlign = "left";
list4.style.padding = "25px";
list4.style.textDecoration = "none";

const list5 = document.querySelector("#list5");
list5.style.float = "left";
list5.style.display = "block";
list5.style.color = "white";
list5.style.textAlign = "center";
list5.style.padding = "25px";
list5.style.textDecoration = "none";

function mouseOver(id) {
  document.getElementById(id).style.color = "green";
}

function mouseOut(id) {
  document.getElementById(id).style.color = "white";
}
// setTimeout(() => {
//   const listContainer = document.querySelector("#listContainer");
//   for (let i = 0; i <= 100; i++) {
//     const li = document.createElement("li");
//     const txtNode = document.createTextNode(i + 1);
//     li.appendChild(txtNode);
//     listContainer.appendChild(li);
//     console.log(i);
//   }
// }, 0);

function popUp() {
  const popupContainer = document.querySelector("#popupContainer");
  popupContainer.style.display = "flex";
  //   setTimeout(() => {
  //     popupContainer.style.display = "none";
  //   }, 1000);
}
function popUpClose() {
  const popupContainer = document.querySelector("#popupContainer");
  popupContainer.style.display = "none";
}

function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}

function getConfirmation() {
  var modal = confirm("Do you want to continue ?");
  const logger = document.querySelector("#logger");
  logger.innerHTML = "";
  const div = document.createElement("div");
  const txtNode = document.createTextNode(
    modal == true ? "user want to continue" : "user do not want to continue"
  );
  div.appendChild(txtNode);
  logger.appendChild(div);
}
