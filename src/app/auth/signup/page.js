"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { FormInput, LoadingButton } from "@/components";
import Link from "next/link";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auths/create-users`,
        formData
      );
      console.log("User created successfully:", response.data);
      // Handle success, e.g., redirect to login
    } catch (error) {
      console.error("Error creating user:", error);
      setError("Failed to create user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100vh] mx-0 my-auto px-0 py-10 flex flex-col items-center gap-[10px]">
      <Link href={"/"}>
        <Image src="/logo.png" alt="Songa Logo" width={100} height={80} />
      </Link>
      <h1 className="text-xl font-bold">Mahisaa Sacco</h1>
      <h1 className="text-2xl font-bold pt-10">Sign Up</h1>

      <form
        className="w-[300px] flex flex-col gap-[20px]"
        onSubmit={handleSubmit}
      >
        <FormInput
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <FormInput
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          placeholder="johndoe@email.com"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        {error && <p className="text-red-500 text-center">{error}</p>}

        <Link href="/auth/signin" className="text-[#7d7c7c] text-center">
          Already a member? Login
        </Link>

        <LoadingButton type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </LoadingButton>
      </form>
    </div>
  );
};

export default SignUp;
