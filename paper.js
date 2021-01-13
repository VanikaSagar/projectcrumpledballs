class paper{
    constructor(x,y,radius)
    {
        var options ={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2

        }
        this.x = x
        this.y = y
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,options)
        this.image=loadImage("sprites/paper.png")
        World.add(world,this.body)
    }
    display()
    {
        var paperpos=this.body.position

        push()
        translate(paperpos.x,paperpos.y)
        imageMode(CENTER)
        this.image.position=this.body.position
        image(this.image,100,0,100,70)
       
        pop()
    }


}