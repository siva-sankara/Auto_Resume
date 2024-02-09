import { useState, useEffect } from 'react';


import { Button, Popconfirm } from 'antd';
import Chats from './Chats';
import { useNavigate } from 'react-router-dom';
import { LeftSquareOutlined } from "@ant-design/icons";

import './Chatbot.scss'
import PdfHighlighter from './PdfHighlighter';


function Chatbot() {
    const navigate = useNavigate();
    

    const [showAskVal, setShowAskVal] = useState(true);



    const [path, setFilePath] = useState('');

    return (
        <div>
            {/* <div style={{ textAlign: 'end' }}>
                <Button type='primary'
                    style={{ height: 'inherit', padding: 2 }}
                    >
                        <Popconfirm title="Sure to go back?" onConfirm={goBack}>
                        <LeftSquareOutlined /> Go Back</Popconfirm></Button>
            </div> */}
            <div className="chatbot-container">
                <div className={showAskVal ? 'chatbot-chat' : 'chatbot-pdf-ask-val-collapse'}>
                    <Chats showAskVal={showAskVal} setShowAskVal={setShowAskVal} />
                </div>

            
                <PdfHighlighter/>

            </div>
        </div>
    )
}

export default Chatbot