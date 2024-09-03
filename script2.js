const events = [
    {id: "box1", event: "mouseover", color: "red"},
    {id: "box2", event: "mouseout", color: "green"},
    {id: "box3", event: "mousedown", color: "blue"},
    {id: "box4", event: "mouseup", color: "yellow"},
    {id: "box5", event: "click", color: "purple"},
    {id: "box6", event: "dblclick", color: "orange"},
    {id: "box7", event: "mouseenter", color: "pink"},
    {id: "box8", event: "mouseleave", color: "cyan"},
    {id: "box9", event: "mousemove", color: "magenta"},
    {id: "box10", event: "contextmenu", color: "brown"}
];

events.forEach(({id, event, color}) => {
    document.getElementById(id).addEventListener(event, function() {
        this.style.backgroundColor = color;
    });
});