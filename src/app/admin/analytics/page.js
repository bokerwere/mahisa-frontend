import Image from "next/image";
import {MembersCount, PledgesChart, PledgeTransaction, TransactionsChart} from "@/features/Analytics";

export default function Analytics() {
    return (
        <div className="flex flex-col gap-6 bg-transparent mb-6">
            <div className="flex flex-col ">
                <div className="w-full flex justify-end items-center pb-2 gap-2">
                    <select name="month" className='tex-sm outline-none border-none bg-white font-medium py-2 px-4'>
                        <option>Month</option>
                    </select>
                    <select name="month" className='tex-sm outline-none border-none bg-white font-medium  py-2 px-4'>
                        <option>Year</option>
                    </select>
                </div>
                <div className="flex flex-auto gap-2">
                    <div className="w-full md:w-1/4">
                        <MembersCount title={"Members"} icon={"tdesign:usergroup"} count={400} percentage={"+20"} />
                    </div>
                    <div className="w-full md:w-1/4">
                        <MembersCount title={"Contributions"} icon={"fa-solid:praying-hands"} count={400} percentage={"-30"} />
                    </div>
                    <div className="w-full md:w-1/4">
                        <MembersCount title={"Transactions"} icon={"uil:transaction"} count={1600} percentage={"+75"} />
                    </div>
                    <div className="w-full md:w-1/4">
                        <MembersCount title={"Amount Collected"} icon={"game-icons:cash"} count={"450,000"} percentage={"-2"} />
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden flex flex-col md:flex-row gap-8 items-stretch">
                <div className="bg-white md:w-1/2 w-full p-5 rounded-lg">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-[2px]">
                            <h1 className="text-xl font-semibold">Top 5 Members</h1>
                            {/*<span className='text-[#009245] font-normal text-xl'>Top 5 Riders</span>*/}
                        </div>

                        <table>
                            <thead>
                            <tr className='text-[#B5B7C0] text-base font-medium text-start leading-[64px] '>
                                <th className='text-start font-medium'>#</th>
                                <th className='text-start font-medium'>Member Name</th>
                                <th className='text-start font-medium'>Pledge Date</th>
                                <th className='text-start font-medium'>Pledge Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className='leading-[58px] border-t-2 border-[#EEEEEE]'>
                                <td>1</td>
                                <td>Jane Cooper</td>
                                <td>Tue 0ct 4, 2023</td>
                                <td className='align-middle'>
                                    500,000
                                </td>
                            </tr>
                            <tr className='leading-[58px] border-t-2 border-[#EEEEEE]'>
                                <td>2</td>
                                <td>Jane Cooper</td>
                                <td>Tue 0ct 4, 2023</td>
                                <td className='align-middle'>
                                    400,000
                                </td>
                            </tr>
                            <tr className='leading-[58px] border-t-2 border-[#EEEEEE]'>
                                <td>3</td>
                                <td>Jane Cooper</td>
                                <td>Tue 0ct 4, 2023</td>
                                <td className='align-middle'>
                                    300,000
                                </td>
                            </tr>
                            <tr className='leading-[58px] border-t-2 border-[#EEEEEE]'>
                                <td>4</td>
                                <td>Jane Cooper</td>
                                <td>Tue 0ct 4, 2023</td>
                                <td className='align-middle'>
                                   200,000
                                </td>
                            </tr>
                            <tr className='leading-[58px] border-t-2 border-[#EEEEEE] items-center'>
                                <td>5</td>
                                <td>Jane Cooper</td>
                                <td>Tue 0ct 4, 2023</td>
                                <td className='align-middle'>
                                    100,000
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className=" md:w-1/2 h-full w-full md:self-stretch">
                    <div className="bg-white p-5 rounded-lg flex w-full flex-col gap-5">
                        <h1 className="font-semibold text-xl">Contributions vs Amount Collected</h1>
                        <div className="h-[380px] flex items-center justify-center">
                            <PledgeTransaction />
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-col md:flex-row">

                <div className="w-full bg-white rounded-lg py-9 px-12">
                    <div className="flex w-full justify-between pb-4">
                        <h1 className="font-semibold text-xl">Contributions</h1>
                        <div className="flex gap-2 bg-white border-[1px] rounded-lg px-4 py-2 border-[#292D32]">
                            <Image height={15} width={15} className='object-contain' alt="Month" src="/utils/calendar.png" />
                            <select name="month" className='tex-base outline-none border-none bg-white font-medium'>
                                <option>Year</option>
                            </select>
                        </div>
                    </div>
                    <PledgesChart/>
                </div>
                <div className="w-full bg-white rounded-lg py-9 px-12">
                    <div className="flex w-full justify-between pb-4">
                        <h1 className="font-semibold text-xl">Transactions</h1>
                        <div className="flex gap-2 bg-white border-[1px] rounded-lg px-4 py-2 border-[#292D32]">
                            <Image height={15} width={15} className='object-contain' alt="Month" src="/utils/calendar.png" />
                            <select name="month" className='tex-base outline-none border-none bg-white font-medium'>
                                <option>Year</option>
                            </select>
                        </div>
                    </div>
                    <TransactionsChart />
                </div>
            </div>

        </div>
    )
}