import { Component, ReactNode } from "react";
import QrCode from "./Components/qr-code-components";
import { DesktopContainer} from "./Components/qr-code-components"; 
export default class App extends Component {
  render():ReactNode {
    return (
      <div>
        <DesktopContainer>
          <QrCode />
        </DesktopContainer>
      </div>
    );
  }
}
