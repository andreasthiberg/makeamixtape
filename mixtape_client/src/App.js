import './css/main.css';
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="site-title">make a mixtape</div>
      </header>
      <div className ="page-container">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
