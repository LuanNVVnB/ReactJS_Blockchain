import React, { useRef } from 'react'
import JoditEditor from 'jodit-react';

function RichTextEditor({setValue}) {
    const editor = useRef(null);

  return (
<JoditEditor ref={editor} onChange={(content)=> setValue(content)}/>
  )
}

export default RichTextEditor