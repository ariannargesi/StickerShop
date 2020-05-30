import React from 'react'
import DropdownColumn from "./DropdownColumn";
export default (props) => {
    return (
        <div className="dropdown">
            <a href={props.href}>{props.title}</a>
            <div className="dropdown-wrapper">
                <div>
                    <DropdownColumn title="Movie and Series" href="#" mode="bold">
                        <a href="#">the walking dead</a>
                        <a href="#">the big bang theory</a>
                        <a href="#">game of thrones</a>
                        <a href="#">breaking bad</a>
                        <a href="#">the vikings</a><a href="#">breaking bad</a>
                        <a href="#">the vikings</a><a href="#">breaking bad</a>
                        <a href="#">the vikings</a>
                        <a href="#">narcos</a>
                    </DropdownColumn>
                    <DropdownColumn title="Movie and Series" href="#">
                        <a href="#">the walking dead</a>
                        <a href="#">the big bang theory</a>
                        <a href="#">game of thrones</a>
                        <a href="#">breaking bad</a>
                        <a href="#">the vikings</a>
                        <a href="#">narcos</a>
                    </DropdownColumn>
                    <DropdownColumn title="Movie and Series" href="#">
                        <a href="#">the walking dead</a>
                        <a href="#">the big bang theory</a>
                        <a href="#">game of thrones</a>
                        <a href="#">breaking bad</a>
                        <a href="#">the vikings</a>
                        <a href="#">narcos</a>
                    </DropdownColumn>
                    <DropdownColumn title="Movie and Series" href="#">
                        <a href="#">the walking dead</a>
                        <a href="#">the big bang theory</a>
                        <a href="#">game of thrones</a>
                        <a href="#">breaking bad</a>
                        <a href="#">the vikings</a>
                        <a href="#">narcos</a>
                    </DropdownColumn>
                </div>
            </div>
        </div>
    )
}
