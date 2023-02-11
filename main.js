var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

block_image_width=150;
block_image_height=150;

block_image_object="";

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='49'){
        new_image('riolu.png')
    }
    if(keyPressed=='50'){
        new_image('cyndaquil.png')
    }
    if(keyPressed=='51'){
        new_image('torchic.png')
    }
    if(keyPressed=='52'){
        new_image('hippopotas.png')
    }
    if(keyPressed=='53'){
        new_image('squirtle.png')
    }
    if(keyPressed=='54'){
        new_image('stufful.png')
    }
}