import React from "react";
import "./index.scss";
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
  componentDidUpdate(){
      console.log("Canvas updated");
      this.canvas = this.refs.canvas;
      this.ctx = this.canvas.getContext("2d");
      console.log("ctx gained");
}
  mouseDownHandler = (e)=> {
      console.log("mousedown");
    this.mouseX = e.clientX+window.scrollX;
    this.mouseY = e.clientY+window.scrollY;
    this.isDrawing = true;
    this.ctx.moveTo(this.mouseX, this.mouseY);
  }
  mouseMoveHandler=(e)=> {
      console.log("mousemove");
    if (this.isDrawing) {
      this.ctx.lineTo(e.clientX+window.scrollX, e.clientY+window.scrollY);
      this.ctx.stroke();
    }
  }
  mouseUpHandler=()=>{
      ("mouseup");
    this.isDrawing = false;
  }
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
