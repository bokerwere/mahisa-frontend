"use client"
import {useState} from "react"
// import {Input} from "@radix-ui/themes";

const FormInput = ({ name, options=[], placeholder }) => {

    const [showPassword, setShowPassword] = useState(false); // State variable to track password visibility

    // Helper function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className=''>
            <select
                placeholder={placeholder}
                name={name}
                className='p-[7px] bg-transparent border-[2px] rounded-lg border-[#bbb] outline-none text-[#bbb] text-sm focus:text-black font-bold w-full'
            >
                {options.map((item,index)=>(
                    <option key={index} value={item.value}>{item.label}</option>
                ))}
            </select>
            {/*{errors[name] && (*/}
            {/*    <span className='text-red-500 text-xs pt-1 block'>*/}
            {/*        {errors[name]?.message}*/}
            {/*    </span>*/}
            {/*)}*/}
        </div>
    )
}

export default FormInput