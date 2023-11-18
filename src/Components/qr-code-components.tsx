import { Component, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import qrUrl from "../img/qr-code.png";


const CardQR = styled.div`
  border: 1px solid #979797;
  width: 320px;
  height: 497px;
  margin: 0 auto;
  border-radius: 18px;
  background-color:white;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
`;

const QrBox = styled.div`
  width: 288px;
  height: 288px;
  background-color: #2C7DFA;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  margin: 17px;
`;
const ContentBox = styled(QrBox)`
  height: auto;
  background-color: white;
  margin: 0 auto;
  display: grid;
  * {
    margin: 5px;
    text-align: center;
  }
  :nth-child(1) {
    color: #3685ff;
  }

  :nth-child(2) {
    color: #7d889e;
  }
`;

export const DesktopContainer = styled.div`
  background-color: #d5e1ef;
  width: 1400px;
  height: 800px;
  margin: 0 auto;
   position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%); 
 `; 

interface ImgQrProps {
  imgUrl: string;
}

const StyledImgQr = styled.img`
  width: 57%;
  height: 57%;
  border-radius: 18px;
  padding: 30px;
  margin-top: 20px;
`;

const Circle = styled.div`
  width:100px;
  height:100px;
  background-color:#3498db;
  border-radius:50%;
`;

class ImageQR extends Component<ImgQrProps> {
  render(): ReactNode {
    return <StyledImgQr src={this.props.imgUrl} alt="Image address" />;
  }
}

export default class QrCode extends Component {
  render(): ReactNode {
    return (
      <div>
        <CardQR>
          <QrBox>
            <ImageQR imgUrl={qrUrl} />
          </QrBox>
          <ContentBox>
            <h3>Improve your front-end skills by building projects</h3>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </ContentBox>
        </CardQR>
        <Circle />
        <Circle />
      </div>
    );
  }
}
