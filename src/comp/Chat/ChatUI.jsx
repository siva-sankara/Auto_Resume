import React from "react";
import { Layout, Menu, theme } from "antd";
import Chat from "./Chat";
import './chat.css'
const { Header, Content, Flex } = Layout;


// Nav Items
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

// Render Comps

const ChatUI = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{width : "100%"}}>
      <Header
        style={{
          //   position: "sticky",
          
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content>
        <div>
          <div className="chat-bot">
            <Chat />
          </div>
          <div></div>
        </div>
      </Content>
    </Layout>
  );
};

export default ChatUI;
