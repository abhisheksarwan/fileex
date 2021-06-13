import React from 'react';
import './Sidebar.css';
import seedFolders from '../../seedFolders';
import SidebarFolder from '../SidebarFolder/SidebarFolder';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Sidebar() {
    const sidebarFolders = seedFolders.map((folder,index) => (
        <SidebarFolder {...folder} index={index} />
    ))
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <FiberManualRecordIcon style={{color: "#f25b55"}} />
                <FiberManualRecordIcon style={{color: "#fbba33"}} />
                <FiberManualRecordIcon style={{color: "#61c841"}} />
            </div>
            {sidebarFolders}
        </div>
    )
}

export default Sidebar;
