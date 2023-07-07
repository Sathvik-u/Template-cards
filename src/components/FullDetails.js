import "../components/FullDetails.css"
function FullDetails(props){
    return (<div className="container-fluid bg-info w-100">
        {console.log(props.data)}
        <div className="text-center">
        <div className="w-75 card">
            <div className="card-header">
                    <img src={props.data.image} width=""/>
                    <h4 className="bG" >Blood Group: {props.data.bloodGroup}</h4>
                    <h4 className="aG">Age: {props.data.age}</h4>
                    <h4 className="endr">Gender: {props.data.gender}</h4>

            </div>
            <div className="card-body text-start">
                <p className="fw-bold">Blood Group: {props.data.bloodGroup}</p>
                <p className="fw-bold">address:{props.data.address.address},{props.data.address.city},{props.data.address.state}</p>
            </div>
            </div></div>
</div>);
}
export default FullDetails;