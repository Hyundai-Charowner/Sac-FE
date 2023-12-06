import Header from '../components/Header/Header';
import LeftNavi from '../components/Navi/LeftNavi/LeftNavi';
import RightNavi from '../components/Navi/RightNavi/RightNavi';
import './Home.css';

function App() {
    return (
        <div className="App">
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <LeftNavi />
                <RightNavi />
            </div>
        </div>
        
    );
}

export default App;
