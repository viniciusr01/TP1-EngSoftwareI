import React from "react"

export default function profiles() {
    return(
        <div id="profile">
            {Item()}
        </div>
    )
}

function Item(){
    return(
        <div className ="flex">
            <div className="item">

                <div className="info">
                    <h3 className='name text-dark'>DefaultName</h3>
                    
                </div>
            </div>
            <div className="item">
                <span>DefaultScore</span>
            </div>
        </div>
    )
}