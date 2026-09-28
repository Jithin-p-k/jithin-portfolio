import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Github, Linkedin, Twitter } from './Icons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Live time ticker
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: personalInfo.timezone || 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZoneName: 'short',
        }).format(now);
        setCurrentTime(formatted);
      } catch (e) {
        setCurrentTime(new Date().toLocaleTimeString());
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have an Opportunity or Project in Mind?
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Whether you are looking to hire for AI/ML engineering, discuss software development roles, or explore Generative AI solutions — feel free to reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Direct info & quick copy */}
          <div className="lg:col-span-2 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Direct Channels Box */}
              <div className="glass-panel p-6 rounded-2xl border-white/10 relative overflow-hidden space-y-4">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Direct Email
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white mb-2 break-all">
                    {personalInfo.email}
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-all shadow-sm"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied Email!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Direct Phone / WhatsApp
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white mb-2">
                    {personalInfo.phone}
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-medium text-xs transition-all"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied Phone Number!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Phone Number</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Timezone Card */}
              <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="font-mono">Local time (IST): {currentTime || 'Loading...'}</span>
                </div>
                <div className="pt-2 border-t border-white/10 text-xs text-emerald-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>{personalInfo.status}</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-panel p-6 rounded-2xl border-white/10">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                Connect on the Web
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-3 glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out the form below and I will get back to you within 24 business hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-2 animate-fadeIn">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto mb-2">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Message Dispatched!</h4>
                <p className="text-xs text-emerald-200">
                  Thank you! Your message has been received. I'll get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Engineering Role / Project Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about what you're building, timeline, or open positions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
