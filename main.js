 canvas=new fabric.Canvas('mycanvas') 
var block_image_width=30
var block_image_height=30
var player_x=10
var player_y=10
var player_object="   "
function player_update(){
    fabric.Image.fromURL("player.png",function(img){
      player_object=img
      player_object.scaleToWidth(150)
      player_object.scaleToHeight(140)
      player_object.set({
          top: player_y, left: player_x
 });
 canvas.add(player_object)
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(img){
     block_object=img
      block_object.scaleToWidth(block_image_width)
      block_object.scaleToHeight(block_image_height)
      block_object.set({
          top: player_y, left: player_x
 });
 canvas.add(block_object)
    });
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
   var keypressed=e.keyCode
   if (e.shiftKey == true && keypressed == '80') {
       console.log("p & shift pressed together")
       block_image_width=block_image_width + 10
       block_image_height=block_image_height +10
       document.getElementById("width").innerHTML=block_image_width
       document.getElementById("height").innerHTML=block_image_height
   }
   if (e.shiftKey == true && keypressed == '77') {
    console.log("m & shift pressed together")
    block_image_width=block_image_width - 10
    block_image_height=block_image_height - 10
    document.getElementById("width").innerHTML=block_image_width
    document.getElementById("height").innerHTML=block_image_height
}
if (keypressed == '38') {

    up()
    console.log("up_pressed")
}
if (keypressed == '39') {
    
    right()
    console.log("right_pressed")
}
if (keypressed == '40') {
    
    down()
    console.log("down_pressed")
}
if (keypressed == '37') {
    
    left()
    console.log("left_pressed")
}
if (keypressed == '87') {
    new_image("wall.jpg")
    console.log("w_pressed")
}
if (keypressed == '71') {
    new_image("ground.png")
    console.log("g_pressed")
}
if (keypressed == '76') {
    new_image("light_green.png")
    console.log("l_pressed")
}
if (keypressed == '84') {
    new_image("trunk.jpg")
    console.log("t_pressed")
}
if (keypressed == '82') {
    new_image("roof.jpg")
    console.log("r_pressed")
}
if (keypressed == '89') {
    new_image("yellow_wall.png")
    console.log("y_pressed")
}
if (keypressed == '68') {
    new_image("dark_green.png")
    console.log("d_pressed")
}
if (keypressed == '85') {
    new_image("unique.png")
    console.log("u_pressed")
}
if (keypressed == '67') {
    new_image("cloud.jpg")
    console.log("c_pressed")
}
}

function up() {

    if(player_y >=0)
    {
        player_y =player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y );
        canvas.remove  (player_object);
        player_update();
    }
}
function down() {

    if(player_y <=500)
    {
        player_y =player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y );
        canvas.remove  (player_object);
        player_update();
    }
}
function left() {

    if(player_x >0)
    {
        player_x =player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y );
        canvas.remove  (player_object);
        player_update();
    }
}
function right() {

    if(player_x <=850)
    {
        player_x =player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y );
        canvas.remove  (player_object);
        player_update();
    }
}