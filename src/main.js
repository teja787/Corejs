var modal = document.getElementById("myModal");
var btn = document.getElementById("dialogBtn");
var span = document.getElementById("close");

btn.onclick = function (e) {
  e.stopPropagation();
  modal.style.display = "block";
};

const closeDialog = function (e) {
  e.stopPropagation();
  modal.style.display = "none";
};
document.onclick = closeDialog;
