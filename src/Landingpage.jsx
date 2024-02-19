import { Layout } from "antd";

import React from "react";
import Navbar from "./comp/navbar/Navbar";

import About from "./comp/About/About";
import Fotter from "./comp/Fotter/Fotter";
import Land_3d from "./comp/land_3d/Land_3d";
import Resume_review from "./comp/Resume_review/Resume_review";
import TimeLine from "./comp/Timeline/Timeline";

const { Header, Content, Footer } = Layout;
export default function Landingpage() {
  return (
    <div>
      <Navbar />
      <Land_3d />
      {/* <Resume_review />
      <TimeLine />
      <About />
      <Fotter /> */}
      {/* <Layout>
        <Header style={{
          position:"fixed",
          padding:"10px",
          width :'100%',
          top : 0,

          zIndex : '100'
        }}>      
        </Header>
        <Content>
        </Content>
      </Layout> */}
    </div>
  );
}
