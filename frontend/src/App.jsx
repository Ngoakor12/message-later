import { useEffect, useState } from "react";
import Navigation from "./features/navigation/Navigation";
import RoutesComponent from "./components/RoutesComponent";
import ScheduleMessageButton from "./components/ScheduleMessageButton";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "./constants";

export async function getMessages() {
  const URL = `${API_BASE_URL}/messages`;
  const response = await fetch(URL);
  const responseData = await response.json();
  return responseData;
}

export async function getMessage(messageId) {
  const URL = `${API_BASE_URL}/messages/${messageId}`;
  const response = await fetch(URL);
  const responseData = await response.json();
  return responseData;
}

export async function deleteMessage(messageId) {
  const URL = `${API_BASE_URL}/messages/${messageId}`;
  const response = await fetch(URL, {
    method: "DELETE",
  });
  const responseData = await response.json();
  return responseData;
}

export async function createMessage(message) {
  const URL = `${API_BASE_URL}/messages`;
  const result = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  const responseData = await result.json();
  return responseData;
}

export async function updateMessage(messageId, message) {
  const URL = `${API_BASE_URL}/messages/${messageId}`;
  const result = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  const responseData = await result.json();
  return responseData;
}

export async function getAuthedUser() {
  const URL = `${API_BASE_URL}/users/auth/user`;
  const response = await fetch(URL, {
    method: "GET",
    credentials: "include",
  });
  const responseData = await response.json();
  return responseData;
}

export async function logout() {
  const URL = `${API_BASE_URL}/users/auth/logout`;
  const result = await fetch(URL, {
    method: "GET",
    credentials: "include",
  });
  const responseData = await result.json();
  return responseData;
}

function App() {
  const [messages, setMessages] = useState([]);
  const [authedUser, setAuthedUser] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user || null;
  });
  const [isUserLoading, setIsUserLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getMessages()
      .then((res) => {
        if (res.success) setMessages(res.responseData.data);
        else setMessages([]);
      })
      .catch((error) => {
        console.log("Something went wrong while fetching messages", error);
        navigate("/login");
      });
  }, []);

  useEffect(() => {
    getAuthedUser()
      .then((res) => {
        if (res.success) setAuthedUser(res.user);
        // else setAuthedUser(null);
      })
      .catch((error) => {
        console.log(
          "Something went wrong while fetching authenticated user",
          error
        );
        navigate("/login");
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(authedUser));
  }, [authedUser]);

  console.log("user", authedUser);

  async function handleClickLogout() {
    console.log("Logging out");

    const result = await logout();
    if (result.success) {
      console.log(result);
      localStorage.setItem("user", null);
      setAuthedUser(null);
      navigate("/login");
    } else {
      console.log(result);
      console.log("Error logging out");
    }
  }

  // async function handleClickLogin() {
  //   const result = await login();
  //   if (result.success) {
  //     console.log("Successfully logged in");
  //     setAuthedUser(result.user);
  //   } else {
  //     console.log("Error logging out");
  //     setAuthedUser(null);
  //   }
  // }

  return (
    <div className="App">
      <Navigation
        setAuthedUser={setAuthedUser}
        handleClickLogout={handleClickLogout}
      />
      <main className="body">
        <RoutesComponent
          messages={messages}
          setMessages={setMessages}
          authedUser={authedUser}
          setAuthedUser={setAuthedUser}
          setIsUserLoading={setIsUserLoading}
          isUserLoading={isUserLoading}
        />
      </main>
      <ScheduleMessageButton />
    </div>
  );
}

export default App;
