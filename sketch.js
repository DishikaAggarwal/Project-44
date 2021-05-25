var ball;
var bg;
var xval=50;
var yval=50;
var bluegroup,greengroup,pinkgroup,purplegroup,yellowgroup,allgroup,shooter;

function preload ()
{
        //loadin
        bg=loadImage("images/background.jpg");
        blueimg=loadImage("images/blueball.png");
        greenimg=loadImage("images/greenball.png");
        pinkimg=loadImage("images/pinkball.png");
        purpleimg=loadImage("images/purpleball.png");
        yellowimg=loadImage("images/yellowball.png");
}


function setup()
 {
        createCanvas(600,700);
        //creating groups
        bluegroup=new Group ();
        greengroup=new Group ();
        pinkgroup=new Group ();
        purplegroup=new Group ();
        yellowgroup=new Group ();
        allgroup=new Group();

        shooter=createSprite(280,500,10,10);
        var randm=Math.round(random(1,5));
        ballselect(shooter,randm);
        
        for(var r=0;r<5;r++)
        {
                for(var c=0;c<10;c++)
                {
                        ball=createSprite(xval,yval,50,50);
                        var rand=Math.round(random(1,5));
                        allgroup.add(ball);
                        ballselect(ball,rand);
                        switch(rand)
                        {
                                case 1: bluegroup.add(ball);
                                        break;
                                case 2: greengroup.add(ball);
                                        break;
                                case 3: pinkgroup.add(ball);
                                        break;
                                case 4: purplegroup.add(ball);
                                        break;
                                case 5: yellowgroup.add(ball);
                                        break;
                                        
                        }
                        xval=xval+55;
               }
                xval=50;
                yval=yval+55;
        }
        
 }

function draw()
 {
  background(bg);  
 
  fill("black");
//  text(mouseX+" "+mouseY,mouseX,mouseY);
        // for(var x=0;x<allgroup.length;x++)
        // {
        //         if(mousePressedOver(ball[x]))
        //         {
        //                 var x=mouseX;
        //                 var y=mouseY;
        //                 console.log(x+" "+y)
        //         }

        // }

        //shooter.x=mouseX;
        //shooter.y=mouseY;

      if (frameCount%200===0){
              allgroup.setVelocityYEach(3)
      }else{
              allgroup.setVelocityYEach(0)
      
      }


        drawSprites();
 
}
function ballselect(ball,rand)
{
        switch(rand)
        {
          case 1: ball.addImage(blueimg);
                  ball.scale=0.15;
                  break;
          case 2: ball.addImage(greenimg);
                  ball.scale=0.3;
                  break;
          case 3: ball.addImage(pinkimg);
                  ball.scale=0.35;
                  break;
          case 4: ball.addImage(purpleimg);
                  ball.scale=0.3;
                  break;
          case 5: ball.addImage(yellowimg);
                  ball.scale=0.29;
                  break;
                  
        }       
}