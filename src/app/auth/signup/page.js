"use client"
import Image from "next/image";
import {FormInput, LoadingButton} from "@/components";
import Link from "next/link";

const SignUp = ()=>{
    return (
        <div className='min-h-[100vh] mx-0 my-auto px-0 py-10  flex flex-col items-center gap-[10px]'>
            <Link href={"/"}>
                <Image
                    src='/logo.png'
                    alt='Songa Logo'
                    width={100}
                    height={80}
                />
            </Link>
            <h1 className='text-xl font-bold'>Mahisaa Sacco</h1>
            <h1 className='text-2xl font-bold pt-10'>Sign Up</h1>

            <form className='w-[300px] flex flex-col gap-[20px]'>
                <FormInput type={"text"} name='' placeholder='First Name' />
                <FormInput type={"text"} name='email' placeholder='Last Name' />
                <FormInput type={"number"} name='phone' placeholder='Phone Number' />
                <FormInput type={"email"} name='email' placeholder='johndoe@email.com' />
                <FormInput type={"password"} name='password' placeholder='Password' />
                <Link href='/auth/signin' className='text-[#7d7c7c] text-center'>Already a member? Login</Link>
                <LoadingButton>
                    Sign Up
                </LoadingButton>
            </form>

        </div>
    )
}

export default SignUp