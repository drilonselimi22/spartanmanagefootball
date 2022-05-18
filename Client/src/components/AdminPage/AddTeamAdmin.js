import React, { useState }  from 'react'
import Player from './Player'
import './StyleAddTeamAdmin.css'
export default function AddTeamAdmin() {
    const [stadiumId, SetStadiumId]= useState("")
    const [name, SetName]= useState("")
    const [city, SetCity]= useState("")
    const [player, SetPlayer]= useState("")
    const [playerName, setPlayerName] = useState("")
    const [playerLastName, setPlayerLastName] = useState("")
    const [playerAge, setPlayerAge] = useState("")
    const [playerNumber, setPlayerNumber] = useState("")
    const [playerPosition, setPlayerPosition] = useState("")
    const [listHasplayers, setListHasPlayers] = useState(false)
    const [playersList, setPlayersList] = useState([])

    function handleChangeStadium(e){
        e.preventDefault()
        SetStadiumId(e.target.value)
        console.log(stadiumId)

    }
    function handleChangeName(e){
        e.preventDefault()
        SetName(e.target.value)
        console.log(name)
    }
    function handleChangeCity(e){
        e.preventDefault()
        SetCity(e.target.value)
        console.log(city)
    }

    function handleAddTeam(e){
        e.preventDefault()
        console.log("axios call goes here")
    }
    function addPlayerToList(e){
        e.preventDefault()

        var player={
            addedPlayerEmri: playerName,
            addedPlayerLastname: playerLastName,
            addedPlayerAge: playerAge,
            addedPlayernumber: playerNumber,
            addedPlayerPosition: playerPosition
        }
        setPlayersList(playersList => [...playersList, player])
        setListHasPlayers(true)
        console.log("ListHasPlayers", listHasplayers)
        console.log("PlayerList", playersList)
        console.log("LENGTH ", playersList.length)
    }
  return (
      <div className='bodyAdminAddTead' >
          <div className='bodyAddTeam'>
        <div className='row' >
            <div className='col' >
                <p style={{color :"white", width:"90%", marginLeft:"5%"}}>List of players should be at least 23</p>
                <label style={{color :"white"}}>Add Team</label>
                <br />
                <input onChange={handleChangeStadium} required placeholder='Stadium id'></input>
                <br />
                <input onChange={handleChangeName} required placeholder='Name'></input>
                <br />
                <input onChange={handleChangeCity} required placeholder='City'></input>
                <br />
                <p style={{color:"white"}}>Players added on the team: {playersList.length}</p>
                
                <button onClick={handleAddTeam}>Add Team</button>
            </div>
            <div className='col' >        
                <label style={{color :"white", paddingTop:"20px"}} >Add Player</label>
                <br />
                <input type="text" required placeholder='name' onChange={(e)=>{setPlayerName(e.target.value)}}/>      
                <br />
                <input type="text" required placeholder='last name' onChange={(e)=>{setPlayerLastName(e.target.value)}} />
                <br />
                <input type="text" required placeholder='age'  onChange={(e)=>{setPlayerAge(e.target.value)}} />
                <br />
                <input type="text" required placeholder='number'  onChange={(e)=>{setPlayerNumber(e.target.value)}}/>                    
                <br />
                <input type="text" required placeholder='position'  onChange={(e)=>{setPlayerPosition(e.target.value)}}/>
                <br />
                <button style={{marginBottom:"20px"}} onClick={addPlayerToList}>Add Player</button>
            </div>
        </div>


        {/* PLAYER  */}
        <div className='playerList'>
             {   listHasplayers ?
                    playersList.map((playerOfArray) =>
                    <div>
                        <Player 
                            name={playerOfArray.addedPlayerEmri} 
                            lastName={playerOfArray.addedPlayerLastname}
                            age={playerOfArray.addedPlayerAge} 
                            number={playerOfArray.addedPlayernumber} 
                            position={playerOfArray.addedPlayerPosition} />
                    </div>
                    )
                    :
                    null
                }
        </div>
    </div>
      </div>
    
  )
}
