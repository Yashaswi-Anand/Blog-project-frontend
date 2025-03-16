import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    return (
        <div style={{ margin: '50px 15%' }}>
            <p><em>Using Editor Mode</em></p>
            <JoditEditor
                ref={editor}
                value={content}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // Updates state when editor loses focus
                onChange={() => { }} // Optional, you can omit or use for real-time update
            />
            
            <h3>Output Content:</h3>
            <div 
                style={{
                    padding: '10px',
                    // border: '1px solid #ccc',
                    marginTop: '20px',
                    minHeight: '100px'
                }}
                dangerouslySetInnerHTML={{ __html: content }} // ✅ Renders HTML content from editor
            />
        </div>
    );
};

export default TextEditor;