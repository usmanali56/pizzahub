import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Blogs', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Refund Policy', path: '/refund' },
  ]

  const socialLinks = [
    { name: 'Facebook', path: 'https://facebook.com' },
    { name: 'Instagram', path: 'https://instagram.com' },
    { name: 'Twitter', path: 'https://twitter.com' },
    { name: 'LinkedIn', path: 'https://linkedin.com' },
  ]

  return (
    <footer className="bg-[#111111] text-gray-300 pt-16 pb-8 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Newsletter Banner */}
        <div className="bg-[#c83200] rounded-3xl p-8 md:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight">
              Get 20% Off Your First Order!
            </h3>
            <p className="text-orange-100 text-sm mt-1">
              Subscribe to our newsletter and get exclusive pizza deals directly.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-full text-black bg-white focus:outline-none text-sm w-full sm:w-72"
            />
            <button className="bg-black hover:bg-gray-900 text-white font-bold text-xs uppercase px-7 py-3 rounded-full transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-black text-white tracking-wider mb-4 flex items-center gap-2">
              PIZZARO<span className="text-[#c83200]">.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Crafting authentic stone-baked pizzas with daily-milled dough, organic ingredients, and passion in every single slice.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                
                 <a key={idx}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800/80 hover:bg-[#c83200] text-white flex items-center justify-center text-xs font-semibold transition-colors"
                >
                  {social.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="hover:text-[#c83200] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Legal Pages */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-5">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="hover:text-[#c83200] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Opening Hours & Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-5">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Thu:</span>
                <span className="text-white font-medium">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat:</span>
                <span className="text-white font-medium">11:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-[#c83200] font-medium">Closed</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-800 text-xs">
              <p className="text-gray-400">Call for Orders:</p>
              <p className="text-white font-bold text-sm mt-0.5">+1 (234) 567-890</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>&copy; 2026 Pizzaro. All rights reserved.</p>
          <p className="flex gap-4">
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:underline">Terms</Link>
            <span>•</span>
            <Link to="/cookies" className="hover:underline">Cookies</Link>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;