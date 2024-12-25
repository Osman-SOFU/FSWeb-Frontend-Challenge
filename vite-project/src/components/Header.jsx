import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
  return (
    <div>
      <div>
        <p>TÜRKÇE`YE GEÇ</p>
        <button>DARK MODE</button>
      </div>
      <div>
        <p>OSMAN</p>
      </div>
      <div>
        <div>
          <p>I am a Frontend Developer...</p>
          <p>
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div>
            <Link>Github</Link>
            <Link>Linkedin</Link>
          </div>
          <div>
            <img
              src="src/assets/images/headerlogo.svg"
              className="w-2 h-2" // Resim boyutunu belirleyin
            />
          </div>
          <img></img>
        </div>
      </div>
    </div>
  );
}
