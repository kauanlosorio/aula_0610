import NoticiaComponente from './components/NoticiaComponentes';
import Img from './Img/Tuba.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">Imagem</h1>
      <NoticiaComponente titulo="Titulo da Noticia" imagem={Img} alt="aaaaaaaaaaaaaa" descricao="Abacaxi deixa a ....."
      categoria="achalababaria" />
    </div>
  );
}

export default App;
