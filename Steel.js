class Steel{
	constructor(x,y,r)
	{var options = {
        'restitution':0.8,
        'friction':1,
        'density':2
    }
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var steelpos=this.body.position;		
			push()
			translate(steelpos.x, steelpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			rect(0, 0, this.width, this.height);
			//draw the ellipse here to display the rubber ball
            
			pop()
	}

}