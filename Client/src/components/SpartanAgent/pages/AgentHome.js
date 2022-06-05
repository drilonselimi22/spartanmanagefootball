import React from 'react'
import SidebarAgent from '../SidebarAgent';

function AgentHome() {
    return (
        <div>
            <SidebarAgent />
            <div style={{
                position: "absolute",
                top: '50%',
                left: '50%'
            }}>
                <h1>Agent Home</h1>
            </div>
        </div>
    )
}

export default AgentHome;