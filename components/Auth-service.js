import axios from "axios";

const API_KEY = "AIzaSyAQ_Ttza29eOR3P2ri3EaEly_3yPwMQOck";

createUser  = async (email, password) => {
  await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken,
    }
  );
};
