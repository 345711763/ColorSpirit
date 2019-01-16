import React from "react";
import "./index.scss";
class ColorPicker extends React.Component {
    constructor(props){
        super(props);
    }


clickHandler=(e)=>{
    switch(e.target.id){
        case "picker-f44141":
            this.props.onChange("#f44141");
            break;
        case "picker-000000":
            this.props.onChange("#000000");
            break;
        case "picker-ac41f4":
            this.props.onChange("#ac41f4");
            break;
        case "picker-4158f4":
            this.props.onChange("#4158f4");
            break;
        case "picker-41d3f4":
            this.props.onChange("#41d3f4");
            break;
        case "picker-41f491":
            this.props.onChange("#41f491");
            break;
        case "picker-c4f441":
            this.props.onChange("#c4f441");
            break;
        case "picker-f4a041":
            this.props.onChange("#f4a041");
            break;
    }
}
  render() {
    return (
      <div className="colorPicker">
        <div id="picker-f44141" className="picker-f44141" onClick={this.clickHandler}/>
        <div id="picker-000000" className="picker-000000" onClick={this.clickHandler}/>
        <div id="picker-ac41f4" className="picker-ac41f4" onClick={this.clickHandler}/>
        <div id="picker-4158f4" className="picker-4158f4" onClick={this.clickHandler}/>
          <div style={{"width":"100%"}}/>
        <div id="picker-41d3f4" className="picker-41d3f4" onClick={this.clickHandler}/>
        <div id="picker-41f491" className="picker-41f491" onClick={this.clickHandler}/>
        <div id="picker-c4f441" className="picker-c4f441" onClick={this.clickHandler}/>
        <div id="picker-f4a041" className="picker-f4a041" onClick={this.clickHandler}/>
      </div>
    );
  }
}
export default ColorPicker;
