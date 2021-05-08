class Stone{
	constructor(x,y,r)
	{
		var options = {
        'restitution':0.8,
        'friction':2,
        'density':20
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
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			rect(0, 0, this.width, this.height);
			//draw the ellipse here to display the rubber ball

			pop()
	}

}