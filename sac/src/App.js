import GoogleLogInButton from "./components/GoogleLogInButton";

function App() {
  return (
    <div className="h-max">
      <GoogleLogInButton />
      <p>안녕하세요</p>
      <p className="font-bold">두꺼운 폰트</p>
      <p className="text-lime-900">색깔있는 폰트</p>
      <br />
      <p className="text-lime-900 text-8xl">크기가 큰 폰트</p>
    </div>
  );
}

export default App;
