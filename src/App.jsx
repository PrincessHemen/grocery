import './App.css';
import Header from './components/Home/Header';
import Body from './components/Home/Body';
import Footer from './components/Home/Footer';
import veggies from './assets/vegs.jpg';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <div className="fixed inset-0 bg-cover bg-center h-full w-full" style={{ backgroundImage: `url(${veggies})`, filter: 'brightness(0.5)' }} />
      <div className="relative z-10 w-full flex flex-col flex-grow">
        <Header />
        <div className="pt-16 flex-grow">
          <Body />
        </div>
      </div>
      <Footer className="relative z-20" />
    </div>
  );
}

export default App;
