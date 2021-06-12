import React from 'react';
import './FileManager.css';
import Folder from '../../components/Folder/Folder';


const FileManager = (props) => {
    const folders = props.subFolder.map(folder => (
        <Folder name={folder.name} />
    ));
    return (
        <div className="fileManager">
            <h1>Header</h1>
                <div className="fileManager_folders">
                    {folders}
                </div>
        </div>
    )
}

export default FileManager;
