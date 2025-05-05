import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { getClientes, removeCliente } from "../../services/cliente-requests";
import {FaTrash,FaEdit} from 'react-icons/fa';
function ViewCliente(){
 
    const [clientes,setClientes] = useState([]); 

    useEffect(()=>{
        carregaClientes();
    },[clientes]);

    const carregaClientes = async () =>{
        const clientesResponse = await getClientes();

        setClientes(await clientesResponse.data);

        console.log(clientes);
    }

    const deleteCliente = async (id)=>{
        await removeCliente(id);
    }

    return(
        <>
            <h1 style={{textAlign: "center", paddingBottom:"10px", padding: "20px"}}>Ver clientes</h1>

            <div style={{ width: "400px", display: "flex", textAlign: "center", border: " 3px solid black", position: "absolute", top: "30%", left: "35%", borderRadius: "5px" ,borderCollapse: "collapse", boxShadow: "3px 3px gray", position: "absolute" }}>

            <table style={{ textAlign: "center", alignContent: "center", alignItems: "center"
            }}>
                <thead style={{textAlign: "center"}}>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {clientes.map(cliente=>(
                            <tr key={cliente.id}>
                            <td data-label="Id" >{cliente.id}</td>
                            <td data-label="Nome" >{cliente.nome}</td>
                            <td data-label="Idade" >{cliente.idade}</td>
                            <td data-label="Endereco">{cliente.email}</td>
                            <td>
                                
                                <Link to={`../edit/${encodeURIComponent(cliente.id)}`}><button><FaEdit/></button></Link>
                                <button onClick={()=>deleteCliente(cliente.id)}><FaTrash/></button>
                            </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            </div>
        </>
    );
}

export default ViewCliente;
