import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import sendOAuthDataToServer from "../utils/SendOAuthDataToServer";

function GoogleLogInButton() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <GoogleLogin
        onSuccess={(res) => {
          sendOAuthDataToServer(res.credential);
        }}
        onFailure={(err) => {
          alert("Google 로그인에 실패했습니다.");
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleLogInButton;
