import { GlobalStyle } from './GlobalStyle';
import Footer from './components/Footer/Footer';
import MainHeader from './components/MainHeader/MainHeader';
import MaisAcoes from './pagesLayoutSquare/MaisAcoes/MaisAcoes';

function App() {
  return (
    <div>
      {/* Global State */}
      <GlobalStyle />
      
      {/* Navegation */}

      {/* Content */}
      <MainHeader />

      <MaisAcoes />

      <Footer />

    </div>
  );
}

export default App;
