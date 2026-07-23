import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      
      
const response = await fetch(import.meta.env.VITE_FORMSPREE_ID,  {
        method: 'POST',
        body: JSON.stringify(data),uu
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      alert('❌ Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-purple-700">Elite</span>
            <span className="text-gray-900">Events</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-purple-700 transition text-sm font-medium">Services</a>
            <a href="#work" className="text-gray-600 hover:text-purple-700 transition text-sm font-medium">Work</a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-700 transition text-sm font-medium">Testimonials</a>
            <a href="#contact" className="bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-purple-800 transition shadow-lg shadow-purple-700/25">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur rounded-full text-sm font-medium mb-6">
                ✨ Award-Winning Event Planning
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Creating
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  Unforgettable
                </span>
                Experiences
              </h1>
              <p className="text-white/80 text-lg mt-6 max-w-lg leading-relaxed">
                From intimate gatherings to grand celebrations, we handle every detail so you can enjoy every moment.
              </p>
              <div className="flex gap-10 mt-8">
                <div>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-white/60 text-sm">Events Planned</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.9⭐</div>
                  <div className="text-white/60 text-sm">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">12+</div>
                  <div className="text-white/60 text-sm">Awards Won</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <a href="#contact" className="px-8 py-4 bg-white text-purple-900 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition transform">
                  Start Planning →
                </a>
                <a href="#services" className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-full font-medium border border-white/20 hover:bg-white/20 transition">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-yellow-300 via-pink-400 to-purple-400 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center text-9xl animate-float">🎪</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
              Full-Service Event
              <span className="block text-purple-700">Management</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              We handle every detail so you can focus on celebrating.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🎨', title: 'Creative Design', desc: 'Custom themes and stunning visuals that reflect your unique style.' },
              { icon: '📍', title: 'Venue Selection', desc: 'Curated venues that perfectly match your vision and guest count.' },
              { icon: '🎵', title: 'Entertainment', desc: 'Professional performers, DJs, and musicians to keep guests engaged.' },
              { icon: '🍽️', title: 'Catering', desc: 'Exquisite menus crafted by award-winning chefs for any dietary need.' },
              { icon: '📸', title: 'Photography', desc: 'Professional photography and videography to capture every moment.' },
              { icon: '✨', title: 'Day-of Coordination', desc: 'Flawless execution so you can relax and enjoy your special day.' },
            ].map((s, i) => (
              <div key={i} className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
              Recent
              <span className="block text-purple-700">Events</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Luxury Wedding', type: 'Wedding', emoji: '💍', color: 'from-pink-500 to-rose-500' },
              { title: 'Corporate Gala', type: 'Corporate', emoji: '🏢', color: 'from-blue-500 to-indigo-500' },
              { title: 'Birthday Bash', type: 'Birthday', emoji: '🎂', color: 'from-yellow-500 to-orange-500' },
              { title: 'Anniversary', type: 'Celebration', emoji: '💝', color: 'from-purple-500 to-pink-500' },
              { title: 'Graduation', type: 'Celebration', emoji: '🎓', color: 'from-green-500 to-teal-500' },
            ].map((p, i) => (
              <div key={i} className={`bg-gradient-to-br ${p.color} p-8 rounded-2xl text-white min-h-[200px] flex flex-col justify-end hover:scale-105 transition-transform cursor-pointer shadow-lg`}>
                <div className="text-5xl mb-2">{p.emoji}</div>
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="text-white/80 text-sm">{p.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
              What Our Clients
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Say About Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah & Michael Johnson', role: 'Wedding, 2025', text: 'Absolutely incredible! She turned our vague ideas into a wedding that felt like a dream. Every detail was perfect.', initial: 'S' },
              { name: 'James Davidson', role: 'Corporate Gala, 2025', text: 'Flawless execution from start to finish. Our best event yet! The attention to detail was outstanding.', initial: 'J' },
              { name: 'Anna & Peter Williams', role: 'Anniversary, 2024', text: 'Our 10th anniversary was pure magic. Every detail was perfect and we could truly enjoy the moment.', initial: 'A' },
            ].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition">
                <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-white text-lg leading-relaxed mb-6">"{t.text}"</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-white/60 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-purple-700">Contact</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">Have a question or want to work together? Let's talk.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 sm:p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="text-7xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-600">Message Sent!</h3>
                <p className="text-gray-600 mt-2">Thanks for reaching out! I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="font-medium text-gray-700 text-sm block mb-2">Your Name</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="font-medium text-gray-700 text-sm block mb-2">Your Email</label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="font-medium text-gray-700 text-sm block mb-2">Phone Number</label>
                  <input
                    {...register('phone')}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="font-medium text-gray-700 text-sm block mb-2">Your Message</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows="5"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition resize-none"
                    placeholder="Tell me about your event, project, or idea..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-purple-700 text-white py-4 rounded-xl font-semibold text-lg hover:bg-purple-800 transition shadow-lg shadow-purple-700/25 disabled:opacity-60"
                >
                  {isLoading ? '⏳ Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-purple-400">Elite</span>
                <span>Events</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating unforgettable experiences for life's most important moments.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-purple-400 transition">Services</a></li>
                <li><a href="#work" className="hover:text-purple-400 transition">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-purple-400 transition">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Wedding Planning</li>
                <li>Corporate Events</li>
                <li>Birthday Parties</li>
                <li>Anniversary Events</li>
                <li>Graduation Events</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📧 hello@eliteevents.com</li>
                <li>📱 +251 922395144 </li>
                <li>📍 Available Nationwide</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            © 2026 Elite Events. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;