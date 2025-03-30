import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = ({content_description, setContentDescription}) => {
    const editor = useRef(null);

    return (
        <div>
            <p><b>Content Description</b></p>
            <JoditEditor
                ref={editor}
                value={content_description}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContentDescription(newContent)} // Updates state when editor loses focus
                onChange={() => { }} // Optional, you can omit or use for real-time update
            />
            
            <h3>Preview</h3>
            <div 
                style={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    marginTop: '20px',
                    minHeight: '100px',
                    borderRadius: '5px'
                }}
                dangerouslySetInnerHTML={{ __html: content_description }} // ✅ Renders HTML content from editor
            />
        </div>
    );
};

export default TextEditor;