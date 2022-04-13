import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import Navbar from './components/Navbar/Navbar';

ReactDOM.render(
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>,
    document.getElementById('root')
);