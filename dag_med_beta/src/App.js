import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Feedback from './page_feedbacks/Feedback';
import PageVaccine, { VaccineShow } from './page_header/Page_vaccine';
import PageHeader from './page_vaccine/Page_header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <PageHeader />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/PageVaccine' element={<PageVaccine />} />
            <Route path='/Feedback' element={<Feedback />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
