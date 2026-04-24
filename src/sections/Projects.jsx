export default function Projects() {
  return (
    <section id="projects" className="page">
      <h2>Projects</h2>
      <div className="grid">

        <div className="card">
          <img src="createacc.png" alt="Study Buddy project" />
          <h3>Study Buddy</h3>
          <p>
            Designed and developed a website for managing study sessions and collaborative learning.
          </p>
          <a href="https://youtu.be/_EyQGVlfP1g">Video Walkthrough</a>
        </div>

        <div className="card">
          <img src="dc346fe38b3e37219725013dceab0394.png" alt="To-Do List project" />
          <h3>Expo To-Do List</h3>
          <p>
            Created a To-Do list application with a focus on user experience and functionality.
          </p>
          <a href="https://itsxer.github.io/expo-todo-list/">View To-Do List</a>
        </div>

        <div className="card">
          <video
         className="project-video"
          src="demo-1.mp4"
          controls
          muted
          loop
          playsInline
          autoPlay
  />

  <h3>Pixl</h3>
  <p>Created a social media app using Figma with a modern design and intuitive user interface.</p>
</div>

      </div>
    </section>
  )
}
