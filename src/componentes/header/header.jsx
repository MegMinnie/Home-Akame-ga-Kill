import "./header.css";

function Header({ logo }) {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo" />
      <h2>Akame ga Kill</h2>
      <i className="bi bi-list"></i>

      <div className="modal">
        <i className="bi bi-x-square"></i>
        <ul>
          <li>HOME</li>
          <li>SOBRE</li>
          <li>CONTATO</li>
          <li>QUIZ</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
