// Get the div element
var box = document.getElementById('myBox');
var dialog = document.getElementById("dialog");
        
// Add event listener for mouseout event
box.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'red'; // Reset background color
   
   function openDialog() {
    dialog.style.display = "block";
  }openDialog()

});

// Add event listener for mouseover event (just for demonstration)
box.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'green'; // Change background color on hover
    
    var box = document.getElementById('myBox');

  
    
    function closeDialog() {
        dialog.style.display = "none";
      } closeDialog()
    
});