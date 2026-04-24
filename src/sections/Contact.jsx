import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    let err = {}
    if (!form.name) err.name = 'Required'
    if (!form.email.includes('@')) err.email = 'Invalid email'
    if (!form.message) err.message = 'Required'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validation = validate()
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
    } else {
      alert('Message Sent!')
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <section id="contact" className="page">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="form">

        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <span>{errors.name}</span>

        <input
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <span>{errors.email}</span>

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
        />
        <span>{errors.message}</span>

        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}