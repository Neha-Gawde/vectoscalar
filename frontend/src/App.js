import logo from './logo.svg';
import './App.css';
import AdminRoutes from './routes/AdminRoutes';
import store from './store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //     {/* <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header> */}
    //     <AdminRoutes/>
    // </div>
    <Provider store={store}>
      <BrowserRouter>
        <AdminRoutes/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
