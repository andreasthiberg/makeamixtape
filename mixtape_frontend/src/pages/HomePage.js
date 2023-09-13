import background from '../img/main-background.jpg'

function HomePage() {
  return (
    <div className="home-page-background" style={{backgroundImage: `url(${background})`}}>
    <div className="home-page">
        <h1 className="page-title">Welcome</h1>
        <p>Inventore ullam eum et eum dicta tenetur deserunt recusandae. Atque dicta harum quis possimus soluta. 
          Officia tempore cupiditate quo natus harum occaecati voluptatibus. Aut perferendis harum at deleniti. 
          Recusandae odit consequatur et. Nisi laborum molestias aut qui necessitatibus voluptatem delectus dolor.

          Sit excepturi quaerat voluptatibus consequatur corporis unde. Qui qui et autem temporibus ut in molestiae et. 
          Praesentium cumque provident praesentium totam voluptatem. Temporibus minima aut ea molestiae quam deleniti quisquam.</p>
        <div>Make your first mixtape!</div>
    </div>
    </div>
  );
}

export default HomePage;
