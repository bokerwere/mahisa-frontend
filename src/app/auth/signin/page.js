// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { FormInput, LoadingButton } from "@/components";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import useAxios from "../../../hooks/useAxios"; // Assuming this is where your useAxios hook is located
// import { setStorage } from "../../../utils/storage"; // Assuming the storage utility is located here
// import { mahisaa } from "../../../data/strings";
// import { restoreTextDirection } from "chart.js/helpers";

// const SignIn = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const router = useRouter();
//   const axiosRequest = useAxios();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const formData = new FormData(e.target);
//     const username = formData.get("username");
//     const password = formData.get("password");

//     try {
//       const { res, err, status } = await axiosRequest({
//         method: "POST",
//         url: "https://gregarious-friendship-production.up.railway.app/api/v1/auths/getToken",
//         data: { username, password },
//       });

//       console.log(res);

//       if (status === 200) {
//         await setStorage({ token: res.token }); // Store the token in localStorage
//         router.push("/admin/analytics");
//       } else if (err) {
//         setError(err);
//       }
//     } catch (e) {
//       setError("An unexpected error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-[100vh] mx-0 my-auto px-0 py-10 flex flex-col items-center gap-[20px]">
//       <Link href={"/"}>
//         <Image src="/logo.png" alt="Songa Logo" width={100} height={80} />
//       </Link>
//       <h1 className="text-xl font-bold">Mahisaa Sacco</h1>
//       <h1 className="text-2xl font-bold pt-10">Sign In</h1>

//       <div className="w-[300px] flex flex-col gap-[20px]">
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <FormInput
//             type="text"
//             name="username"
//             placeholder="johndoe@username.com"
//             required
//           />
//           <FormInput
//             type="password"
//             name="password"
//             placeholder="*******"
//             required
//           />
//           <Link
//             href="/auth/forgot-password"
//             className="text-[#7d7c7c] text-center"
//           >
//             Forgot your password?
//           </Link>
//           <LoadingButton loading={loading} type="submit">
//             Sign In
//           </LoadingButton>
//         </form>
//         <p className="text-center">Don&apos;t have a Member's account?</p>
//         <Link
//           href="/auth/signup"
//           className="text-[#7d7c7c] bg-white text-center border-2 p-[14px] rounded-lg border-[#eee]"
//         >
//           Create new account
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

"use client";

import Image from "next/image";
import { useState } from "react";
import { FormInput, LoadingButton } from "@/components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { mahisaa } from "@/data/strings";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await axios.post(
        `${mahisaa}/auths/getToken`,
        {
          username: username,
          password: password,
        }
      );

      console.log({ response });

      if (response.status === 200) {
        // Handle successful authentication
        localStorage.setItem("Mahissa", response.data.body.token); // Store token if needed
        router.push("/admin/analytics");
      }
    } catch (error) {
      // Handle error
      setError(error.response?.data?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[100vh] mx-0 my-auto px-0 py-10 flex flex-col items-center gap-[20px]">
      <Link href={"/"}>
        <Image src="/logo.png" alt="Songa Logo" width={100} height={80} />
      </Link>
      <h1 className="text-xl font-bold">Mahisaa Sacco</h1>
      <h1 className="text-2xl font-bold pt-10">Sign In</h1>

      <div className="w-[300px] flex flex-col gap-[20px]">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="username"
            placeholder="johndoe@email.com"
            required
          />
          <FormInput
            type="password"
            name="password"
            placeholder="*******"
            required
          />
          <Link
            href="/auth/forgot-password"
            className="text-[#7d7c7c] text-center"
          >
            Forgot your password?
          </Link>
          <LoadingButton loading={loading} type="submit">
            Sign In
          </LoadingButton>
        </form>
        <p className="text-center">Don&apos;t have a Member's account?</p>
        <Link
          href="/auth/signup"
          className="text-[#7d7c7c] bg-white text-center border-2 p-[14px] rounded-lg border-[#eee]"
        >
          Create new account
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
