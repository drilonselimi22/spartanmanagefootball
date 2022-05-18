import React from 'react'

export default function Player(props) {
    const {name, lastName, age, number, position} = props;
  return (
    <div style={{display:"flex", 
                 justifyContent:"center", 
                 alignItems:"center",
                 flexDirection:"column",
                 backgroundColor:"rgba(120, 120, 120, 0.6)",
                 border:"2px solid white"}}>
        <h3 style={{color:"white"}}>Player to be added</h3>
        <p style={{color:"white"}}>Name: {name}</p>
        <p style={{color:"white"}}>lastName: {lastName}</p>
        <p style={{color:"white"}}>Age: {age}</p>
        <p style={{color:"white"}}>Number: {number}</p>
        <p style={{color:"white"}}>Position: {position}</p>
    </div>
  )
}
// Player.defaultProps = {
//     name : "",
//     lastName : "",
//     age: 0,
//     position: ""
// }