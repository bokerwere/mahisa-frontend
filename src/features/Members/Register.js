"use client"
import Link from "next/link";
import {FormInput} from "@/components";
import { useNavigate } from "react-router-dom"
import useHandleFormValidate from "../../hooks/useHandleFormValidate"
import useAxios from "../../hooks/useAxios"
import {mahisaa} from "../../data/strings"
import { useEffect, useState } from "react";
import { Button, LinkButton } from "../../components2/Button"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Register=({ selected, handleClose, getData })=>{
    const router = useRouter();
    // const navigate = useNavigate()
    const [creds, setCreds] = useState({
        firstName: "",
        lastName: "",
        otherNames: "",
        position: "",
        dateOfBirth: "",
        gender: "",
        address: "",
        email: "",
        phoneNumber: "",
        status: "",
        nationalId: "",
            })
    const [isSubmitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState({})

	const validater = useHandleFormValidate()
	const axios = useAxios()

    // useEffect(() => {
    //     setCreds();
    //   }, []);


    const handleInput = (e) => {
        const { name, value } = e.target;
        if (error[name]) {
          delete error[name];
        }
        setCreds((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

	const onSubmit = async (e) => {
		e && e.preventDefault();
        console.log("Submit button clicked!");

		let { error, valid } = await validater(creds)
		setError(error)
		if (!valid) return
		setIsSubmitting(true)
		
        const { res } = await axios({
			method: "POST",
            headers: null,
            url: `${mahisaa}/api/v1/create-members`,
			data: {
                firstName: creds.firstName,
                lastName: creds.lastName,
                otherNames: creds.otherNames,
                position: creds.position,
                dateOfBirth : creds.dateOfBirth,
                gender: creds.gender,
                address : creds.address,
                email: creds.email,
                phoneNumber: creds.phoneNumber,
                status: creds.status,
                nationalId: creds.nationalId,
              },
            });
            if (res || res.status === 200 || res.status === 201) {
                toastMessage('success', `Member ${selected ? 'updated' : 'added'} successfully.`);
                handleClose();
                getData();
                router.push('/admin/members');
              }
              setIsSubmitting(false);
            };


    return(
        <div className={"w-full flex items-center justify-center"}>
            <div className="max-w-4xl w-full rounded-lg bg-white p-10 flex flex-col gap-10">
                {/*Personal Details*/}
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl font-bold text-slate-100">Personal Details</h1>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <FormInput
                            required
                            label="Email Address:"
                            placeholder="First Name"
                            name="FirstName"
                            value={creds.firstName}
                            onChange={handleInput}
                        />
                        <FormInput
                            required
                            placeholder="Last Name"
                            name="LastName"
                            value={creds.lastName}
                            onChange={handleInput}
                        />
                        <FormInput
                            required
                            placeholder="Other Names"
                            name="OtherNames"
                            value={creds.otherNames}
                            onChange={handleInput}
                        />
                        <FormInput
                            required
                            placeholder="Position"
                            name="Position"
                            value={creds.position}
                            onChange={handleInput}
                        />
                        <FormInput
                            required
                            placeholder="Date Of Birth"
                            name="DateOfBirth"
                            value={creds.dateOfBirth}
                            onChange={handleInput}
                        />
                            <FormInput
                                required
                                placeholder="Gender"
                                name="Gender"
                                value={creds.gender}
                                onChange={handleInput}
                            />
                    </form>

                </div>
                {/*Address Details*/}
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl font-bold text-slate-100">Address Details</h1>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <FormInput
                            required
                            placeholder="Physical Address"
                            name="PhysicalAddress"
                            value={creds.address}
                            onChange={handleInput}
                        />
                        <FormInput
                            required
                            placeholder="Email"
                            name="Email"
                            value={creds.email}
                            onChange={handleInput}
                        />
                        <FormInput
                            required
                            placeholder="Phone Number"
                            name="PhoneNumber"
                            value={creds.phoneNumber}
                            onChange={handleInput}
                        />
                        <FormInput
                            required
                            placeholder="Status"
                            name="Status"
                            value={creds.status}
                            onChange={handleInput}
                        />
                        <FormInput
                            required
                            placeholder="National ID"
                            name="NationalID"
                            value={creds.nationalId}
                            onChange={handleInput}
                        />
                    </form>
                </div>

                 {/*Action Buttons*/}
                 <div className="flex gap-4 w-full justify-end">
                <Link href={"/admin/members"} className="bg-primary Light text-[#eee] py-2 px-4 rounded-lg text-sm font-bold">Cancel</Link>
                {/* <Link href={"/admin/members"} isSubmitting={isSubmitting}	onPress={onSubmit} className="bg-primary text-[#eee] py-2 px-4 rounded-lg text-sm font-bold">Submit</Link> */}
                <button onClick={onSubmit} className="bg-primary text-[#eee] py-2 px-4 rounded-lg text-sm font-bold" isSubmitting={isSubmitting}	onPress={onSubmit}> Submit  </button>
                </div>


                </div>
                </div>
      
    )
}

export default Register