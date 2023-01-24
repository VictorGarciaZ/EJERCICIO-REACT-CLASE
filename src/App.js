import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
    <Header />
    <Main />
    <Gallery name="QUEEN" img="https://www.diariodealmeria.es/2022/07/14/provincia/Noches-Verano-Queen-Freddie-Mercury_1701740679_162502456_667x375.jpg"/>
    <Gallery name="PINKFLOYD" img="https://as01.epimg.net/epik/imagenes/2021/01/04/portada/1609769959_859161_1609770840_noticia_normal_recorte1.jpg"/>
    <Gallery name="ROLLINGSTONES" img="https://www.todomusica.org/imagenes/680x380/the_rolling_stones.jpg"/>
    <Footer />
    </div>
  )
};

export default App;
