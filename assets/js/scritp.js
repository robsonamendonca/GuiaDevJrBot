let button = document.querySelector('#meadd');

// Get the modal
var modal = document.getElementById("comandosModal");

if(button){
    //https://bit.ly/GuiaDevJrBot
    button.addEventListener("click", 
    function(){ 
        window.location.href="https://bit.ly/GuiaDevJrBot";
     });
}

// Get the button that opens the modal
var lnk = document.getElementById("mylnk");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
lnk.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }  
}