import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from '../components/Header/Header';
import LeftNavi from '../components/Navi/LeftNavi/LeftNavi';
import RightNavi from '../components/Navi/RightNavi/RightNavi';
import Post from '../components/Post/Post';
import PostDetail from '../components/Post/PostDetail'; // PostDetail 컴포넌트 추가
import '../styles/Home.css';

function App() {
    const [isPostDetailOpen, setIsPostDetailOpen] = useState(false);

    const openPostDetailModal = () => {
        setIsPostDetailOpen(true);
    };

    const closePostDetailModal = () => {
        setIsPostDetailOpen(false);
    };

    const customModalStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            width: "100%",
            height: "100vh",
            zIndex: "10",
            position: "fixed",
            top: "0",
            left: "0",
        },
        content: {
            width: "fit-content",
            height: "fit-content",
            padding: "2rem 5rem",
            zIndex: "999",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "16px",
            boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            justifyContent: "center",
            overflow: "auto",
        },
        button: {
            display: "none",
        },

    };
    
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
                    <Post onClick={openPostDetailModal} />
                    <Modal 
                        isOpen={isPostDetailOpen}
                        onRequestClose={closePostDetailModal}
                        style={customModalStyles}
                    >
                        <PostDetail />
                    </Modal>
                </div>
                <div className='navi'>
                    <RightNavi />
                </div>
            </div>
        </div>
    );
}

export default App;
