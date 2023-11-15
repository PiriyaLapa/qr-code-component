import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class RootComponent extends React.Component<{},{}>{
  root: ReactDOM.Root;

  constructor(props:{}){
    super(props);
    this.root=ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    )
  }
  
  componentDidMount(): void {
    this.root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }

  render():null{
    return null;
  }
}

reportWebVitals();

ReactDOM.createRoot(document.getElementById('root')?? document.body).render(
  <RootComponent />
)