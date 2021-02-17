class Bird  {
  constructor(x,y,radius){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
    //this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.radius =radius;
    this.body = Bodies.circle(x, y, radius,options);
    
   
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }

  display() {
    //this.body.position.x = mouseX;
    console.log(this.body)
    //this.body.position.y = mouseY;
    push();
    translate(this.body.position.x, this.body.position.y);
    ellipseMode(CENTER);
    ellipse(0, 0, this.radius,this.radius);
    pop();
   
   
    //ellipse(x,y w,h)
    
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
