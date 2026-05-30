import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import PlanetaryVideo from './components/PlanetaryVideo/PlanetaryVideo'
import PlanetaryFacts from './components/PlanetaryFacts/PlanetaryFacts'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length > 100) {
      newErrors.message = 'Message must not exceed 100 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setSubmitted(true)
      console.log('Form submitted:', formData)
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: '',
      })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <h1>Have Questions About Planetary Science?</h1>
        <p className="form-description">
          Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? Reach out and we'll get back to you.
        </p>

        {submitted && <div className="success-message">Thank you! We'll be in touch soon.</div>}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName">
                Full Name<span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? 'error' : ''}
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email<span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="phoneNumber">
                Phone Number<span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Please enter a valid phone number."
                value={formData.phoneNumber}
                onChange={handleChange}
                className={errors.phoneNumber ? 'error' : ''}
              />
              {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message<span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                rows="1"
              />
              <div className="char-count">100 characters</div>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Submit <span className="arrow">›</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <>
      <Navbar />
      <Hero />
      <PlanetaryVideo />
      <PlanetaryFacts />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App