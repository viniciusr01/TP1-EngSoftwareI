import React from 'react'
import Profiles from './profiles';

export default function Board(){

    return(
        <div className="board">
           <h1 classname='leaderboard'>Leaderboard</h1> 
                <h2 classname = 'info'>Scores</h2>

            <Profiles></Profiles>

        </div>
    )
}



