
export default function ContactUsForm(){
    return(
        <form className="max-w-[800px] mx-auto flex flex-col space-y-4">
            <div className="flex flex-col gap-1">
                <label htmlFor="">Full Name</label>
                <input className={"w-full p-2 border-[1px] border-primary rounded-lg focus:outline-secondary focus:outline-[1px]"} />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="">Email</label>
                <input type={"email"} className={"w-full p-2 border-[1px] border-primary rounded-lg focus:outline-secondary focus:outline-[1px]"} />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="phone">Phone Number</label>
                <input id={"phone"} className={"w-full p-2 border-[1px] border-primary rounded-lg focus:outline-secondary focus:outline-[1px]"} />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="">Message</label>
                <textarea className={"w-full min-h-[200px] p-2 border-[1px] border-primary rounded-lg focus:outline-secondary focus:outline-[1px]"} />
            </div>

            <button className="py-2 px-6 w-fit text-white rounded-lg bg-primary border-none outline-none self-end">Submit</button>
        </form>
    )
}