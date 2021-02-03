var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "blue";
    width_of_line = 3;
var width=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden"

}
    canvas.addEventListener("Touchstart", my_Touchstart);
    
    function my_Touchstart(e)
    {
        console.log("my_Touchstart");
        
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;      
    }

    canvas.addEventListener("Touchmove", my_Touchmove);
    function my_Touchmove(e)
    {
        console.log("my_Touchmove");
        
         current_position_of_touch_x =e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
    function cleararea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }

