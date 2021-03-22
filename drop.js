class Ground {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.ellipse(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };