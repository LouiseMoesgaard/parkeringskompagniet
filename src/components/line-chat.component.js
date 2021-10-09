 import {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';


function LineChart({data}) {
    const [options, setOptions] = useState(null);
    

    useEffect(()=>{
        console.log(data)
        setOptions(
            {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }
        );

    }, [])

    
    return (
        <Line data={data} options={options} /> 
    )
};

export default LineChart;
