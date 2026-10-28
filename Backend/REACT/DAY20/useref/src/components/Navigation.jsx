import { useRef } from "react";

const Navigation = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => homeRef.current.scrollIntoView({ behavior: "smooth" })}
      >
        Home
      </button>

      <button
        onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}
      >
        About
      </button>

      <button
        onClick={() =>
          servicesRef.current.scrollIntoView({ behavior: "smooth" })
        }
      >
        Services
      </button>

      <button
        onClick={() =>
          contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
      >
        Contact
      </button>

      <section
        ref={homeRef}
        style={{ height: "100vh", backgroundColor: "lightblue" }}
      >
        <h1>Home</h1>
      </section>

      <section
        ref={aboutRef}
        style={{ height: "100vh", backgroundColor: "lightgreen" }}
      >
        <h1>About</h1>
      </section>

      <section
        ref={servicesRef}
        style={{ height: "100vh", backgroundColor: "lightyellow" }}
      >
        <h1>Services</h1>
      </section>

      <section
        ref={contactRef}
        style={{ height: "100vh", backgroundColor: "lightpink" }}
      >
        <h1>Contact</h1>
      </section>
    </div>
  );
};

export default Navigation;
