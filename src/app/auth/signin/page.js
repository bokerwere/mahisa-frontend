"use client"

import Image from "next/image";
import {FormInput, LoadingButton} from "@/components";
import Link from "next/link";
import {useRouter} from "next/navigation";

const SignIn = ()=>{
    const router = useRouter()
    function handleSubmit(e){
        e&&e.preventDefault()
        router.push("/admin/analytics")
    }
    return (
        <div className='min-h-[100vh] mx-0 my-auto px-0 py-10  flex flex-col items-center gap-[20px]'>
            <Link href={"/"}>
                <Image
                    src='/logo.png'
                    alt='Songa Logo'
                    width={100}
                    height={80}
                />
            </Link>
            <h1 className='text-xl font-bold'>Mahisaa Sacco</h1>
            <h1 className='text-2xl font-bold pt-10'>Sign In</h1>

            <div className='w-[300px] flex flex-col gap-[20px]'>
                <FormInput type={"email"} name='email' placeholder='johndoe@email.com' />
                <FormInput type={"password"} name='password' placeholder='*******' />
                <Link href='/auth/forgot-password' className='text-[#7d7c7c] text-center'>Forgot your password?</Link>
                <LoadingButton onClick={handleSubmit} >
                    Sign In
                </LoadingButton>
                <p className='text-center'>Don&apos;t have a Member's account?</p>

                <Link href='/auth/signup' className='text-[#7d7c7c] bg-white text-center border-2 p-[14px] rounded-lg border-[#eee]'>Create new account</Link>
            </div>

        </div>
    )
}

export default SignIn