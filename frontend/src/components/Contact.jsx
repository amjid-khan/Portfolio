import React, { useState, useEffect, useRef } from 'react'
import { Mail, User, MessageSquare, X, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // HTML5 required handles empty fields
    if (e.target.checkValidity()) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setShowThankYou(true)
        setFormData({ name: '', email: '', message: '' })
      }, 2000)
    }
  }

  return (
    <section
      id='contact'
      ref={sectionRef}
      className='bg-black text-white py-24 px-6 md:px-16 lg:px-20 relative'
    >
      <div className='max-w-4xl mx-auto'>
        {/* Heading */}
        <p
          className={`text-center text-3xl font-semibold mb-4 transform transition-transform duration-1000 ease-out ${
            visible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        >
          <span className='text-sienna font-semibold underline'>C</span>ontact
        </p>

        {/* Paragraph */}
        <p
          className={`text-center pb-8 transform transition-transform duration-1000 ease-out ${
            visible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}
        >
          Let’s build something amazing together! <br />
          Got a project or an idea? I’m just a message away.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Name Input */}
          <div className='relative'>
            <User className='absolute left-4 top-4 text-gray-500' size={20} />
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your Name'
              required
              className='w-full bg-zinc-900 border-2 border-zinc-800 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-opacity-80 transition-all duration-300'
            />
          </div>

          {/* Email Input */}
          <div className='relative'>
            <Mail className='absolute left-4 top-4 text-gray-500' size={20} />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your Email'
              required
              className='w-full bg-zinc-900 border-2 border-zinc-800 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-opacity-80 transition-all duration-300'
            />
          </div>

          {/* Message Input */}
          <div className='relative'>
            <MessageSquare className='absolute left-4 top-4 text-gray-500' size={20} />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Your Message'
              rows='6'
              required
              className='w-full bg-zinc-900 border-2 border-zinc-800 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-opacity-80 transition-all duration-300 resize-none'
            />
          </div>

          {/* Submit Button with attractive loader */}
          <button
            type='submit'
            className='w-full py-4 rounded-lg font-semibold text-white text-lg transition-all duration-300 relative overflow-hidden group bg-sienna flex justify-center items-center gap-2'
          >
            {loading ? (
              <div className='flex items-center gap-2'>
                <span className='loader-dot animate-bounce'></span>
                <span className='loader-dot animate-bounce200'></span>
                <span className='loader-dot animate-bounce400'></span>
                <span>Sending...</span>
              </div>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </form>
      </div>

      {/* Thank You Popup */}
      {showThankYou && (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4'>
          <div
            className='bg-zinc-900 rounded-2xl p-8 md:p-12 max-w-md w-full relative border-2 transform scale-95 opacity-0 animate-fadeIn'
            style={{ borderColor: '#a0522d', animation: 'fadeIn 0.4s forwards' }}
          >
            <button
              onClick={() => setShowThankYou(false)}
              className='absolute top-4 right-4 hover:text-white transition-colors'
              style={{ color: '#a0522d' }}
            >
              <X size={24} />
            </button>

            <div className='text-center'>
              <div className='mb-6 flex justify-center'>
                <div
                  className='rounded-full p-4'
                  style={{ backgroundColor: '#a0522d' }}
                >
                  <CheckCircle size={48} className='text-white' />
                </div>
              </div>

              <h3 className='text-3xl font-bold mb-4' style={{ color: '#a0522d' }}>
                Thank You!
              </h3>

              <p className='text-gray-400 text-lg mb-8'>
                Your message has been sent successfully. I'll get back to you soon!
              </p>

              <button
                onClick={() => setShowThankYou(false)}
                className='px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 relative overflow-hidden group bg-sienna'
              >
                <span
                  className='absolute inset-0 w-0 transition-all duration-300 ease-out group-hover:w-full'
                  style={{ backgroundColor: 'rgba(165, 42, 42, 0.3)' }}
                ></span>
                <span className='relative z-10'>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fade-in animation for popup + loader */}
      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; transform: scale(1); }
        }

        .loader-dot {
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
          display: inline-block;
        }

        .animate-bounce {
          animation: bounce 0.6s infinite alternate;
        }
        .animate-bounce200 {
          animation: bounce 0.6s 0.2s infinite alternate;
        }
        .animate-bounce400 {
          animation: bounce 0.6s 0.4s infinite alternate;
        }

        @keyframes bounce {
          to { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  )
}

export default Contact
