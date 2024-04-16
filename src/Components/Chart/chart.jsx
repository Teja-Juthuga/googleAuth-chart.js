import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(  
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)


const data = {
    labels: ["Week 1","Week 2", "Week 3", "Week 4" ],
    datasets: [{
      label: 'Weekly Expenses',
      data: [65, 59, 80, 81],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

const options = {
  plugins : {
    legend : true
  },
  scales : {
    y : {
  
    }
  } 
}
  export const MyChart = () => (
    <div>
      <h2 style={{textAlign:"center",}}>Expenses Chart</h2>
      <Line data={data} options={options}/>
    </div>
  );
  