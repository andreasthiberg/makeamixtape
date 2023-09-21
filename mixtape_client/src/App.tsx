import './css/main.css';
import HomePage from './pages/HomePage'
import SingleMixtapePage from './pages/SingleMixtape';

function App() {
  return (
    <div className="app">
        <header className="site-header">
        <div className="site-title">make a mixtape</div>
      </header>
      <div className ="page-container">
        <SingleMixtapePage mixtapeId={"123"} />
        </div>
    </div>
  );
}

export default App;
