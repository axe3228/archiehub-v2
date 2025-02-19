import About from "./about";
import Experience from "./experience";
import Footer from "./footer";
import Projects from "./projects";

const ContentWrapper = () => {
  const dummyText = (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex
      repellendus reiciendis iste recusandae inventore in amet dignissimos
      excepturi commodi non, aut nisi tempore, eaque expedita porro adipisci
      earum sequi.
    </p>
  );

  return (
    <main className="pt-24 lg:w-[55%] lg:py-24">
      <div className="space-y-24">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default ContentWrapper;
