"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Register = () => {
  const [error, setError] = useState(false);
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        }),
      });

      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      setError(true);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-10 items-center justify-center h-screen">
        <h3 className="mb-4 text-2xl">Register here!</h3>

        <input
          type="text"
          placeholder="Username"
          required
          className="p-2 w-96 rounded text-black outline-yellow-500 text-center"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="p-2 w-96 rounded text-black outline-yellow-500 text-center"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-2 w-96 rounded text-black outline-yellow-500 text-center"
        />

        <button>Submit</button>
        {error && "Something went wrong."}

        <Link href="/dashboard/login">Login with an existing account.</Link>
      </form>
  )
}

export default Register