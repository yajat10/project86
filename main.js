var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
             fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
            object_play=Img;
            object_play.scaleToWidth(799)
            object_play.scaleToHeight(600)
            object_play.set({
                top:0,
                left:0
            })
            canvas.add(object_play)
        })    
    }
	


function playSound(){
	x.play()
}
