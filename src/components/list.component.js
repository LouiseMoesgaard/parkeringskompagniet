import { useEffect, useState } from "react";
import Input from "../components/input.component";
import apiService from "../services/api.service";


function List() {

    const [listData, setListData] = useState(null);
    const [filteredListData, setFilteredListData] = useState(null);

    useEffect(()=>{ //get all data from the api from the service and set it as listData and the filtered listData. 
        apiService.get().then((data)=> {
            setListData(data);
            setFilteredListData(data);
        })
    }, [])

    const doSearch = (e)=>{

        if(e.target.value.length > 2){
            setFilteredListData(listData.filter(coin => coin.name.toLowerCase().includes(e.target.value.toLowerCase())));
        } else{
            setFilteredListData(listData);
        }

    }
    

    return(
     <div className="m-auto mt-16 w-11/12">
         <h1 className="uppercase text-center text-2xl mb-5">Coin search</h1>

         <p className="text-center text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

         <Input onChange={doSearch}></Input>

        {
            filteredListData !== null? 
            <div className="h-96 overflow-y-scroll mt-10">
                {
                    filteredListData.map((elm,i) =>

                        <div className="m-5 cursor-pointer" key={i}>{elm.name}</div>
                    )
                }
            </div>
            :null
        }
     </div>
    )
    
  }
  
  export default List;
  