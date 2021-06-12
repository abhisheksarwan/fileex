import React from 'react';
import './SidebarFolder.css';
import SidebarOption from '../SidebarOption/SidebarOption';

const SidebarFolder = (props) => {
    const sidebarOptions = props.structure.map(option => (
        <SidebarOption icon={option.icon} name={option.folderName} iconType={option.iconType} color={option.iconColor} />
    ));
    return (
     <div className="sidebar_folder">
        <p className="sidebar_folder_header">{props.title}</p>
            {sidebarOptions}
    </div>
    )
}

export default SidebarFolder
