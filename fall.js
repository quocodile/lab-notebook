function drag(event) {
    event.dataTransfer.setData("text", event.target.innerHTML);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var text = event.dataTransfer.getData("text");
    event.target.innerHTML += " " + text;
}