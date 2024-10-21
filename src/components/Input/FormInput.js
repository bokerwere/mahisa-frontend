"use client"
import {useState} from "react"
// import {Input} from "@radix-ui/themes";

const FormInput = ({ onChange, value, name, type = 'text', placeholder, error }) => {

    const [showPassword, setShowPassword] = useState(false); // State variable to track password visibility

    // Helper function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className=''>
            <input
                type={showPassword ? 'text' : type} // Toggle the input type based on showPassword state
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                name={name}
                className='p-[7px] bg-transparent border-[2px] rounded-lg border-[#bbb] outline-none text-[#bbb] text-sm focus:text-black font-bold w-full'
            />
                {/*{...register(name)}*/}
            {/* Add a checkbox to toggle password visibility */} 
            {type === 'password' && (
                <label className='my-3 space-x-2'>
                    <input
                        type='checkbox'
                        className='my-3 mr-2'
                        checked={showPassword}
                        onChange={togglePasswordVisibility}
                    />
                    Show Password
                </label>
            )}
            {error&&(
                <span className='text-red-500 text-xs pt-1 block'>
                       {error}
                    </span>
            )}

        </div>
    )
}

export default FormInput