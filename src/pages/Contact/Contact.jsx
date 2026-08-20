import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='bg-[#fdeedd] py-12 sm:py-16 lg:py-20 px-4 sm:px-8'>
      <div className='max-w-3xl mx-auto'>

        {/* Heading */}
        <div className='text-center mb-10 sm:mb-14'>
          <p className='flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 uppercase tracking-wider mb-3 sm:mb-4'>
            <span className='w-2 h-2 rounded-full border-2 border-gray-800'></span>
            Contact
          </p>
          <h2 className='text-3xl sm:text-4xl md:text-6xl uppercase font-semibold leading-tight'>
            Your Favorite Pizza Is <br /> Just A Message Away
          </h2>
        </div>

        {/* Contact Us + Opening Hours */}
        <div className='grid grid-cols-1 sm:grid-cols-2 rounded-2xl overflow-hidden border border-amber-100 mb-8 sm:mb-10'>
          <div className='p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-amber-100'>
            <h3 className='font-bold text-base sm:text-lg text-black mb-4'>Contact Us</h3>
            <div className='text-sm text-gray-600 space-y-1'>
              <p>77 Qintai Rd, Tianjin, China</p>
              <p>+1234567890</p>
              <p>email@example.com</p>
            </div>
          </div>
          <div className='p-6 sm:p-8'>
            <h3 className='font-bold text-base sm:text-lg text-black mb-4'>Opening Hours</h3>
            <div className='text-sm text-gray-600 space-y-1'>
              <p>Mon: Closed</p>
              <p>Tue to Thu: 11 AM – 10 PM</p>
              <p>Fri: Closed</p>
              <p>Sat to Sun: 12 PM – 7 PM</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 sm:gap-6'>
          <div>
            <label className='block text-sm font-medium text-gray-800 mb-2'>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className='w-full px-5 py-3.5 rounded-full bg-white border border-amber-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#c83200]'
            />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6'>
            <div>
              <label className='block text-sm font-medium text-gray-800 mb-2'>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@framer.com"
                className='w-full px-5 py-3.5 rounded-full bg-white border border-amber-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#c83200]'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-800 mb-2'>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+0123456789"
                className='w-full px-5 py-3.5 rounded-full bg-white border border-amber-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#c83200]'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-800 mb-2'>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message.."
              rows={6}
              className='w-full px-5 py-4 rounded-2xl bg-white border border-amber-100 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#c83200]'
            />
          </div>

          <button
            type="submit"
            className='w-full bg-[#c83200] hover:bg-[#a62900] text-white font-bold text-sm tracking-wider uppercase py-4 rounded-full transition-colors'
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}

export default Contact