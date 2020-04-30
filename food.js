class food{
constructor(x,y){
    this.find_location();
    this.w=19;
    this.l=19;
    this.a=true;
    this.colour=0;
  }
  display(){
      ctx.beginPath ();
      if(this.colour==0){
        ctx.fillStyle = "#00ff00";
        ctx.fillRect(this.x, this.y, this.w, this.l);
      } else {
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.x, this.y, this.w, this.l);
      }
      ctx.closePath ();
  }
  find_location(){
    if(Level == 1){
      this.x = (Math.floor(Math.random()*28))*20+20;
      this.y = (Math.floor(Math.random()*28))*20+20;
    } else if(Level == 2){
      this.x = (Math.floor(Math.random()*28))*20+20;
      this.y = (Math.floor(Math.random()*28))*20+20;
    } else if(Level == 3){
      this.x = (Math.floor(Math.random()*28))*20+20;
      this.y = (Math.floor(Math.random()*28))*20+20;
      if(this.y == 200 || this.y == 400){
        for(x=180;x<400;x+=20){
          if(this.x == x){
            rand = Math.random();
            if(rand<0.5){
              this.x = (Math.floor(Math.random()*8)+1)*20;
            }else{
              this.x = (Math.floor(Math.random()*10)+20)*20;
            }
          }
        }
      }
    }
  }
}
