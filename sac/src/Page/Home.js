import Header from '../components/Header/Header';
import LeftNavi from '../components/Navi/LeftNavi/LeftNavi';
import RightNavi from '../components/Navi/RightNavi/RightNavi';
import PostDetail from '../components/Post/PostDetail';
import Post from '../components/Post/Post';
import PostButton from '../components/Post/PostButton';
import '../styles/Home.css';

function App() {
    return (
        <div className="App">
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <LeftNavi className="navi"/>
                <div className="main">
                    <Post />
                </div>
                <RightNavi className="navi"/>
            </div>
        </div>
        
    );
}

export default App;
