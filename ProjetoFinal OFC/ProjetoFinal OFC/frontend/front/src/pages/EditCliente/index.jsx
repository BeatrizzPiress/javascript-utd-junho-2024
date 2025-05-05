import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editCliente, getCliente } from '../../services/cliente-requests';


function EditCliente(){

    const {id} = useParams();

    const navigate = useNavigate();

    const [cliente,setCliente] = useState({
        id:'',
        nome:'',
        idade:'',
        email:''
    });

    useEffect(()=>{
        buscaCliente(id);
    },[]);

    const buscaCliente = async(id)=>{
        const clienteDados = await (await getCliente(id)).data;
        console.log(clienteDados);

        setCliente(clienteDados);
    }

    const handleChange = (event) =>{
        
        const {name,value} = event.target;

        setCliente((clienteAnterior)=>{
            return {
                ...clienteAnterior,
                [name]:value
            }
        }
        );

    }
    
    const editarCliente = async (event) =>{
        event.preventDefault();
        console.log(cliente);

        await editCliente(cliente);

        navigate('/cliente/view');

    }

    return(
        <>
            <h1 className="T" style={{paddingBottom: "50px", fontSize: "30px", marginBottom: " 70px", padding: "30px"}}><strong>Editar cliente</strong></h1>

            <form onSubmit={editarCliente} className=""style={{display: "flex", flexDirection: "row"}}>
                
                <label style={{marginLeft: "30px", textAlign: "center", }}>ID</label>
                <input style={{display: "flex", alignItems: "center", gap: "10px"}}
                type="text"
                name='id'
                value={cliente.id}
                onChange={handleChange} readOnly/>
                
                <label style={{marginLeft: "30px"}}>Nome</label>
                <input 
                type="text"
                name='nome'
                value={cliente.nome}
                onChange={handleChange} />

                <label>Idade</label>
                    <input style={{marginLeft: "20px"}}
                type="text"
                name='idade'
                value={cliente.idade}
                onChange={handleChange} />

                <label style={{marginLeft: "30px"}}>Email</label>
                <input 
                type="text"
                name='email'
                value={cliente.email}
                onChange={handleChange} />
                <button type='submit' className='btn btn-secondary' style={{marginLeft: "90px"}}>Atualizar cliente</button>
            </form>
        </>
    );
}

export default EditCliente;
