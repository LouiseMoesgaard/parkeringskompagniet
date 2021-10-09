import { useEffect, useState } from "react";
import Input from "../components/input.component";
import apiService from "../services/api.service";

import './list.component.css';


function List({selectCoin}) {

    const [listData, setListData] = useState(null);
    const [filteredListData, setFilteredListData] = useState(null);
    const [activeId, setActiveId] = useState(null);

    useEffect(()=>{ //get all data from the api from the service and set it as listData and the filtered listData. 
        apiService.getAll().then((data)=> {
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

    const select = (id) =>{
        selectCoin(id);
        setActiveId(id);
    }

    

    return(
     <div className="m-auto mt-16 w-11/12 p-5">
         <h1 className="uppercase text-center text-2xl mb-5">Coin search</h1>

         <p className="text-center text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

         <Input onChange={doSearch}></Input>

        {
            filteredListData !== null? 
            <div className="h-96 overflow-y-scroll mt-10">
                {
                    filteredListData.map((elm,i) =>

                        <div className={`my-5 cursor-pointer ${activeId === elm.id ? 'active' : ''}`} key={i} onClick={(e)=>select(elm.id)}>{elm.name}</div>
                    )
                }
            </div>
            :null
        }
     </div>
    )
    
  }
  
  export default List;
  