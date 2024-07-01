import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Artista from "../../pages/pagesLayoutSquare/Artista/Artista";
import Eventos from "../../pages/pagesLayoutSquare/Eventos/Eventos";
import MaisAcoes from "../../pages/pagesLayoutSquare/MaisAcoes/MaisAcoes";
import Biografia from "../../pages/pagesLayoutText/Biografia/Biografia";
import ArteNaPraca from "../../pages/pagesLayoutText/ArteNaPraca/ArteNaPraca";
import Galeria from "../../pages/pagesLayoutSquare/Galeria/Galeria";
import Contato from "../../pages/Contato/Contato";
import Escolas from "../../pages/pagesLayoutText/Escolas/Escolas";

function RoutesSquare() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Header routes */}
                <Route exact path="/" element={<Home />} />
                <Route path="/artista" element={<Artista />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/maisacoes" element={<MaisAcoes />} />

                {/* LayoutPagesSquare routes */}
                <Route path="/artenapraca" element={<ArteNaPraca />} />
                <Route path="/biografia" element={<Biografia />} />
                <Route path="/escolas" element={<Escolas />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesSquare;