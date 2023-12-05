import Header from './commons/Header';

function App() {
    return (
        <div className="h-max">
            <Header />
            <p>안녕하세요</p>
            <p className="font-bold">두꺼운 폰트</p>
            <p className="text-lime-900">색깔있는 폰트</p>
            <br/>
            <p className="text-lime-900 text-2xl">크기가 큰 폰트</p>
        </div>
    );
}

export default App;
