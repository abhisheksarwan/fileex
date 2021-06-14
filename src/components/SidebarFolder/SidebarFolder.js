import React from 'react';
import './SidebarFolder.css';
import { NavLink } from 'react-router-dom';
import SidebarOption from '../SidebarOption/SidebarOption';

const SidebarFolder = (props) => {
    const sidebarOptions = props.structure.map(option => (
        <NavLink exact to={`/${props.index}/${option.id}`} activeClassName="active">
             <SidebarOption icon={option.icon} name={option.folderName} iconType={option.iconType} color={option.iconColor} />
        </NavLink>
    ));
    return (
     <div className="sidebar_folder">
        <p className="sidebar_folder_header">{props.title}</p>
            {sidebarOptions}
    </div>
    )
}

export default SidebarFolder
