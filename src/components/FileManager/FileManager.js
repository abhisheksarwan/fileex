import React from 'react';
import './FileManager.css';
import Folder from '../Folder/Folder';
import FileHeader from '../FileHeader/FileHeader';


const FileManager = (props) => {
    const folders = props.folder.subFolder.map(folders => (
        <Folder name={folders.name} />
    ));
    return (
        <div className="fileManager">
            <FileHeader />
                <div className="fileManager_folders">
                    {folders}
                </div>
        </div>
    )
}

export default FileManager;
