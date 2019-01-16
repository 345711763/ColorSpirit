import React from "react";
import "./index.scss";
import {StrokeColor} from "../../Layout";

class DrawableCanvas extends React.Component {
  constructor(props) {
    super(props);
  }
  canvas = undefined;
  ctx = undefined;
  mouseX= undefined;
  mouseY= undefined;
  componentDidMount() {
      this.canvas = this.refs.canvas;
      this.ctx = this.canvas.getContext("2d");
    console.log("Canvas Did mount");
  }
    shouldComponentUpdate(nextProps){
      this.ctx.strokeStyle = nextProps.strokeColor;
      console.log("in shouldComponentUpdate strokeStyle changed to "+this.ctx.strokeStyle);
      return false;
    }
  componentDidUpdate(){
      console.log("Canvas updated strokeStyle is "+this.ctx.strokeStyle);
}
    componentWillUnmount(){
      console.log("Canvas will unmount");
    }
  mouseDownHandler = (e)=> {
    this.mouseX = e.clientX+window.scrollX;
    this.mouseY = e.clientY+window.scrollY;
    this.isDrawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(this.mouseX, this.mouseY);
  };
  mouseMoveHandler=(e)=> {
    if (this.isDrawing) {
      this.ctx.lineTo(e.clientX+window.scrollX, e.clientY+window.scrollY);
      this.ctx.strokeStyle = this.context;
      this.ctx.stroke();
    }
  };
  mouseUpHandler=()=>{
    this.isDrawing = false;
  };
  render() {
    return (
      <canvas
        id="drawableCanvas"
        ref="canvas"
        width={this.props.width}
        height={this.props.height}
        onMouseDown={(e)=>this.mouseDownHandler(e)}
        onMouseMove={(e)=>this.mouseMoveHandler(e)}
        onMouseUp={(e)=>this.mouseUpHandler(e)}
      />
    );
  }
}
export default DrawableCanvas;
