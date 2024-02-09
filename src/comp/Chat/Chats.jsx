import React, { useEffect, useRef, useState } from 'react'
import { Input, Button } from "antd";
import {Spinner} from '../../shared/resusables'
import { SendOutlined, ReloadOutlined, RightOutlined, LeftOutlined } from "@ant-design/icons";
import './Chatbot.scss'

const Chats = ({showAskVal, setShowAskVal}) => {
    const [isTyping, setIsTyping] = useState(false);
    const [chats, setChats] = useState([]);
    const [message, setMessage] = useState();
    const chatEl = useRef(null);
   
    useEffect(() => {
        if (chatEl) {
          chatEl?.current.addEventListener('DOMNodeInserted', (event) => {
            const { currentTarget: target } = event;
            target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
          });
        }
      }, [])
      const chatsecure = (e, message) => {
        e.preventDefault()
        if (!message) return;
        setIsTyping(true);
        let msgs = [...chats];
        msgs.push({ role: "user", content: message });
        setChats(msgs);
        if (message) {
          setMessage('');
        //   dispatch(fetchQueryResponse({ query: message, questionId: `q${questionCount}` }))
        }
      }
  return (
    <>
      {showAskVal ?
        <div className='chat-container'>
          <div className='chat-header'>
            <div style={{ fontSize: 'large', color: '#14487F', fontWeight: '600' }}> <RightOutlined onClick={() => setShowAskVal(!showAskVal)} /> ChatBot</div>
            {/* <div className="reset" style={{ textAlign: 'right' }}><Button type='primary' onClick={() => resetChat()}><ReloadOutlined />Reset</Button></div> */}
          </div>
          <hr className='hr-line' />
          <div>
            {/* <div className="reset" style={{ textAlign: 'right' }}><Button type='primary' onClick={() => resetChat()}><ReloadOutlined />Reset</Button></div> */}
            <div><ul className="chat" ref={chatEl}>
              <li className="message left spacing" >

                <span></span>
                <span>Hi! I'm Val. You can interact with me here by asking your questions.<br /></span>
              </li>
              {chats && chats.length ? chats.map((chat, index) => {
                if (chat.role.toUpperCase() === "USER") {
                  return (
                    <li key={index} className="message right spacing" >

                      <span></span>
                      <span>{chat.content} </span>
                    </li>)
                } else if (chat.role.toUpperCase() === "VAL") {
                  return (
                    <li key={index} className="message left spacing">

                      <span></span>
                      {/* <span>{getUserContent(chat)} </span> */}
                    </li>)
                }
              })
                : ""}
            </ul>
            </div>
            {isTyping ? <div style={{ textAlign: "center" }}><Spinner /></div> :
              <div className="chat-box">
                <div style={{ width: '85%', textAlign: "center" }}>
                  <Input
                    style={{ height: 40 }}
                    placeholder="Send a message"
                    onChange={(e) => setMessage(e.target.value)}
                    onPressEnter={(e) => chatsecure(e, message)}
                  />
                </div>
                <div style={{ width: '13%', textAlign: "center" }}>
                  <Button type='primary' className="send-btn" onClick={(e) => chatsecure(e, message)}
                  ><SendOutlined rotate={270} style={{ color: '#ffffff' }} /></Button>
                </div>
              </div>
            }
          </div>
        </div>
        :
        <div className="ask-val-collapse-wrapper">
          <div className='ask-val-collapse-container'>
            <br />
            <div className='icon-style'>
              <LeftOutlined onClick={() => setShowAskVal(!showAskVal)} />
            </div>
            <br />
            <br />
            <div className='text-style'>ChatBot</div>
          </div>
        </div>}
    </>
  )
}

export default Chats