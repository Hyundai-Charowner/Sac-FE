import axios from "axios";

const sendOAuthDataToServer = (credential) => {
  axios
    .post(process.env.REACT_APP_HOST_NAME + "/login/google", {
      credential: credential,
    })
    .then((serverResponse) => {
      console.log("Server Response:", serverResponse.data);
    })
    .catch((error) => {
      alert("SAC 로그인에 실패했습니다.");
    });
};

export default sendOAuthDataToServer;