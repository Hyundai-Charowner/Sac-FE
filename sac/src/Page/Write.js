import Header from '../components/Header/Header';

import WriteBody from '../components/Write/WriteBody';
import '../styles/Home.css';

function Write() {

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="body" style={{ justifyContent: 'center' }}>
          <WriteBody />
      </div>
    </div>
  );
}

export default Write;
