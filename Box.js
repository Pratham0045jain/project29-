class Box extends BaseClass {
    constructor(x, y, width, height,color){
      super(x,y,width,height,color);
      this.Visiblity = 255;
     
      //this.image = loadImage("sprites/wood1.png");
    }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed < 3){
       super.display();
      }
      else{
        World.remove(world, this.body);
        /* var pos = this.body.position;
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect(pos.x,pos.y,40,50);
        pop(); */
      }
      
    }
   
  }