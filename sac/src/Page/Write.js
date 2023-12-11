import Header from '../components/Header/Header';
import LeftNavi from '../components/Navi/LeftNavi/LeftNavi';
import RightNavi from '../components/Navi/RightNavi/RightNavi';
import '../styles/Home.css';

function Write() {

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <div className='navi'>
          <LeftNavi />
        </div>
        <div className="main">
          gdgdgdgd
        </div>
        <div className='navi'>
          <RightNavi />
        </div>
      </div>
    </div>
  );
}

export default Write;
