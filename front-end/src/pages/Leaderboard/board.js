import React from "react";
import Navbar from "../../Components/Navbar";


import axios from 'axios';


export default class Board extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            profiles:[],
            sortBy:''
        };
      }

    componentDidMount() {
        return axios({
            method: "get",
            url: "http://localhost:5000/getAllInfo"
          }).then((res) => {
            console.log(res.data)
            console.log(res.data.sort((a,b)=> (a.wpm >b.wpm ) ? -1 :1))
            res.data =res.data.sort((a,b)=> (a.wpm >b.wpm ) ? -1 :1)
            this.setState({ profiles: res.data});
            
          });
      
       
      }
    render() { return (
      
      <div  className="container-lg  " >
        <div className=" mx-auto w-100 h-100 d-flex flex-column mx-auto justify-content-end ">
        <div className=" fs-3 text p-2 d-flex flex-row  justify-content-between flex-wrap w-100 h-100 "> 
              <div className="  justify-content-end w-25">
                Email
              </div>
              <div className=" text-center justify-content-end w-25">
               Wpm
              </div>
              <div className=" text-center justify-content-end w-25">
                Accuracy
              </div>
              <div className=" text-center justify-content-end w-25">
                position
              </div>
        </div>
        {this.state.profiles.map((a,index) => ( 

              <div className=" fs-3 text p-2 d-flex flex-row justify-content-between  flex-wrap w-100 h-100 "> 
              <div className=" justify-content-end w-25 overflow-hidden">
                <div>
                {a.email}
                {/* {console.log(a)} */}
                </div>
              
              </div >
              <div className=" text-center flex justify-content-end w-25">
                <div>
                {Math.trunc(a.wpm)}
                </div>
               
              </div>
              <div className=" text-center flex justify-content-end w-25">
                <div>
                {Math.trunc(a.acc) +"%"}
                </div>
               
              </div>
              <div className=" text-center flex justify-content-end w-25">
                <div>
                {index +1} 
                </div>
              </div>
              </div>
          ))}
        </div>
      
      </div>
    )
    }
}






// export default function Leaderboard () {
//     getTime();
//     return (
//         <div className="Leaderboard">
//             <Navbar active="leaderboard"/>
//         </div>
//     )
// }