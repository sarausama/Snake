width=800;
height=600;
Level = 1;
over = false;
right=false;
left=false;
up=false;
down=false;
black = false;
score = 0;
high_score = 0;
paused =false;
window.onload = function () {
   canvas = document.getElementById ("myCanvas");
   ctx = canvas.getContext ("2d");
   time = 90;
   setInterval (Fixed_Update, time);
   size = 1;
   snake =[];
   apple = new food();
   snake[0]=new block(280,280,false,false,false,false);
  document.addEventListener ("keydown", function(evt) {
		var key = evt.keyCode;
    console.log("keycode: "+ key);
    if(key == 39 && !snake[0].right && !snake[0].left){
      right=true;left=false;up=false;down=false;
    }//right
    if(key == 37 && !snake[0].right && !snake[0].left){
      left=true;right=false;up=false;down=false;
    }//left
    if(key == 38 && !snake[0].up && !snake[0].down){
      up=true;left=false;down=false;right=false;
    }//up
    if(key == 40 && !snake[0].up && !snake[0].down){
      down=true;left=false;right=false;up=false;
    }//down
    if(key == 32){
      paused = !paused;
    }
    if(key == 82){
      size = 1;
      Level =1;
      apple = new food();
      snake[0]=new block(280,280,false,false,false,false);
      score =0;
      over = false;
      black = false;
    }
	})
}

function create_black_hole(){
  if(!black && Level<3){
    if(size>14){
      black_hole = new food();
      black_hole.colour=1;
      black = true;
    }
  }
}

function check_black_hole(){
  if(snake[0].x == black_hole.x && snake[0].y == black_hole.y){
    black = false;
    return true;
    apple = new food();
  }
}

function check_apple(){
  if(snake[0].x==apple.x && snake[0].y==apple.y){
    if(snake[size-1].right){
      snake[size] = new block(snake[size-1].x-20,snake[size-1].y,true,false,false,false);++size;
    }else if(snake[size-1].left){
      snake[size] = new block(snake[size-1].x+20,snake[size-1].y,false,true,false,false);++size;
    }else if(snake[size-1].up){
      snake[size] = new block(snake[size-1].x,snake[size-1].y+20,false,false,true,false);++size;
    }else if(snake[size-1].down){
      snake[size] = new block(snake[size-1].x,snake[size-1].y-20,false,false,false,true);++size;
    }
    score+=1*Level;
    if(high_score < score){
      high_score = score;
    }
    apple = new food();
  }
}

function level(){
  if(Level == 2){
    ctx.beginPath ();
    ctx.fillStyle = "#ff00ff";
    for(y=0;y<30;++y){
      ctx.fillRect(0, y*20, 19, 19);
      ctx.fillRect(580, y*20, 19, 19);
    }
    for(x=0;x<30;++x){
      ctx.fillRect(x*20, 0, 19, 19);
      ctx.fillRect(x*20, 580, 19, 19);
    }
    ctx.closePath();
  } else if(Level==3){
    ctx.beginPath ();
    ctx.fillStyle = "#ff00ff";
    for(y=0;y<30;++y){
      ctx.fillRect(0, y*20, 19, 19);
      ctx.fillRect(580, y*20, 19, 19);
    }
    for(x=0;x<30;++x){
      ctx.fillRect(x*20, 0, 19, 19);
      ctx.fillRect(x*20, 580, 19, 19);
    }
    for(i=9;i<20;++i){
      ctx.fillRect(i*20, 400, 19, 19);
      ctx.fillRect(i*20, 200, 19, 19);
    }
    ctx.closePath();
  }
}

function corner(){
  ctx.fillStyle = "#7fffd4";
  ctx.fillRect(600, 0, 200, 600);
  ctx.font = "30px Impact";
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillText("Score"+": "+score, 610, 50);
  ctx.fillText("High Score"+": "+high_score, 610, 100);
  ctx.fillText("Level"+": "+Level, 610, 150);
  ctx.fillText("Instructions: ", 610, 200);
  ctx.font = "20px Impact";
  ctx.fillText("-Arrows to move ", 610, 250);
  ctx.fillText("-Space to pause ", 610, 300);
  ctx.fillText("-r to restart ", 610, 350);
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(610, 385, 19, 19);
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillText("Snake", 650, 400);
  ctx.fillStyle = "#00ff00";
  ctx.fillRect(610, 435, 19, 19);
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillText("Food", 650, 450);
  ctx.fillStyle = "#000000";
  ctx.fillRect(610, 485, 19, 19);
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillText("Black Hole", 650, 500);
  ctx.fillStyle = "#ff00ff";
  ctx.fillRect(610, 535, 19, 19);
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillText("Wall", 650, 550);
}

function Fixed_Update () {
  check_snake();
  if(over){
    ctx.beginPath ();
    ctx.clearRect(0,0,800,600);
    ctx.font = "70px Impact";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillStyle = "#000000";
    ctx.fillRect(600, 0, 200, 600);
    ctx.fillText("Game Over", 150, 310);
    corner();
    ctx.closePath ();
  }
  else {
    if(!paused){
      ctx.clearRect(0,0,width,height);
      ctx.beginPath();
      corner();
      level();
      ctx.closePath ();
      for(i=size-1;i>0;--i){
        snake[i].right=snake[i-1].right;
        snake[i].left=snake[i-1].left;
        snake[i].up=snake[i-1].up;
        snake[i].down=snake[i-1].down;
      }
      if(right){
        snake[0].right=true;
        snake[0].left=false;
        snake[0].up=false;
        snake[0].down=false;
      }else if(left){
        snake[0].right=false;
        snake[0].left=true;
        snake[0].up=false;
        snake[0].down=false;
      }else if(down){
        snake[0].right=false;
        snake[0].left=false;
        snake[0].up=false;
        snake[0].down=true;
      }else if(up){
        snake[0].right=false;
        snake[0].left=false;
        snake[0].up=true;
        snake[0].down=false;
      }
      apple.display();
      check_apple();
      for(i=0;i<size;++i){snake[i].update();snake[i].display();}
      create_black_hole();
      if(black){
        black_hole.display();
        if(check_black_hole()){
          ++Level;
          snake[0]=new block(280,280,false,false,false,false);
          size=1;
        }
      }
      ctx.closePath ();

    }else if(paused){
      ctx.clearRect(0,0,800,600);
      ctx.font = "70px Impact";
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.fillStyle = "#000000";
      ctx.fillRect(600, 0, 200, 600);
      ctx.fillText("Paused", 180, 310);
      corner();
      ctx.closePath ();
    }
  }
}

function check_snake(){
    for(i=1;i<size;++i){
      if(snake[0].x== snake[i].x && snake[0].y== snake[i].y){
        over=true;
      }
    }
}
