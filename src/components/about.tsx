import Hyperlink from "./hyperlink";

const About = () => {
  const Eorzea = (
    <span className="inline-flex lg:cursor-[url('/images/moogle.png'),_pointer] lg:font-medium lg:text-slate-200">Eorzea</span>
  );

  return (
    <div className="section flex flex-col space-y-5 lg:px-5 text-dark-primary-txt/75" id="about">
      <p>
        Back in 2015, I dove into the world of coding, experimenting with desktop and mobile application development. 
        That curiosity quickly turned into a passion for web development. Fast forward to today, and I've had the 
        privilege of building web applications for an <Hyperlink href={"https://growforwardjp.com/"} 
        name={"IT Services and Consulting"} label={"Growforward JP Inc."}/>, 
        a <Hyperlink href={"https://www.linkedin.com/company/qinta"} name={"Start-up"} label={"Qinta"}/>, 
        and a <Hyperlink href={"https://www.waffletime.com/"} name={"Corporation"} label={"Waffle Time"}/>.
      </p>

      <p>
        My primary role at <Hyperlink href={"https://www.cogitate.io/"} name={"Cogitate"} label={"Cogitate"}/> is 
        creating intuitive and engaging user interfaces for our customers. I thrive at 
        the intersection of design and engineering, creating software that not only looks great but is 
        also well-built under the hood. In my free time, I explore new technologies and work on personal 
        projects to further evolve my web development skills.
      </p>

      <p>
        When I&apos;m away from the computer, you&apos;ll usually find me at the gym pushing for a new PR, 
        getting lost in a good book, spending quality time with my family, or exploring the vast 
        world of {Eorzea} grinding for loot, tackling side quests, and immersing myself in its rich lore.
      </p>
    </div>
  );
};

export default About;
