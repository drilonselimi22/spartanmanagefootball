import React from 'react'
import SidebarAgent from '../SidebarAgent';

function AgentMatches() {
    return (
        <div>
            <SidebarAgent />
            <div style={{
                position: "absolute",
                top: '50%',
                left: '50%'
            }}>
                <h1>Agent Matches</h1>
            </div>
        </div>

    )
}

export default AgentMatches;