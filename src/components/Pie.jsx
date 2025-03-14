import { Chart as ChartJs,Legend,Tooltip,ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJs.register(Legend,Tooltip,ArcElement)
const pieChartData = {
    labels: ["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"],
    datasets: [
      {
        label: "Time Spent",
        data: [120, 60, 30, 90, 45],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  
export const PieChart=()=>{
    const options={}
    const data=pieChartData
    return(<>
    <Pie options={options} data={data}/>
    </>)
}