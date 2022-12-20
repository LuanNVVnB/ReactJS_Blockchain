import React, { useRef } from 'react'
import JoditEditor from 'jodit-react';

function RichTextEditor({ setValue,value }) {
    const editor = useRef(null);

    return ( <JoditEditor ref={editor} onChange={(content) => setValue(content)}  value = {value}/>)
}

export default RichTextEditor