import LineChart from "./line-chat.component";

function Detail({selectedCoin, chartData}) {

    return(
        <div className="m-auto mt-16 w-11/12 p-5">
            <h1 className="uppercase text-center text-2xl mb-5">{selectedCoin.name}</h1>

            <h2 className="uppercase text-lg mb-5 pt-4">Description</h2>

                {
                    selectedCoin.description.en ?
                    <p className="text-base">{selectedCoin.description.en}</p>
                    : <p className="text-base">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                        dicta sunt explicabo.
                        Sed ut perspiciatis unde omnis iste natus
                    </p> 


                }
                
            <div className="grid grid-cols-2 mt-5 pt-4">
                <h2 className="uppercase text-lg mb-5 pt-4">Current price</h2>
                <p className="text-center text-base mb-5 pt-4 text-right text-green-blue">{selectedCoin.market_data.current_price.eur} €</p>  
            </div>
             {
                 chartData?
                 <div className="mt-6">
                    <LineChart data={chartData}></LineChart>
                 </div>
                 : null
             }

        </div>
        
    )
}

export default Detail;

  
  