class Iron{
    constructor(x,y){
        var options ={
      'density':30,
      'friction': 3,
      'restitution':0.8
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);
    }
    display(){
            push();
            strokeWeight(3);
            stroke('white')
            fill('orange')
            rectMode(CENTER)
            rect(0, 0, this.width, this.height);
            pop();
          };
}