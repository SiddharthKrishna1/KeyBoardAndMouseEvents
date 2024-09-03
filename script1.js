document.getElementById("box1").addEventListener("mouseover", function() {
    alert("Mouse Over Event");
  });
  
  document.getElementById("box2").addEventListener("mouseout", function() {
    alert("Mouse Out Event");
  });
  
  document.getElementById("box3").addEventListener("mousedown", function() {
    alert("Mouse Down Event");
  });
  
  document.getElementById("box4").addEventListener("mouseup", function() {
    alert("Mouse Up Event");
  });
  
  document.getElementById("box5").addEventListener("click", function() {
    alert("Click Event");
  });
  
  document.getElementById("box6").addEventListener("dblclick", function() {
    alert("Double Click Event");
  });
  
  document.getElementById("box7").addEventListener("mouseenter", function() {
    alert("Mouse Enter Event");
  });
  
  document.getElementById("box8").addEventListener("mouseleave", function() {
    alert("Mouse Leave Event");
  });
  
  document.getElementById("box9").addEventListener("mousemove", function() {
    alert("Mouse Move Event");
  });
  
  document.getElementById("box10").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Right Click Event");
  });
  