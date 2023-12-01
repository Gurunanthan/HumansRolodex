import React from 'react'
import { Card } from '../Card/Card'
import "./Styles.css"
export const CardList = (props) => {
    return(

        <div className = 'card-list'>
            {props.monster.map((monster)=>
            {
                return <Card  monster={monster}></Card>
            })}
        </div>
    )
  
}