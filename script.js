const inputbox = document.querySelector("input");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputbox.value == "") {
    alert("Enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
  }
  inputbox.value = "";
  savedata();
}

listcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savedata();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
  }
});

function savedata() {
  localStorage.setItem("tasks", listcontainer.innerHTML);
}

function showlist() {
  listcontainer.innerHTML = localStorage.getItem("tasks");
}

showlist();
