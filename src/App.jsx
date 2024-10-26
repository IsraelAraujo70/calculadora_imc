import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form'
import './global.css';

function App() {
    const [comecou, setComecou] = useState(false);

    const iniciarApp = () => {
        setComecou(true); 
    };

    return (
        <>
            {!comecou ? (
                <div className="comecar">
                    <button className="btn" onClick={iniciarApp}>Começar</button>
                </div>
            ) : null}

            <div className={`container ${comecou ? 'fade-in' : ''}`}>
                <Header/>
                <Form/>
            </div>
        </>
    );
}

export default App;
