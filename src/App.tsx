import { Component, ReactNode } from "react";
import QrCode from "./Components/qr-code-components";
import { DesktopContainer,Circle1, Circle2 } from "./Components/qr-code-components"; 
export default class App extends Component {
  render():ReactNode {
    return (
      <div>
        <DesktopContainer>
          <QrCode />
        <Circle1 />
        <Circle2 />
          {/* <Element1 />
          <Element2 /> */}
        </DesktopContainer>
      </div>
    );
  }
}
