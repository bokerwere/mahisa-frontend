import {ViewTransactions} from "@/features/Transactions";

export default function PledgeTransaction(){
    return <ViewTransactions pledge={{entry: "001003", member: "Jane Doe"}} />
}