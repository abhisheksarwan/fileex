import React from 'react';
import './FileManager.css';
import Folder from '../Folder/Folder';
import FileHeader from '../FileHeader/FileHeader';
import NotFound from '../NotFound/NotFound';



const FileManager = (props) => {

        if(props.folder) {
            const folders = props.folder.subFolder.map(folders => (
                <Folder name={folders.name} />
            ));
            return (
                <div className="fileManager">
                 <FileHeader folderName={props.folder.folderName} />
                    <div className="fileManager_folders">
                        {folders}
                    </div>
                </div>
            )
        } else {
            return (
                <NotFound />
            )
    }

}

export default FileManager;
