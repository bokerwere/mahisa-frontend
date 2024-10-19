"use client";
import Link from "next/link";
import { FormInput } from "@/components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { mahisaa } from "../../data/strings";
import useHandleFormValidate from "../../hooks/useHandleFormValidate";

const Register = ({ selected, handleClose, getData }) => {
  const router = useRouter();
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
    status: "Active",
    nationalId: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState({});

  const validater = useHandleFormValidate();

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
    e.preventDefault(); // Ensure form submission doesn't refresh the page

    // let { error, valid } = await validater(creds);
    // setError(error);
    // if (!valid) return;
    setIsSubmitting(true);

    try {
      const res = await axios.post(`${mahisaa}/members/create`, creds, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Mahissa")}`,
        },
      });

      if (res.status === 200 || res.status === 201) {
        toastMessage(
          "success",
          `Member ${selected ? "updated" : "added"} successfully.`
        );
        handleClose();
        getData();
        router.push("/admin/members");
      }
    } catch (err) {
      console.error("Error submitting the form:", err);
      toastMessage("error", "An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={"w-full flex items-center justify-center"}>
      <div className="max-w-4xl w-full rounded-lg bg-white p-10 flex flex-col gap-10">
        <h1 className="text-xl font-bold text-slate-100">Personal Details</h1>
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <FormInput
            required
            label="First Name"
            placeholder="First Name"
            name="firstName"
            value={creds.firstName}
            onChange={handleInput}
          />
          <FormInput
            required
            placeholder="Last Name"
            name="lastName"
            value={creds.lastName}
            onChange={handleInput}
          />
          <FormInput
            required
            placeholder="Other Names"
            name="otherNames"
            value={creds.otherNames}
            onChange={handleInput}
          />
          <FormInput
            required
            placeholder="Position"
            name="position"
            value={creds.position}
            onChange={handleInput}
          />
          <FormInput
            required
            type="date"
            placeholder="Date Of Birth"
            name="dateOfBirth"
            value={creds.dateOfBirth}
            onChange={handleInput}
          />
          <FormInput
            required
            placeholder="Gender"
            name="gender"
            value={creds.gender}
            onChange={handleInput}
          />
          <FormInput
            required
            placeholder="Physical Address"
            name="address"
            value={creds.address}
            onChange={handleInput}
          />
          <FormInput
            required
            type="email"
            placeholder="Email"
            name="email"
            value={creds.email}
            onChange={handleInput}
          />
          <FormInput
            required
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={creds.phoneNumber}
            onChange={handleInput}
          />

          <FormInput
            required
            placeholder="National ID"
            name="nationalId"
            value={creds.nationalId}
            onChange={handleInput}
          />

          {/* Action Buttons */}
          <div className="flex gap-4 w-full justify-end col-span-2">
            <Link
              href="/admin/members"
              className="bg-primary Light text-[#eee] py-2 px-4 rounded-lg text-sm font-bold"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-primary text-[#eee] py-2 px-4 rounded-lg text-sm font-bold"
              disabled={isSubmitting} // Disable button while submitting
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
