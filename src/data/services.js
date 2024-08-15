import { RiBankCardFill, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { AiFillWallet } from 'react-icons/ai';
export const services = [
    {
        icon: <AiFillWallet className={"w-[25px] h-[25px] text-primary"} />,
        title: 'QC Wallet',
        description: 'Mobile Banking enables our members to borrow loans...',
    },
    {
        icon: <RiBankCardFill className={"w-[25px] h-[25px] text-primary"} />,
        title: 'Bank Statement',
        description: 'Allow members to request printed statements.',
    },
    {
        icon: <RiBankCardFill className={"w-[25px] h-[25px] text-primary"} />,
        title: 'ATM Cards',
        description: 'Allow members to request ATM cards for their accounts.',
    },
    {
        icon: <RiMoneyDollarCircleFill className={"w-[25px] h-[25px] text-primary"} />,
        title: 'Money Transfer',
        description: 'Facilitate easy money transfers for our members.',
    },
];