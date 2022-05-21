import React from "react";
import axios from "axios";

import { BsArrowReturnLeft } from "react-icons/bs";

import { BsArrowReturnRight } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";
import {NavDropdown ,DropdownButton,Dropdown} from   'react-bootstrap'
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
      wpm: 0,
      acc: 100,
      dailyGoal: "",
      n_chars: 0,
      n_chars_c: 0,
      index: 0,
      previous_id:[],
      id:"",
      lang:"Javascript",
      firstPress:"",
    };
  }
  componentDidMount() {
    window.addEventListener("keypress", this.pressHandler);
    window.addEventListener("keydown", this.backSpaceHandler);
    // console.log(Math.random()%3)
    this.getSample(Math.ceil(Math.random()*3),this.state.lang)
  }

  getSample = (id,lang) => {
    return axios({method:"get",
                  url:"http://localhost:5000/randomSample",
                  headers:{"id":id,"lang":lang},
    }).then((res)=>{
     
      this.setState({sampleString:res.data})
      // console.log(res.data)
      this.setState({id:id})
      // this.setState({previous_id:[...this.state.previous_id,id]})
    })
    
  }
  next =()=>{
    
    let n =Math.ceil(Math.random()*3)
    if(n== this.state.id){
      n=n+1
    }
    this.getSample(n,this.state.lang) 
  
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
      // console.log(this.state.index, this.state.typedString);
    }
  };
  reset =()=>{
    this.setState({ typedString: "",wpm: 0,
    acc: 100, n_chars: 0,
    n_chars_c: 0,
    index: 0,firstPress:""})

  }
  handleSelect =(e) =>{
    console.log( e)
    if (e!=this.state.lang){
   
    this.reset()
    let i =Math.ceil(Math.random()*3)
    return axios({method:"get",
    url:"http://localhost:5000/randomSample",
    headers:{"id":i,"lang":e },
      }).then((res)=>{
      this.setState({sampleString:res.data})
      this.setState({id:i})
      this.setState({lang:e})
      })
   
    }
    // console.log(this.state.lang)
  }
  pressHandler = (e) => {
    if (this.state.firstPress==0){
      this.setState({firstPress :(new Date()).getTime()})
      // this.state.firstPress=(new Date()).getTime()
    }
    // console.log(this.state.index, this.state.typedString);

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
    this.setState({ acc: ((this.state.n_chars_c / this.state.n_chars) * 100) });
    let date= new Date()
    console.log((date.getTime()-this.state.firstPress)/(1000),this.state.n_chars, this.state.n_chars-this.state.n_chars_c)
    let wrong_chars =(this.state.n_chars-this.state.n_chars_c)
    this.setState({wpm:((((this.state.n_chars/5)- wrong_chars )/(-(this.state.firstPress - date.getTime())/(1000*60))))})
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
              <div className="p-2 bd-highlight text-white">wpm:{Math.trunc(this.state.wpm)} </div>
              <div className="p-2 bd-highlight text-white">
                accuracy: {Math.trunc(this.state.acc)}
              </div>
              <div className="p-2 bd-highlight text-white">
                {this.state.lang}
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

            <div>
            <Dropdown  onSelect={(e)=> this.handleSelect(e)}>
          <Dropdown.Toggle  style={{ background: "black",border:"black" }}  menuVariant="dark" variant="dark" id="dropdown-basic">
          Language
          </Dropdown.Toggle>

          <Dropdown.Menu defaultValue="Select fruit"  >
            <Dropdown.Item   eventKey="c">C</Dropdown.Item>
            <Dropdown.Item   eventKey="Javascript">Javascript</Dropdown.Item>
            <Dropdown.Item   eventKey="Python">Python</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
            </div>
            <div className="d-flex m-1 flex-rowp-2 bd-highlight text-white" style={{cursor:"pointer"}} onClick={this.reset}>
              <div className="me-1" >
              
                <BsArrowCounterclockwise
                  style={{ color: "white" }}
                ></BsArrowCounterclockwise>
              </div>
              <div>reset</div>
            </div>

            <div className="d-flex m-1 flex-rowp-2 bd-highlight text-white" style={{cursor:"pointer"}} onClick={this.next}>
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
