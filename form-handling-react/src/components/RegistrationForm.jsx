import { useState } from "react";
export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    if (!username.trim() || !email.trim() || !password.trim()) {
      setMessage("All fields are required");
      return;
    }

    setMessage("Registration successful!");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Hind..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Hind@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="passwrod1234"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
        {message && <p>{message}</p>}
      </form>
    </>
  );
}
