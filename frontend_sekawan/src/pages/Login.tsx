import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authLogin } from "../api";

export function loader({ request }: any) {
  return new URL(request.url).searchParams.get("message"); // <-- Cara native javascript
}

function Login() {
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(null);
  const message: any = useLoaderData(); // <-- Cara native javascript
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // useNavigate is a hook for programmatic navigation, often used within functional components,
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(formData);

    try {
      setError(null);
      setStatus(true);
      const data = await authLogin(formData.username, formData.password);
      console.log(data);
      navigate("/host", { replace: true });
    } catch (error: any) {
      setError(error.message);
      console.error("Login failed:", error.message);
    } finally {
      setStatus(false);
    }
  };

  return (
    <div>
      {message && <h3>{message}</h3>}
      {error && <h3>{error}</h3>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={handleChange}
          name="username"
          value={formData.username}
        />

        <input
          type="text"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />

        <button type="submit" disabled={status}>
          {status ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;

// REFERENSI YANG PATUT DI COBA: https://www.react-hook-form.com/
