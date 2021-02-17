class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bird.body,
            pointB: pointB,
            stiffness: 0.04,
            length: 50
        }
       // this.sling1 = loadImage('sprites/sling1.png');
       // this.sling2 = loadImage('sprites/sling2.png');
       this.sling3 = loadImage('sprites/sling3.png');
        this.pointD = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //image(this.sling1,200,20);
       // image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointD;
            push();
            
            stroke(48,22,8);
           line(pointB.x,pointB.y,pointA.x,pointA.y);
           
            
            pop();
        }
    }
    
}