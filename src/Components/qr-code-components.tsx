import { Component, ReactNode } from "react";
import styled from "styled-components";

const CardQR = styled.div`
  border: 2px solid black;
  width: 320px;
  height: 497px;
  margin: auto 0;
  border-radius: 20px;
`;

const QrBox = styled(CardQR)`
  width: 288px;
  height: 288px;
  background-color: #3685FF;
`;
const ContentBox = styled(QrBox)`
  height: auto;
  background-color: white;
`;

export default class QrCode extends Component {
  render(): ReactNode {
    return (
      <div>
        <h1>qr-code-component</h1>
        <CardQR>
          <QrBox/>
        <ContentBox>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</ContentBox>
        </CardQR>
      </div>
    );
  }
}
