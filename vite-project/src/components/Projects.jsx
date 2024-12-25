import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        <img
          src="src/assets/images/projectlogoup.svg"
          className="w-2 h-2" // Resim boyutunu belirleyin
        />
        <h3>Workintech</h3>
        <p>
          A simple, customizable, minimal setup cookie plugin that allows your
          users to select which cookies to accept or decline. This was created
          with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
          package and the git repository makes any type of customization to code
          and themes possible.
        </p>
        <div>
          <button>react</button>
          <button>redux</button>
          <button>vercel</button>
        </div>
        <div>
          <Link>View Site</Link>
          <Link>Github</Link>
        </div>
        <div>
          <img
            src="src/assets/images/projectlogodown.svg"
            className="w-2 h-2" // Resim boyutunu belirleyin
          />
          <h3>Journey</h3>
          <p>
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div>
            <button>react</button>
            <button>redux</button>
            <button>vercel</button>
          </div>
          <div>
            <Link>View Site</Link>
            <Link>Github</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
