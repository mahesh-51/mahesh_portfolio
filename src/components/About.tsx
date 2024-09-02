import SocialLinks from "@/components/SocialLinks";
import Image from 'next/image'
import star from "@/assets/icons/star.svg";

/**
 * The About component renders a section with information about the user,
 * including a list of skills displayed in a scrolling wrapper.
 *
 * @returns {JSX.Element} Rendered about section component.
 */
function About(): JSX.Element {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "React Native",
    "Node.js",
    "Express",
  ];

  // ? Create a repeated skills array for the scrolling effect
  const repeatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section className="about px-12" aria-labelledby="about">
      <div className="Container">
        <p className="aboutme">About Me</p>
        <h2 id="about">I’m Mahesh Joshi, a Full-Stack developer</h2>
        <p className="aboutme">
          with a passion for building <br /> personalized websites
          that help you stand out. Let’s work together to bring your
          ideas to life."
        </p>
        <SocialLinks />
      </div>
      <div className="scroll-wrapper">
        <ul>
          {repeatedSkills.map((skill, index) => (
            <li
              key={index}
              aria-hidden={
                index >= skills.length ? "true" : undefined
              }
              className="p"
            >
              <img src={star} alt="" role="presentation" />
              <Image
                alt="NextUI hero Image"
                src={star}
              />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;