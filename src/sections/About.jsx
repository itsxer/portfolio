export default function About() {
  return (
    <section id="about" className="page about">
      
      <div className="about-container">

        {/* IMAGE SECTION */}
        <div className="about-image">
          <img src="20240726_200758.jpg" alt="Portrait of Jessie" />
        </div>

        {/* TEXT SECTION */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I have graduated from the University of Central Florida with a degree in Digital Media - Web Design.
            In the workforce, I aspire to apply my creative skills to create clean, modern, and user-friendly websites.
            Throughout my courses in college, I have learned how to use a variety of tools to create responsive and visually appealing web designs. I am passionate about crafting engaging user experiences and am eager to contribute my skills to a dynamic team in the web design industry.
          </p>

          <div className="skills">
            <span>Figma</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>Photoshop</span>
          </div>
        </div>

      </div>
    </section>
  )
}