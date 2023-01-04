/* function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function MainContent() {
    return (
        <h1>main block</h1>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
) */

/* const h1 = document.createElement("h1")
h1.textContent = "This is a imperative program"
h1.className = "header"
document.getElementById("root").append(h1) */

/*
const navbar = (
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Navbar</span>
    </div>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
*/

// This is component in React
// Functions are declared in Pascal Notation in React
function Header() {
  return (
    <header>
      <nav>
        <img
          src="reactLogo.png"
          alt="image of react logo"
          srset=""
          style={{ width: 32 + "px" }}
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Content</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2023 Schafer Development. All rigths reserved</p>
    </footer>
  );
}

function Body() {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first realeased in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprice apps, including mobile apps</li>
      </ul>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
