import React from "react";
import axios from "axios";

import { BsArrowReturnLeft } from "react-icons/bs";

import { BsArrowReturnRight } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";

class Letter extends React.Component {
  constructor(props) {
    super(props);
  }
  getStyle = () => {
    if (this.props.letter == " ") {
      return { width: "1%" };
    
    } else if (this.props.letter == "\n") {
      return { width: "100%" ,heigth:"0px",margin:"0px" };
    }
  };


  render() {
    // console.log(this.props)
    return (
      <div
        className="fs-6 "
        style={Object.assign({}, this.getStyle(), this.props.sty)}
      >
        {this.props.letter}
      </div>
    );
  }
}
class TypeBoard extends React.Component {
  constructor(props) {
    super(props);
    this.pressHandler = this.pressHandler.bind(this);
    this.state = {
      sampleString:"",
      typedString: "",
      wpm: "",
      acc: "",
      dailyGoal: "",
      n_chars: 0,
      n_chars_c: 0,
      index: 0,
      previous_id:"",
      lang:"",
    };
  }
  componentDidMount() {
    window.addEventListener("keypress", this.pressHandler);
    window.addEventListener("keydown", this.backSpaceHandler);
    console.log(Math.random()%3)
    this.getSample(Math.ceil(Math.random()*3))
  }

  getSample = (id) => {
    return axios({method:"get",
                  url:"http://localhost:5000/randomSample",
                  headers:{"id":id}
    }).then((res)=>{
     
      this.setState({sampleString:res.data})
    })
  }
  getStyle = (index) => {
    if (
      this.state.sampleString.charAt(index) ==
      this.state.typedString.charAt(index)
    ) {
      return {
        color: "green",
        background:"rgba(0, 255, 0, 0.19)"
      };
    }
    if (index >= this.state.index) {
      return {};
    }
    return {
      color: "red",
      background:"rgba(255, 0, 0, 0.19)"
    };
  };
  backSpaceHandler = (e) => {
    if (e.key == "Backspace" && this.state.typedString.length > 0) {
      this.setState({
        typedString: this.state.typedString.slice(
          0,
          this.state.typedString.length - 1
        ),
        index: this.state.index - 1,
      });
      console.log(this.state.index, this.state.typedString);
    }
  };
  pressHandler = (e) => {
    console.log(this.state.index, this.state.typedString);

    if (e.key != "Backspace") {
      this.setState({ index: this.state.index + 1 });
      this.setState({ n_chars: this.state.n_chars + 1 });
      if (e.key == "Enter") {
        this.setState({ typedString: this.state.typedString + "\n" });
      } else {
        this.setState({ typedString: this.state.typedString + e.key });
      }
    }
    if (
      this.state.sampleString.charAt(this.state.index) == e.key
      //  ||
      // (this.state.sampleString.charAt(this.state.index) == "\n" &&
      //   e.key == "Enter")
    ) {
      this.setState({ n_chars_c: this.state.n_chars_c + 1 });
    }
    this.setState({ acc: (this.state.n_chars_c / this.state.n_chars) * 100 });
  };
  render() {
    return (
      <div className="container-lg  ">
        <div className=" mx-auto w-50 h-100 d-flex flex-column mx-auto justify-content-end ">
          <div
            className=" rounded-start rounded-top w-100 d-flex flex-column mx-auto border border-dark"
            style={{ background: "#dedede" }}
          >
            <div
              className="  d-flex flex-row bd-highlight  w-100 "
              style={{ background: "black" }}
            >
              <div className="p-2 bd-highlight text-white">wpm: </div>
              <div className="p-2 bd-highlight text-white">
                accuracy: {this.state.acc}
              </div>
              {/* <div className="p-2 bd-highlight text-white">daily goal: xx</div> */}
            </div>
            <div
              className=" p-2 d-flex flex-row   flex-wrap w-100 h-100 "
              style={{ minHeight: "15em" }}
            >
              {this.state.sampleString.split("").map((letter, index) => (
                <Letter letter={letter} sty={this.getStyle(index)}></Letter>
              ))}
            </div>
          </div>

          <div
            className=" rounded-bottom w-33 ms-auto p-1  d-flex justify-content-end flex-row bd-highlight "
            style={{ background: "black" }}
          >
            <div className="d-flex m-1 flex-rowp-2 bd-highlight text-white">
              <div className="me-1">
                <BsArrowReturnLeft
                  style={{ color: "white" }}
                ></BsArrowReturnLeft>
              </div>
              <div>previous</div>
            </div>
            <div className="d-flex m-1 flex-rowp-2 bd-highlight text-white">
              <div className="me-1">
                <BsArrowCounterclockwise
                  style={{ color: "white" }}
                ></BsArrowCounterclockwise>
              </div>
              <div>reset</div>
            </div>

            <div className="d-flex m-1 flex-rowp-2 bd-highlight text-white">
              <div className="me-2">next</div>
              <div>
                <BsArrowReturnRight
                  style={{ color: "white" }}
                ></BsArrowReturnRight>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TypeBoard;
