let addToDoButton = document.getElementById("addTodo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

//click button to add a paragraph to the list
addToDoButton.addEventListener("click", function () {
    var paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener("click", function () {
        paragraph.style.textDecoration = "line-through";

    })
    paragraph.addEventListener("dblclick", function () {
        toDoContainer.removeChild(paragraph)
    })

})

