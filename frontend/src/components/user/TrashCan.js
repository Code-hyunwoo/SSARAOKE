function TrashCan() {
    var w = c.width = window.innerWidth,
		h = c.height = window.innerHeight,
		ctx = c.getContext( '2d' ),
		
		basket = document.createElement( 'canvas' ),
		bctx = basket.getContext( '2d' ),
		
		opts = {
			eggs: 30,
			bwidth: 250,
			bheight: 150,
			bx: w / 2 - 250 / 2,
			by: h / 3 * 2 - 150 / 2,
			cx: w / 2,
			cy: h / 3 * 2,
			templateColor: 'hsl(hue,30%,65%)',
			backgroundColor: '#333',
			basketColor: '#ccc',
			gravity: .1,
			baseVel: 4.5,
			addedVel: 4,
			baseRad: -1,
			addedRad: -Math.PI + 2,
			baseSize: 30,
			addedSize: 30
		},
		
		eggs = [],
		tick = 0;

// get the basket canvas
basket.width = opts.bwidth;
basket.height = opts.bheight;

bctx.fillStyle = opts.backgroundColor;
bctx.fillRect( 0, 0, opts.bwidth, opts.bheight );

bctx.fillStyle = opts.basketColor;
bctx.beginPath();
bctx.arc( 10, 10, 10, Math.PI / 2, Math.PI / 2 * 3 );
bctx.arc( opts.bwidth - 10, 10, 10, Math.PI / 2 * 3, Math.PI / 2 );
bctx.fill();
bctx.beginPath();
bctx.moveTo( 15, 30 );
bctx.lineTo( opts.bwidth / 5, opts.bheight );
bctx.lineTo( opts.bwidth / 5 * 4, opts.bheight );
bctx.lineTo( opts.bwidth - 15, 30 );
bctx.fill();

// here's to the rest
function Egg(){
	
	this.canvas = document.createElement( 'canvas' );
	this.ctx = this.canvas.getContext( '2d' );
	
	this.reset();
}
Egg.prototype.reset = function(){
	
	this.x = opts.cx;
	this.y = opts.cy;
	
	this.size = opts.baseSize + opts.addedSize * Math.random();
	
	var speed = opts.baseVel + opts.addedVel * Math.random(),
			radian = opts.baseRad + opts.addedRad * Math.random();
	
	this.vx = speed * Math.cos( radian ) || .0001;
	this.vy = speed * Math.sin( radian );
	
	this.resettingOnRender = false;
	
	this.canvas.width = this.size / 1.5;
	this.canvas.height = this.size;
	
	var ectx = this.ctx;
	ectx.fillStyle = opts.templateColor.replace( 'hue', tick );
	ectx.beginPath();
	ectx.moveTo( 0, this.size / 2 );
	ectx.quadraticCurveTo( 0, this.size, this.size / 3, this.size );
	ectx.quadraticCurveTo( this.size / 1.5, this.size, this.size / 1.5, this.size / 2 );
	ectx.quadraticCurveTo( this.size / 1.5 - this.size / 40, this.size / 20, this.size / 3, 0 );
	ectx.quadraticCurveTo( this.size / 40, this.size / 20, 0, this.size / 2 );
	ectx.fill();
}
Egg.prototype.update = function(){
	
	this.x += this.vx;
	this.y += this.vy += opts.gravity;
	
	if( this.y > h + this.size )
		this.resettingOnRender = true;
}
Egg.prototype.render = function(){
	
	if( this.resettingOnRender )
		return this.reset();
	
	var rotation = Math.atan( this.vy / this.vx ) + Math.PI / 2;
	if( this.vx < 0 ) rotation += Math.PI;
	
	ctx.translate( this.x, this.y );
	ctx.rotate( rotation );
	ctx.drawImage( this.canvas, -this.size / 4, -this.size / 2 );
	ctx.rotate( -rotation );
	ctx.translate( -this.x, -this.y );
}


function anim(){
	
	window.requestAnimationFrame( anim );
	
	tick += 5;
	
	ctx.fillStyle = opts.backgroundColor;
	ctx.fillRect( 0, 0, w, h );
	
	if( eggs.length < opts.eggs && Math.random() < .1 )
		eggs.push( new Egg );
	
	eggs.map( function( egg ){ egg.update(); if( egg.vy < 0 ) egg.render(); } );
	ctx.drawImage( basket, opts.bx, opts.by );
	eggs.map( function( egg ){ if( egg.vy > 0 ) egg.render(); } );
}

anim();

    return(
        <div> 
            <canvas id={'c'}></canvas>
        </div>
    )
}

export default TrashCan;