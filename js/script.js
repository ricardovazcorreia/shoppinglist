// Declaration des variables
var field = document.querySelector("#field");
var btn   = document.getElementById("enter");
var list  = document.querySelector("ul");

btn.addEventListener("click", function() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(field.value));
    li.classList.add('shopping-item');
    list.appendChild(li);
    field.value = '';
});

field.addEventListener('keypress', function (event) {
    if (field.value.length > 0 && event.keyCode === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(field.value));
        li.classList.add("shopping-item");
        list.appendChild(li);
        field.value = "";
    } 
})



