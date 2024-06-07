import { GlobalStyle } from './GlobalStyle';
import Footer from './components/Footer/Footer';
import MainHeader from './components/MainHeader/MainHeader';
import Artista from './pages/Artista/Artista';

function App() {
  return (
    <div>
      {/* Global State */}
      <GlobalStyle />
      
      {/* Navegation */}

      {/* Content */}
      <MainHeader />

      <Artista />

      <Footer />

    </div>
  );
}

export default App;
