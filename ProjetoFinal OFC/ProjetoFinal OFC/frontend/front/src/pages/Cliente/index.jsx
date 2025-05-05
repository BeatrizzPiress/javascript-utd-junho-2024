import { Outlet } from "react-router-dom";

function Cliente(){
 
    return(
        <>
        <div style={{backgroundColor: "#191919", border: "1px solid gray", width: "100%", height: "50px"}}>
            <h1 style={{textAlign: "left", color: "#e9e9e9", paddingRight: "5px", fontSize: "30px", padding: "10px", paddingLeft: "10px"}}>Clientes.com</h1>
            <Outlet />
            
        </div>
        </>
    );
}

export default Cliente;
