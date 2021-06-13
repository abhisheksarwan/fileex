import React from 'react';
import './NotFound.css';
import FileHeader from '../FileHeader/FileHeader';

function NotFound() {
    return (
        <div className="notfound">
         <FileHeader />
            <div className="notfound_content">
                <h1 class="notfound_text">No items found</h1>
            </div>
        </div>
    )
}

export default NotFound
