class block{
constructor(x,y,r,l,u,d){
    this.x=x;
    this.y=y;
    this.w=19;
    this.l=19;
    this.right=r;
    this.left=l;
    this.up=u;
    this.down=d;
  }
  display(){
      ctx.beginPath ();
      ctx.fillStyle = "#ff0000";
      ctx.fillRect(this.x, this.y, this.w, this.l);
      ctx.closePath ();
  }
  update(){
    if(this.right){
      this.x+=20;
    }else if(this.left){
      this.x-=20;
    }else if(this.up){
      this.y-=20;
    }else if(this.down){
      this.y+=20;
    }
    if(Level==1){
      if(this.x==600){this.x=0;}else
      if(this.x==-20){this.x=580;}else
      if(this.y==600){this.y=0;}else
      if(this.y==-20){this.y=580;}
    } else if (Level == 2){
      if(this.x==580){over=true;}else
      if(this.x==0){over=true;}else
      if(this.y==580){over=true;}else
      if(this.y==0){over=true;}
    }
    else if(Level==3){
      if(this.x==580){over=true;}else
      if(this.x==0){over=true;}else
      if(this.y==580){over=true;}else
      if(this.y==0){over=true;}
      if(this.y == 200){
        for(x=180;x<400;x+=20){
          if(this.x == x){over=true;}
        }
      } else if(this.y == 400){
        for(x=180;x<400;x+=20){
          if(this.x == x){over=true;}
        }
      }
    }
  }
}
