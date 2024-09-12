// Using DOM(Document Object Model) JS.

const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    const nameData = document.getElementById("name");
    if(nameData.value){
        alert("Welcome, you have been submitted");
    }
   else if(nameData.value === ''){
        alert("name cannot be empty, must have a name");
        event.preventDefault();
    }
});

const button = document.getElementById("change-text");
const newText = document.getElementById("text");

button.addEventListener("click", function(){
    newText.textContent = "Mahim Zayn";
});