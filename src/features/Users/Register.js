"use client";
import Link from "next/link";
import { FormInput, FormSelect } from "@/components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { mahisaa } from "../../data/strings";
import useHandleFormValidate from "../../hooks/useHandleFormValidate";
import toastMessage from "@/utils/toastMessage";
const Register = ({ selected, handleClose, getData }) => {
  const router = useRouter();
  const [creds, setCreds] = useState({
    userName: "",
    password: "",
    email: "",
    phoneNumber: "",
    roles: "",
  });
  const selectOptions = [
    { value: "ADMIN", label: "Admin" },
    { value: "STAFF", label: "Staff" },
    { value: "USER", label: "User" },
  ];
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
  const [_, setSelectedFruit] = useState("");

  const handleDropdownChange = (value) => {
    setSelectedFruit(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const res = await axios.post(`${mahisaa}/auths/create-users`, creds, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Mahissa")}`,
        },
      });

      if (res.status === 200 || res.status === 201) {
        toastMessage(
          "success",
          `User ${selected ? "updated" : "added"} successfully.`
        );
        handleClose();
        getData();
        router.push("/admin/users");
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
            label="User Name"
            placeholder="mahissa"
            name="userName"
            value={creds.userName}
            onChange={handleInput}
          />

          <FormSelect
            required
            placeholder="Role"
            name="roles"
            options={selectOptions}
            onChange={handleDropdownChange}
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
            type="password"
            name="password"
            value={creds.password}
            placeholder="Mahissa@20"
            required
            onChange={handleInput}
          />
          <div className="flex gap-4 w-full justify-end col-span-2">
            <Link
              href="/admin/users"
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
