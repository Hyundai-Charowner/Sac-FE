import Header from '../commons/Header';
import LeftNavi from './LeftNavi';
import './Home.css';

function App() {
    return (
        <div className="App">
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <LeftNavi />
            </div>
        </div>
        
    );
}

export default App;
