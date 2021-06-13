import React from 'react';
import './FileHeader.css';



const FileHeader = () => {
    return (
        <div className="fileHeader">
            <div className="fileHeader_left">
                <i class="material-icons">chevron_left</i>
                <i class="material-icons" style={{color:"gray"}}>chevron_right</i>
                <p>Music</p>
            </div>

            <div className="fileHeader_right">
                <div className="fileHeader_right_left">
                    <i class="material-icons">grid_view</i>
                    <i class="material-icons">unfold_more</i>
                </div>

                <div className="fileHeader_right_middle">
                    <div>
                        <i class="material-icons">calendar_view_month</i>
                        <i class="material-icons">expand_more</i>
                    </div>

                    <i class="material-icons" style={{color:"#393742"}}>ios_share</i>
                    <i class="material-icons-outlined flip" style={{color:"#393742"}}>local_offer</i>

                    <div>
                        <i class="material-icons-outlined">pending</i>
                        <i class="material-icons">expand_more</i>
                    </div>


                </div>

                <div className="fileHeader_right_right">
                <i class="material-icons">search</i>
                </div>
            </div>
        </div>
    )
}

export default FileHeader;
