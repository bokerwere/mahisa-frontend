"use client"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'
import { faker } from  '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
            // position: 'top' as const,
        },
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const data = {
    labels,
    datasets: [
        {
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            borderColor: '#fff',
            backgroundColor: `#007E7A`//'linear-gradient(#254132, #009245)',
        },
    ],
};

const PledgesChart = ()=>{
    return <Bar options={options} data={data} />;
}

export default PledgesChart