import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section id="home" className="hero">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        I Design <span>Websites</span><br />
        & User Experiences
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        UI/UX Designer & Front-End Developer creating clean, user-focused digital products.
      </motion.p>

      <a href="#projects" className="btn">View Projects</a>
    </section>
  )
}
