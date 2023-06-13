"use client"

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const session = useSession();
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", { email, password })
  };

  if(session.status === "loading") {
    return <p>Loading...</p>
  }
  if(session.status === "authenticated") {
    router.push('/dashboard')
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 items-center justify-center h-screen">
      <h3 className="mb-4 text-2xl">Login</h3>

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

      <button>Login</button>

      {/* <Link href="/dashboard/login">Login with an existing account.</Link> */}
      {/* <button onClick={() => signIn("google")}>Login with Google</button> */}
    </form>
  )
}

export default Login