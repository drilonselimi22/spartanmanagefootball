import React from 'react'
import SidebarAdmin from '../SidebarAdmin';

function AdminHome() {
    return (
        <div>
            <SidebarAdmin />
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <h3>Admin Home</h3>
            </div>
        </div>
    )
}

export default AdminHome