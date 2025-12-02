import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export function Form() {
  const [formData, setFormData] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    if (name.trim().length === 0 && formData) {
      toast.error("Name is required");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    if (formData) {
      toast.success("Account created successfully");
    } else {
      toast.success("Logged in successfully");
    }
  };

  return (
    <>
      <form className="form-input" onSubmit={handleSubmit}>
        <p className="text-3xl font-bold">{formData ? "Sign up" : "Login"}</p>

        <input
          type="email"
          placeholder="Enter your email"
          onChange = {(event) => setEmail(event.target.value)}
        />

        {formData && (
          <input
            type="text"
            placeholder="Enter your name"
            onChange = {(event) => setName(event.target.value)}
          />
        )}

        <input
          type="password"
          placeholder="Enter your password"
          onChange = {(event) => setPassword(event.target.value)}
        />

        <button type="submit">Submit</button>

        <p>
          {formData ? "Already have an account? " : "Don't have an account? "}
          <span
            className="text-blue-800 cursor-pointer"
            onClick = {() => setFormData(!formData)}
          >
            {formData ? "Login" : "Sign Up"}
          </span>
        </p>

        <Toaster />
      </form>
    </>
  );
}
