import React from "react";
import MediaQuery from "react-responsive";
import NavbarTop from "../components/NavbarTop";
import MediaBox from "../components/Media-box";
import DrawableCanvas from "../components/DrawableCanvas";
import imagesLoaded from "../../util/imagesLoaded";
import { withRouter } from "react-router-dom";
import ColorPicker from "../components/ColorPicker";
import "./index.scss";
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    /** keep track of current location,because {Link} from react-router might make duplicate history entries    **/
    this.state = {
      loading:false,
      location: "/",
        strokeColor:"#000000"
    };

  }
  componentWillMount() {
    if(this.state.loading===false){
      this.setState({
          loading:true
      })
    }
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change");
      console.log(`history length is ${this.props.history.length}`);
      console.table(location);
      console.log(action);
      if (this.state.location !== location.path) {
        /** deal with possible duplicate history entries    **/
        if (this.state.loading === false) {
          this.setState({
            loading: true,
            location: location.path
          });
        } else {
          this.setState({
            location: location.path
          });
        }
      }
    });
  }
  componentWillUnMount() {
    console.log("unlisten");
    this.unlisten();
  }
  componentWillUpdate(nextProps,nextState) {
    //判断是否是因为改变颜色触发update,如果是，则不把loading设置为true;
    console.log("layout will update");
    if (this.state.loading === false && nextState.strokeColor === this.state.strokeColor) {
      this.setState({
        loading: true
      });
    }
  }
  renderCanvas() {
    if (!this.state.loading) {
      return (
        <DrawableCanvas
          width={this.myRef.current.getBoundingClientRect().width}
          height={this.myRef.current.getBoundingClientRect().height}
          strokeColor={this.state.strokeColor}
        />
      );
    } else {
      return null;
    }
  }
  changeStrokeColor = newColor => {
    if(newColor !==this.state.strokeColor){
        this.setState({
            strokeColor:newColor
        })
    }

  };
  handleImageChange = () => { //当所有图片loaded的时候，把loading设置成false
    console.log("One Image Loaded");
    let isLoaded = imagesLoaded(this.myRef.current);
    if (isLoaded && this.state.loading === true) {
      console.log("all imgs is Loaded is true");
      this.setState({
        loading: false
      });
    }
  };

  render() {
    console.log(`layout rendering loading is ${this.state.loading}`);
    return (
      <div ref={this.myRef}>
        <div className="colorPickerContainer">
        <ColorPicker onChange={this.changeStrokeColor}/>
        </div>
        {this.renderCanvas()}
        <MediaQuery query="(min-device-width: 768px)">
          <div className="container-fluid">
            <div className="row no-gutters">
              <div className="col-1">
                {React.cloneElement(this.props.left, {
                  handleImageChange: this.handleImageChange
                })}
              </div>
              <div className="col-10">
                {React.cloneElement(this.props.mid, {
                  handleImageChange: this.handleImageChange
                })}
              </div>
              <div className="col-1">
                {React.cloneElement(this.props.right, {
                  handleImageChange: this.handleImageChange
                })}
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width:767px)">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <NavbarTop />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row no-gutters ">
              <MediaBox />
              <div className="col-12">
                {React.cloneElement(this.props.mid, {
                  handleImageChange: this.handleImageChange
                })}
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}
export default withRouter(Layout);
