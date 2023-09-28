//import "./index.css"


import Contact from './components/contact/ContactHeader';
import './components/contact/Contact.css'
import Header from './components/header/Header'
import './components/header/Header.css'
import Carrossel from './components/carrossel/Carrossel'

function App() {
  return (
    <div className="App">
      {/* Contact Header */}
      <Contact />

      {/* MAIN */}
      <main>
        {/* SECTIONS */}
        <Header />
        <Carrossel />
      </main>

      {/* FOOTER */}
    </div>
  );
}

export default App;
