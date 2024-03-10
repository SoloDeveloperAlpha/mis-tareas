import React,{useState, useEffect} from "react";
import '../estilos/nueva-tarea.css';
import { v4 as uuidv4} from 'uuid';

function NuevaTarea(props){

  const [input, setInput] = useState('');

  const manejarCambio = e =>{
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva);/*onSubmit del props*/ 
    
  };
  
    
  return(
    /**onSumbit del propio form -DIFERENTE AL ANTERIOR*/ 
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input 
      className="tarea-input"
      type="text"
      placeholder="Nueva Tarea"
      name="texto"
      onChange={manejarCambio}
      maxLength="20"
      />
      <button className="boton-tarea">
      <i class="fas fa-plus"></i>
      </button>
    </form>

  );
};

export default NuevaTarea;