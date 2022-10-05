import React from "react";
import { Pokemon } from "../types";

import "./Card.style.css";

export const Card: React.FC<Pokemon> = ({name, hp, mana, skills, description}) => {
    console.log(skills)
    return (
       <div className="pokemon-card">
            <div className="pokemon-main">
                <span className="pokemon-name">{name}</span>
                <span className="pokemon-hp">{hp} HP</span>
                <span className="pokemon-mana"> {mana} MANA</span>
            </div>
            <div className="pokemon-img-con"></div>
            <small className="pokemon-description">
                {description}
            </small>
            <div className="pokemon-skills">
                <h3>Skill</h3>
                <ul>
                    {skills.map(skill=>{
                        return (
                            <li>
                                <strong>{skill.name}</strong> [{skill.damage}]
                            </li>
                        );
                    })}
                </ul>
            </div>
       </div>
    )
}