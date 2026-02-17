import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone, CheckCircle2, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    const formData = new FormData(e.target);
    
    // Web3Forms access key
    formData.append('access_key', '805e3fc1-f3a9-463b-b5be-127f52397841');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-ultimate">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Header */}
          <div className="lg:col-span-5">
            <div className="text-precision mb-6">Contact</div>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-12 leading-none">
              Get in <br />
              <span className="h-serif text-primary">Touch.</span>
            </h2>
            
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { icon: Mail, href: 'mailto:maheshkoruprolu06@gmail.com' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/kumar-mahesh-koruprolu/' },
                { icon: Github, href: 'https://github.com/maheshkoruprolu' },
                { icon: Phone, href: 'tel:+919014525077' },
                { icon: MapPin, href: '#' }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-14 h-14 rounded-xl bg-surface border border-border flex items-center justify-center hover:border-primary/40 transition-all shadow-premium group"
                >
                  <item.icon size={20} className="text-muted group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 md:p-16 rounded-2xl relative min-h-[500px] flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-10" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-2 border-b border-border pb-4 focus-within:border-primary transition-all group/input">
                        <label className="text-[10px] uppercase font-black text-primary/60 tracking-widest group-focus-within/input:text-primary transition-colors">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required 
                          disabled={isSending}
                          className="w-full bg-transparent text-foreground outline-none placeholder:text-muted/30 font-medium disabled:opacity-50" 
                          placeholder="Mahesh Koruprolu" 
                        />
                      </div>
                      <div className="space-y-2 border-b border-border pb-4 focus-within:border-primary transition-all group/input">
                        <label className="text-[10px] uppercase font-black text-primary/60 tracking-widest group-focus-within/input:text-primary transition-colors">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          required 
                          disabled={isSending}
                          className="w-full bg-transparent text-foreground outline-none placeholder:text-muted/30 font-medium disabled:opacity-50" 
                          placeholder="mahesh@example.com" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 border-b border-border pb-4 focus-within:border-primary transition-all group/input">
                      <label className="text-[10px] uppercase font-black text-primary/60 tracking-widest group-focus-within/input:text-primary transition-colors">Subject</label>
                      <input 
                        type="text" 
                        name="subject"
                        required 
                        disabled={isSending}
                        className="w-full bg-transparent text-foreground outline-none placeholder:text-muted/30 font-medium disabled:opacity-50" 
                        placeholder="Project Inquiry / Collaboration" 
                      />
                    </div>

                    <div className="space-y-2 border-b border-border pb-4 focus-within:border-primary transition-all group/input">
                      <label className="text-[10px] uppercase font-black text-primary/60 tracking-widest group-focus-within/input:text-primary transition-colors">Message</label>
                      <textarea 
                        rows={4} 
                        name="message"
                        required 
                        disabled={isSending}
                        className="w-full bg-transparent text-foreground outline-none placeholder:text-muted/30 font-medium resize-none disabled:opacity-50" 
                        placeholder="I'd love to chat about..." 
                      />
                    </div>

                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm text-center"
                      >
                        {error}
                      </motion.div>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSending}
                      className="btn-signature w-full flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSending ? (
                        <>
                          Transmitting...
                          <Loader2 size={16} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          Transmit Message
                          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                      <CheckCircle2 size={40} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">Transmission Received</h3>
                      <p className="text-muted font-light">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                    </div>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] uppercase font-bold tracking-widest text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
