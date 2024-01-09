import React, { useState } from 'react';

export const SidePanelPage:React.FC = () => {
    const [title, setTitle] = useState('This is an sidepanel page :)') 
    return (
        <>
            <div>
                <h1>{title}</h1>
            </div>
        </>
    )
}