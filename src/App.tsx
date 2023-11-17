import { Component, ReactNode } from "react";
import QrCode from "./Components/qr-code-components";
export default class App extends Component {
  render():ReactNode {
    return (
      <div>
          <QrCode />
      </div>
    );
  }
}
