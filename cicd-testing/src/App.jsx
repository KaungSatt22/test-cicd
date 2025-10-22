import { useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    age: "",
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    try {
      const res = await axios.post(
        "http://localhost:8080/v1/create-user",
        formData
      );
      setResponse(res.data);
      setFormData({ userName: "", email: "", age: "" });
    } catch (err) {
      setError(err.response?.data || "Something went wrong!");
    }
  };

  return (
    <div
      style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
    >
      <h2>Create User</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            value={formData.userName}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>

      {response && (
        <div style={{ marginTop: "20px", color: "green" }}>
          <h4>User Created Successfully!</h4>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div style={{ marginTop: "20px", color: "red" }}>
          <h4>Error:</h4>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
