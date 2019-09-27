import React from "react"

class AnimateCanvas extends React.Component {

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
        xPos : "",
        yPos : "",
        radius : "",
        colors : ['255, 255, 255',
                '255, 99, 71',
                '90, 90, 90'],
        minRadius : 10,
        maxRadius : 35,
        minOpacity : .005,
        maxOpacity : .3,
        minSpeed : .10,
        maxSpeed : .5,
        fps : 60,
        numParticles : 75,
        width : window.innerWidth,
        height : window.innerHeight
    };
    /*
      Binding functions
    */
    this.init          = this.init.bind(this);
    this.random        = this.random.bind(this);
    this.handleResize  = this.handleResize.bind(this);
    this.draw          = this.draw.bind(this);
    this.animate       = this.animate.bind(this);
    this.clearCanvas   = this.clearCanvas.bind(this);
    this.resetParticle = this.resetParticle.bind(this);


    window.addEventListener("resize", this.handleResize);
  }
  
  handleResize(){
      this.setState({
         width: window.innerWidth,
         height: window.innerHeight,
      })
  }

  random(min, max){ return Math.random() * (max-min) + min;}
  
  init(){
    const particle = [];
    for(let i=0;i<this.state.numParticles;i++){
      const color = this.state.colors[~~this.random(0, this.state.colors.length)];
      particle[i] = {
        radius    : this.random(this.state.minRadius, this.state.maxRadius),
        xPos      : this.random(0, this.state.width),
        yPos      : this.random(0, this.state.height),
        xVelocity : this.random(this.state.minSpeed, this.state.maxSpeed),
        yVelocity : this.random(this.state.minSpeed, this.state.maxSpeed),
        color     : 'rgba(' + color + "," + this.random(this.state.minOpacity, this.state.maxOpacity) + ")"
      }
      this.draw(particle, i);
    }
    this.animate(particle);
  }
  
  draw(particle, i){
    const canvas  = this.canvasRef.current;
    const ctx     = canvas.getContext('2d');

    ctx.fillStyle = particle[i].color;
    ctx.beginPath();
    ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  animate(particle){
    setInterval(() => {
      this.clearCanvas();
      for(let i=0; i<this.state.numParticles; i++){
        particle[i].xPos += particle[i].xVelocity;
        particle[i].yPos -= particle[i].yVelocity;
        if(particle[i].xPos > this.state.width + particle[i].radius || particle[i].yPos > this.state.height + particle[i].radius) {
          this.resetParticle(particle, i);
        }else {
          this.draw(particle, i);
        }
      }
    },1000/this.state.fps);
  }
  
  resetParticle(particle, i){

    const random = this.random(0, 100);
    if(random > 50){
      particle[i].xPos = particle[i].radius;
      particle[i].yPos = this.random(0, this.state.height);
    }else{
      particle[i].xPos = this.random(0, this.state.width);
      particle[i].yPos = this.state.height + particle[i].radius;
    }
    this.draw(particle, i);
  }

  clearCanvas(){
    const canvas = this.canvasRef.current;
    const ctx    = canvas.getContext('2d');
    ctx.clearRect(0, 0, this.state.width, this.state.height);
  }
  
  componentDidMount() {
    this.init();
  } 

  render() {
    return(
      <div id="canvas-container">
        <canvas id="canvas" width={this.state.width} height={this.state.height} ref={this.canvasRef} />
      </div>
    )
  }
}
  


export default AnimateCanvas;