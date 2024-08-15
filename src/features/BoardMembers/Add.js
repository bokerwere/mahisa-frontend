import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './style.css';
import {Select} from "@radix-ui/themes";
import {FormInput, FormSelect} from "@/components";

export default function AddStaff({  }) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="bg-primary text-[#eee] py-2 px-4 rounded-lg text-sm font-bold cursor-pointer">Add Staff</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay"/>
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="pb-2 text-lg font-bold">Add Staff</Dialog.Title>
                    <fieldset className="flex flex-col gap-2 py-1">
                        <label className="font-xs opacity-80 " htmlFor="fname">
                            First Name
                        </label>
                        <FormInput name='fname'/>
                    </fieldset>
                    <fieldset className="flex flex-col gap-2 py-1">
                        <label className="font-xs opacity-80 " htmlFor="lname">
                            Last Name
                        </label>
                        <FormInput name='lname'/>
                    </fieldset>

                    <fieldset className="flex flex-col gap-2 py-1">
                        <label className="font-xs opacity-80 " htmlFor="email">
                            Email
                        </label>
                        <FormInput type={"email"} name='email'/>
                    </fieldset>

                    <fieldset className="flex flex-col gap-2 py-1">
                        <label className="font-xs opacity-80 " htmlFor="phone">
                            Phone
                        </label>
                        <FormInput type={"number"} name='phone' placeholder='2547...' />
                    </fieldset>

                    <div style={{display: 'flex', marginTop: 25, justifyContent: 'flex-end'}}>
                        <Dialog.Close asChild>
                            <button  className="bg-primary text-[#eee] py-2 px-4 rounded-lg text-sm font-bold cursor-pointer">Save changes</button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button className="IconButton text-white bg-primary text-xl cursor-pointer" aria-label="Close">
                            <Cross2Icon/>
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}