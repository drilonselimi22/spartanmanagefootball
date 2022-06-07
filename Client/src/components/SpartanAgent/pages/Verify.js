import React from 'react'
import SidebarAgent from '../SidebarAgent'

function Verify() {
    return (
        <div>
            <SidebarAgent />
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '25%',
                width: '1000px',
                backgroundColor: 'red',
                border: '1px solid black'
            }}>
                <h1>Verify</h1>
            </div>
        </div>
    )
}

export default Verify