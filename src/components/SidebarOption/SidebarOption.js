import React from 'react';
import './SidebarOption.css';

const  SidebarOption = (props) => {
    return (
            <div className="sidebar_option">
                <i className={`sidebar_option_icon fa fa-${props.icon}`} style={{color: props.color}}></i>
                <p className="sidebar_option_name">{props.name}</p>
            </div>
    )
}

export default SidebarOption;
