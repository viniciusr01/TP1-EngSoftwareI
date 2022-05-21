import React from "react";
import "./style.css"

export default function Navitem (props) {



    return (
        <li className="Navitem">
            <a className={props.active} href={`/${props.href}`}>
                {props.name}
            </a>
        </li>
    )
}