/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Utensils, MapPin, Phone, Clock, Instagram, Facebook, Twitter, ChefHat, Star, ArrowRight, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 luxury-border ${isScrolled ? "bg-black/60 backdrop-blur-md py-6" : "bg-transparent py-8 border-transparent"}`}>
      <div className="container mx-auto px-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 border-2 border-gold-400 flex items-center justify-center rotate-45">
            <span className="-rotate-45 font-serif text-2xl font-bold tracking-tighter text-gold-400">HF</span>
          </div>
          <span className="hidden sm:block text-xl font-serif tracking-[0.2em] uppercase font-light text-luxury-cream">Hasim Farrukh</span>
        </div>
        
        <div className="hidden lg:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-white/70">
          {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold-400 transition-all">
              {item}
            </a>
          ))}
        </div>

        <button className="px-6 py-2 border border-gold-400 text-gold-400 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-gold-400 hover:text-black transition-all transform active:scale-95">
          Book Table
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 atmosphere-top opacity-50"></div>
      <div className="absolute inset-0 z-0 atmosphere-bottom opacity-30"></div>

      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Restaurant" 
          className="w-full h-full object-cover brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-12 relative z-10 grid grid-cols-12 gap-0 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="col-span-12 lg:col-span-8"
        >
          <div className="mb-6 overflow-hidden">
            <span className="block text-gold-400 text-sm uppercase tracking-[0.5em] font-medium mb-3">Established in Dubai</span>
            <div className="h-px w-24 bg-gold-400 opacity-50"></div>
          </div>
          
          <h1 className="text-[60px] md:text-[90px] font-serif leading-[0.95] mb-8 font-light text-luxury-cream">
            Taste the <span className="italic text-gold-400">True Flavor</span> <br /> of Dubai
          </h1>
          
          <p className="text-xl text-white/50 max-w-xl font-light leading-relaxed mb-12">
            Experience authentic BBQ, Karahi, and Arabic specialties in an atmosphere of unparalleled luxury. Open nightly until 2:00 AM.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-gold-400 text-black px-12 py-5 font-bold text-[11px] uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:translate-y-[-2px] transition-all">
              View Menu
            </button>
            <button className="border border-white/20 px-12 py-5 font-medium text-[11px] uppercase tracking-[0.2em] hover:border-white transition-all text-white">
              Discover Our Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-12 text-gold-400/50"
      >
        <div className="w-px h-16 bg-gradient-to-b from-gold-400/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="luxury-border p-4 rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
                alt="Chef Cooking" 
                className="rounded-sm w-full h-[500px] object-cover contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-panel p-8 rounded-sm hidden lg:block">
              <div className="text-gold-400 text-5xl font-serif font-light mb-1">20+</div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">Years of Authentic <br />Flavor Mastery</div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400 font-display text-xs tracking-widest uppercase mb-4 block">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-white">Authentic Taste, <br /><span className="text-gold-400 italic">Premium Dining.</span></h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg font-light">
              Located in the heart of Dubai, Hasim Farrukh Restaurant brings you the finest selection of BBQ, Karahi, and traditional cuisine. We pride ourselves on using century-old recipes blended with modern culinary techniques to create an unforgettable dining experience.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10 text-lg font-light">
              Whether you're craving late-night BBQ or a royal family dinner, we are here to serve you excellence until 2 AM every day.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold-400/20 flex items-center justify-center shrink-0">
                  <Star className="text-gold-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-gold-400 mb-1">Premium Quality</h4>
                  <p className="text-sm text-gray-500 font-light">Only the freshest organic ingredients.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold-400/20 flex items-center justify-center shrink-0">
                  <Clock className="text-gold-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-gold-400 mb-1">Late Night</h4>
                  <p className="text-sm text-gray-500 font-light">Serving flavors until 02:00 AM.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("BBQ");
  
  const categories = ["BBQ", "Karahi", "Fast Food", "Drinks", "Desserts"];
  
  const menuItems = {
    "BBQ": [
      { name: "Seekh Kabab Special", price: "AED 45", desc: "Hand-minced spiced mutton grilled to perfection.", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400" },
      { name: "Malai Boti", price: "AED 55", desc: "Creamy, melt-in-your-mouth chicken breast cubes.", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=400" },
      { name: "Lamb Chops", price: "AED 85", desc: "Marinated overnight in our secret Balochi spice mix.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400" },
    ],
    "Karahi": [
      { name: "Mutton Namak Mandi", price: "AED 120", desc: "Traditional salt-infused mutton karahi with minimum spices.", img: "https://images.unsplash.com/photo-1626777553735-486054817169?auto=format&fit=crop&q=80&w=400" },
      { name: "Chicken Peshawari", price: "AED 95", desc: "Rich tomato base with green chilies and butter.", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=400" },
    ],
    "Desserts": [
       { name: "Royal Kunafa", price: "AED 40", desc: "Warm cheese pastry soaked in sweet syrup.", img: "https://images.unsplash.com/photo-1616611482811-660c1d1a938c?auto=format&fit=crop&q=80&w=400" },
    ]
  };

  const currentItems = menuItems[activeCategory as keyof typeof menuItems] || [];

  return (
    <section id="menu" className="py-24 bg-luxury-gray relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-display text-xs tracking-widest uppercase mb-4 block">Exquisite Selection</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Our Signature Menu</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-10 py-3 font-display text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
                activeCategory === cat 
                  ? "bg-gold-400 text-luxury-black translate-y-[-2px]" 
                  : "border border-white/10 text-white/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel group overflow-hidden rounded-sm"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-serif text-xl group-hover:text-gold-400 transition-colors text-luxury-cream">{item.name}</h3>
                  <div className="h-px flex-1 mx-4 bg-white/10 group-hover:bg-gold-400/30 transition-colors"></div>
                  <span className="font-mono text-sm text-gold-400">{item.price}</span>
                </div>
                <p className="text-gray-500 text-xs italic uppercase tracking-[0.1em]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {currentItems.length === 0 && (
          <div className="text-center text-gray-500 py-20 italic">
            Full menu available in-house. Experience the variety.
          </div>
        )}
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1550966842-2849a22027e4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section id="gallery" className="py-24 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-display text-xs tracking-widest uppercase mb-4 block">Visual Feast</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Atmosphere & Flavor</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98 }}
              className={`relative overflow-hidden group cursor-pointer aspect-square ${i === 0 || i === 4 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <img 
                src={img} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold-400/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section id="booking" className="py-24 bg-luxury-gray">
      <div className="container mx-auto px-12">
        <div className="glass-panel max-w-4xl mx-auto rounded-sm overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-12">
              <span className="text-gold-400 font-display text-xs tracking-widest uppercase mb-4 block">Reservation</span>
              <h2 className="font-serif text-3xl font-bold text-white mb-8">Secure Your Table</h2>
              <form className="space-y-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold-400 outline-none transition-colors text-sm text-white" placeholder="e.g. John Doe" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Phone</label>
                    <input type="tel" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold-400 outline-none transition-colors text-sm text-white" placeholder="+971" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gold-400/70 mb-2">Guests</label>
                    <select className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold-400 outline-none transition-colors text-sm appearance-none text-white">
                      {[1,2,3,4,5,6,7,8,"8+"].map(n => <option key={n} value={n} className="bg-luxury-black">{n} Persons</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Time</label>
                  <input type="time" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold-400 outline-none transition-colors text-sm text-white" />
                </div>
                <button className="w-full bg-gold-400 text-black py-5 font-display font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-gold-500 transition-all mt-8">
                  Confirm Booking
                </button>
              </form>
            </div>
            <div className="relative hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=800" 
                alt="Table Setting" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-black/40 flex items-center justify-center p-12 text-center text-white">
                <div>
                  <p className="font-serif italic text-2xl mb-4">"A dinner here is more than a meal, it's a memory."</p>
                  <div className="w-12 h-px bg-gold-400 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-gold-400 font-display text-xs tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h2 className="font-serif text-4xl font-bold text-white mb-12">Visit Our Kingdom</h2>
            
            <div className="space-y-10 text-white">
              <div className="flex gap-8">
                <div className="w-12 h-12 border border-gold-400/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-gold-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold-400 mb-2">Location</h4>
                  <p className="text-sm font-light text-white/70">111 D88 - Al Baraha, Deira, Dubai, UAE</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-12 h-12 border border-gold-400/20 flex items-center justify-center shrink-0">
                  <Phone className="text-gold-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold-400 mb-2">Phone</h4>
                  <p className="text-sm font-light text-white/70">+971 585469355</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-12 h-12 border border-gold-400/20 flex items-center justify-center shrink-0">
                  <Clock className="text-gold-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold-400 mb-2">Opening Hours</h4>
                  <p className="text-sm font-light text-white/70">Open Daily: 12:00 PM - 02:00 AM</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              <a href="tel:+971585469355" className="bg-gold-400 text-black px-10 py-4 font-display font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-gold-500 transition-all">
                Call Now
              </a>
              <a href="https://wa.me/971585469355" className="px-10 py-4 font-display font-bold text-[11px] uppercase tracking-[0.2em] border border-gold-400 text-gold-400 flex items-center gap-2 hover:bg-gold-400/10 transition-all">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
          
          <div className="h-[500px] rounded-sm overflow-hidden luxury-border relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.232537554!2d55.3094444!3d25.2766667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433f0b000001%3A0x0!2zMjXCsDE2JzM2LjAiTiA1NcKwMTgnMzQuMCJF!5e0!3m2!1sen!2sae!4v1714800000000!5m2!1sen!2sae" 
                className="w-full h-full grayscale invert opacity-70"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-gold-400/30 flex items-center justify-center rotate-45">
              <span className="-rotate-45 font-serif text-xl font-bold tracking-tighter text-gold-400">HF</span>
            </div>
            <span className="font-serif text-2xl font-light tracking-[0.2em] uppercase text-luxury-cream">Hasim Farrukh</span>
          </div>

          <div className="flex gap-10">
            <Instagram className="w-5 h-5 text-gold-400/60 hover:text-gold-400 cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-gold-400/60 hover:text-gold-400 cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gold-400/60 hover:text-gold-400 cursor-pointer transition-colors" />
          </div>

          <p className="text-white/20 text-[10px] font-display tracking-[0.3em] uppercase">
            © 2026 Hasim Farrukh. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-gold-400 selection:text-luxury-black font-sans text-white bg-luxury-black antialiased scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/971585469355" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-[100] group"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute bottom-full mb-4 right-0 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
