import { useState } from 'react';
import apiService from "./services/api.service";
import Detail from './components/detail.component';
import List from './components/list.component';

function App() {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [chartData, setChartData] = useState(null)

  const selectCoin = (id) =>{
    apiService.get(id).then((data)=> {
      setSelectedCoin(data) 
    })
    apiService.getChartData(id, 'eur', 14).then((data)=>{
      setChartData({
        labels: data.prices.map((point)=> formatTime(point[0])),
        datasets: [
            {
                label: 'Price over time',
                data: data.prices.map((point)=> point[1]),
                fill: false,
                backgroundColor: 'rgb(108, 163, 154)',
                borderColor: 'rgba(108, 163, 154, 0.2)',
            },
        ],
    });
  });
  const formatTime = (time) => {
    const date = new Date(time);
    return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;

 }

  }
  return(
    <div className="bg-custom-gradient h-screen w-screen flex xs:flex-col-reverse">
      <div className="grid grid-cols-2 xs:w-screen lg:w-11/12 h-5/6 xs:m-0 lg:m-auto rounded-3xl bg-white">
        <div className="xs:col-span-2 lg:col-span-1">
          
          <List selectCoin={selectCoin}></List>

        </div>
        <div className="xs:hidden lg:block lg:col-span-1 shadow-lg rounded-3xl">
          {selectedCoin?
          <Detail selectedCoin={selectedCoin} chartData={chartData}></Detail>
          : <p className="text-center text-base p-60">No coin seleceted</p>
          }
        
        </div>
      </div>
    </div>
  )
}

export default App;
