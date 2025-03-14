import { Line } from "react-chartjs-2"
import { Chart as ChartJS,CategoryScale,LinearScale,LineElement,PointElement,Title,Tooltip,Legend, plugins } from "chart.js"

ChartJS.register(CategoryScale,LinearScale,LineElement,PointElement,Title,Tooltip,Legend)
const lineChartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Steps By Karan",
        data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
        borderColor: "rgb(75, 192, 192)",
      },{
        label: "Steps By John",
        data: [5000, 8000, 5500, 1000, 8900, 1900, 10000],
        borderColor: "rgb(75, 192, 192)",
      }
    ],
  };
  
export const LineGraph=()=>{
    const options={
        reponsive:true,
        plugins:{
            legend:{
                position:"bottom"
            }
        }
    }
        
    
    const data=lineChartData
    return(<>
<Line options={options} data={data}/>
    </>)
}