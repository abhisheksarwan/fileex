import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import WifiIcon from '@material-ui/icons/Wifi';
import TextRotationNoneIcon from '@material-ui/icons/TextRotationNone';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import HouseIcon from '@material-ui/icons/House';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import TheatersIcon from '@material-ui/icons/Theaters';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <FiberManualRecordIcon style={{color: "#f25b55"}} />
                <FiberManualRecordIcon style={{color: "#fbba33"}} />
                <FiberManualRecordIcon style={{color: "#61c841"}} />
            </div>
            <div className="sidebar_folder">
                <p className="sidebar_folder_header">Favourites</p>

                    <div className="sidebar_folder_option">
                        <WifiIcon style={{color: "#316ba3"}} />
                        <p class="sidebar_folder_option_name">AirDrop</p>
                    </div>

                    <div className="sidebar_folder_option">
                         <QueryBuilderIcon style={{color: "#316ba3"}} />
                         <p class="sidebar_folder_option_name">Recents</p>
                     </div>

                     <div className="sidebar_folder_option">
                         <TextRotationNoneIcon style={{color: "#316ba3"}}/>
                         <p class="sidebar_folder_option_name">Applications</p>
                     </div>

                     <div className="sidebar_folder_option">
                        <PlayForWorkIcon style={{color: "#316ba3"}}/>
                        <p class="sidebar_folder_option_name">Downloads</p>
                     </div>

                     <div className="sidebar_folder_option">
                        <CropOriginalIcon style={{color: "#316ba3"}} />
                        <p class="sidebar_folder_option_name">Pictures</p>
                    </div>

                    <div className="sidebar_folder_option">
                        <HouseIcon style={{color: "#316ba3"}} />
                        <p class="sidebar_folder_option_name">kirananto</p>
                    </div>

                    <div className="sidebar_folder_option">
                         <MusicNoteIcon style={{color: "#316ba3"}} />
                         <p class="sidebar_folder_option_name">Music</p>
                    </div>

                    <div className="sidebar_folder_option">
                         <TheatersIcon style={{color: "#316ba3"}} />
                         <p class="sidebar_folder_option_name">Movies</p>
                    </div>

                    <div className="sidebar_folder_option">
                         <FolderOpenIcon style={{color: "#316ba3"}} />
                         <p class="sidebar_folder_option_name">Creative Cloud Files</p>
                    </div>

            </div>
        </div>
    )
}

export default Sidebar;
