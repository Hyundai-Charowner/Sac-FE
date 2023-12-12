import axios from "axios";

const sendOAuthDataToServer = (credential) => {
  axios
    .post("/api/login/google", {
      credential: credential,
    })
    .then((serverResponse) => {
      console.log("Server Response:", serverResponse.data);
      if (serverResponse.status === 200) {
        window.location.href = "/";
      } else {
        alert("Google 로그인에 실패했습니다.");
      }
      localStorage.setItem("loginSession", JSON.stringify(serverResponse.data));
    })
    .catch((error) => {
      alert("SAC 로그인에 실패했습니다.");
    });
};

export default sendOAuthDataToServer;
