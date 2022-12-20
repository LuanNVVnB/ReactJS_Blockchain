import React, { useRef } from 'react'
import JoditEditor from 'jodit-react';

function CertificationEditor({setValueCertificates}) {
    const editor = useRef(null);

  return (
<JoditEditor ref={editor} onChange={(content)=> setValueCertificates(content)}/>
  )
}

export default CertificationEditor