import React from "react";
import '@toast-ui/editor/dist/toastui-editor.css';
import '../../styles/Write.css';

import { Editor } from '@toast-ui/react-editor';

const WriteBody = () => {
    return (
        <div className="markdown-editor">
            <Editor
                initialValue=""
                previewStyle="vertical"
                height="45rem"
                initialEditType="markdown"
                useCommandShortcut={false}
                language="ko-KR"
                hideModeSwitch={true}

            />
        </div>    
    )
}


export default WriteBody;