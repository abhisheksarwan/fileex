import React from 'react';
import icon from '../../mac-os-folder.png';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import './Folder.css';

const Folder = (props) => {

    const deleteItem = (e, data) => {
        var id = data.id
        props.handleClick(id);
}

    return (
        <>

        <ContextMenuTrigger id="contextmenu">
             <div className="folder">
                  <img src={icon} className="folder_icon"/>
                  <p>{props.name}</p>
            </div>
        </ContextMenuTrigger>

        <ContextMenu id="contextmenu">
             <MenuItem>
                <span>Copy</span>
             </MenuItem>
             <MenuItem>
                <span>Move</span>
             </MenuItem>
             <MenuItem data={{id:props.name}} onClick={deleteItem}>
                <span>Delete</span>
             </MenuItem>
        </ContextMenu>

      </>
    )
}

export default Folder;
