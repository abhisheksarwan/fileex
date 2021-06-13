import React from 'react';
import icon from '../../mac-os-folder.png';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import './Folder.css';

const Folder = (props) => {

    const copyCoupon = (e, data) => {
        var coupon = data.copy
        navigator.clipboard.writeText(coupon)
        alert(`Coupon code ${coupon} copied to your clipboard`)
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
             <MenuItem data={{copy: 'MI50'}} onClick={copyCoupon}>
                <span>Copy</span>
             </MenuItem>
             <MenuItem>
                <span>Move</span>
             </MenuItem>
             <MenuItem>
                <span>Delete</span>
             </MenuItem>
        </ContextMenu>
        
      </>
    )
}

export default Folder;
