import "./App.css";
import Header from "./componentes/header/header";
import Ficha from "./componentes/ficha/ficha";
import Footer from "./componentes/footer/footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "./assets/logo.jpg";
import capa from "./assets/capa.webp";

function App() {
  return (
    <>
      <Header className="header" logo={logo} />
      <main className="principal">
        <img className="capa" src={capa} alt="capa" />
        <h2 className="titulo">Night Raid</h2>
        <p className="texto">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>
        <p className="texto">
          What I find remarkable is that this text has been the industry’s
          standard dummy text ever since some printer in the 1500s took a galley
          of type and scrambled it to make a type specimen book; it has survived
          not only four centuries of letter-by-letter resetting but even the
          leap into electronic typesetting, essentially unchanged except for an
          occasional ‘ing’ or ‘y’ thrown in. It's ironic that when the
          then-understood Latin was scrambled, it became as incomprehensible as
          Greek; the phrase ‘it’s Greek to me’ and ‘greeking’ have common
          semantic roots!” The editors published his letter in a correction
          headlined “Lorem Oopsum.
        </p>

        <p className="texto">
          “Rrow itself, let it be sorrow; let him love it; let him pursue it,
          ishing for its acquisitiendum. Because he will ab hold, uniess but
          through concer, and also of those who resist. Now a pure snore
          disturbeded sum dust. He ejjnoyes, in order that somewon, also with a
          severe one, unless of life. May a cusstums offficer somewon nothing of
          a poison-filled. Until, from a twho, twho chaffinch may also pursue
          it, not even a lump. But as twho, as a tank; a proverb, yeast; or else
          they tinscribe nor. Yet yet dewlap bed. Twho may be, let him love
          fellows of a polecat. Now amour, the, twhose being, drunk, yet twhitch
          and, an enclosed valley’s always a laugh. In acquisitiendum the Furies
          are Earth; in (he takes up) a lump vehicles bien.
        </p>

        <Ficha img="https://via.placeholder.com/150" />
      </main>
      <Footer />
    </>
  );
}

export default App;
