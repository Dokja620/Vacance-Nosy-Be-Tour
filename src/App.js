import Navbar from './pages/navbar';
import Footer from './pages/footer';
import Home from './pages/home';
import './assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <section id="no-scroll">
        <main>
          <Home></Home>
        </main>
      <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
