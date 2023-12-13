import axios from "axios";

const sendOAuthDataToServer = (credential) => {
  axios
    .post(process.env.REACT_APP_HOST_NAME + "/login/google", {
      credential: credential,
    })
    .then((serverResponse) => {
      if (serverResponse.status === 200) {
        window.location.href = "/";
      } else {
        alert("Google 로그인에 실패했습니다.");
      }
      localStorage.setItem("jwtToken", serverResponse.data);
    })
    .catch((error) => {
      alert("SAC 로그인에 실패했습니다.");
    });
};

export default sendOAuthDataToServer;
