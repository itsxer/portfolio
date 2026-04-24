export default function Navbar() {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <h2 className="logo">Jessie Torres-Munet</h2>
      <div className="links">
        <button onClick={() => scrollTo('home')}>Home</button>
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('projects')}>Projects</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
      </div>
    </nav>
  )
}