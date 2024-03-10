import "./App.css";
import ListaTarea from "./componentes-react/lista-tarea";

function App() {
  return (
    <div className="contenedor-tareas">
      <div className="tit-tareas">
        <h1> 📚 Mis Tareas ✅</h1>
      </div>
      <div className="lista-tareas">
        <ListaTarea />
      </div>
    </div>
  );
}

export default App;
