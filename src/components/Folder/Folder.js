import React from 'react';
import icon from '../../mac-os-folder.png';
import './Folder.css';

const Folder = (props) => {
    return (
        <div className="folder">
            <img src={icon} className="folder_icon"/>
            <p>{props.name}</p>
        </div>
    )
}

export default Folder;
