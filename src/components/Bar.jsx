import { Bar } from "react-chartjs-2"
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from "chart.js"
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)
const barChartData = {
    labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
    datasets: [
      {
        label: "Expenses",
        data: [1200, 300, 150, 180, 100],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  
export const BarGraph=()=>{
    const options={}
    const data=barChartData
    return(<>
    <Bar options={options} data={data}/></>)
}