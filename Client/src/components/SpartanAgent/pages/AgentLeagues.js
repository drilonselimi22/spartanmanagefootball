import React from 'react'
import SidebarAgent from '../SidebarAgent'

function AgentLeagues() {
    return (
        <div>
            <SidebarAgent /><div style={{
                position: "absolute",
                top: '50%',
                left: '50%'
            }}>
                <h1>Leagues</h1>
            </div>
        </div>

    )
}

export default AgentLeagues