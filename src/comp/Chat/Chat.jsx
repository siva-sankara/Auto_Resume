import React, { useEffect, useState } from "react";

import { Button, Checkbox, Form, Input, Flex } from "antd";
import { SendOutlined } from "@ant-design/icons";
import './Chatbot.scss'

const Chat = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setMsg(msg);
  }, [setMsg]);
  const onFinish = (event) => {
    console.log(msg);
    setMsg("");
  };
  const [allchat,setallchat] = useState();

  return (
    <div className="chat-bot-container">
      <div className="chat-field-container">
        <div className="chat-field">
          
        </div> 
        {/* Field and Button */}
        <Form name="basic" onFinish={onFinish}>
          <div className="msg-sent">
            <Flex justify="space-between" gap={20} align="center">
              <Form.Item
                name="send-msg"
                rules={[{ required: false, message: "Chat Here" }]}
                className="input-box"
              >
                <Input value={msg} onChange={(e) => setMsg(e.target.value)} />
              </Form.Item>
              <Button
                type="primary"
                shape="round"
                icon={<SendOutlined />}
                size={"large"}
                htmlType="submit"
              ></Button>
            </Flex>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Chat;
