import React from "react";
import "./index.scss";
import {withRouter} from "history";
class DrawableCanvas extends React.Component {
  constructor(props) {
    super(props);

  }
  canvas = undefined;
  ctx = undefined;
  mouseX= undefined;
  mouseY= undefined;
  componentDidMount() {
    ("Canvas Did mount");
  }
  componentDidUpdate(){
    ("Canvas updated");
      this.canvas = this.refs.canvas;
      this.ctx = this.canvas.getContext("2d");
      ("ctx gained");
}
  mouseDownHandler = (e)=> {
      ("mousedown");
    this.mouseX = e.clientX+window.scrollX;
    this.mouseY = e.clientY+window.scrollY;
    this.isDrawing = true;
    this.ctx.moveTo(this.mouseX, this.mouseY);
  }
  mouseMoveHandler=(e)=> {
      ("mousemove");
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
