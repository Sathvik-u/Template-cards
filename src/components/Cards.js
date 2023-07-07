import { useEffect, useState } from "react";
import '../components/Cards.css';
import FullDetails from "./FullDetails";

function Cards(){
   let [card,getcard]=useState({});
   
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res=>res.json())
        .then(data=>getcard(data.users))
        .catch(err=>console.log('error is ',err));
    },[])
    let [moreDet,setMore]=useState(card[0]);
    {console.log(card[1])}
    {console.log(moreDet)}
    return (<div className="container-fluid bg-info row row-cols-auto gap-2 justify-content-center p-5 m-0">{Object.entries(card).map(([val,obj])=><div className="card col" key={val} id={val}
    >
            <div className="card-header">
                <img src={obj.image} width="200px"/>
            </div>
            <div className="card-body text">
                <h5 className="text-center">{obj.firstName} {obj.lastName}</h5>
                <h6>Date Of Birth: <span className="fw-bold">{obj.birthDate}</span></h6>
                <h6>Blood Group : <span className="fw-bolder">{obj.bloodGroup}</span></h6>
                <h6>Height: <span className="fw-bold">{obj.height}</span></h6>
            </div>
            <div className="card-footer text-end" id={val}>
                <button  className="btn btn-warning" onClick={()=>setMore(obj)}>More Details</button>
            </div>
    </div>
    )}
</div>)
};

export default Cards;