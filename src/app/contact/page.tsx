"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Send } from "lucide-react";

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="py-24 bg-brand-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-950 mb-6 tracking-tight">
                Let's Get In Touch
              </h1>
              <p className="text-lg text-brand-800/80 leading-relaxed font-light mb-12">
                Want to book a session or learn more about what Bandworx can do
                for your organization? Reach out to us directly or fill out the
                form.
              </p>

              <div className="space-y-6 mb-16">
                <a
                  href="mailto:jarrettlipman@texasbandworx.com"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center text-accent-600 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-600 font-medium mb-1">
                      Email Us
                    </p>
                    <p className="text-brand-950 font-semibold group-hover:text-accent-600 transition-colors">
                      jarrettlipman@texasbandworx.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/bandworxllc"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-brand-200 rounded-xl flex items-center justify-center text-brand-700 group-hover:scale-110 transition-transform">
                    <FacebookIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-600 font-medium mb-1">
                      Follow Us
                    </p>
                    <p className="text-brand-950 font-semibold group-hover:text-brand-600 transition-colors">
                      Bandworx LLC on Facebook
                    </p>
                  </div>
                </a>
              </div>

              <div className="border-t border-brand-200 pt-10">
                <h3 className="text-xl font-display font-bold text-brand-950 mb-6">
                  Our Partners
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://pages.etadventures.com/band-trips"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center bg-white p-4 rounded-xl border border-brand-100 hover:border-brand-300 transition-colors group"
                  >
                    <span className="font-semibold text-brand-800 group-hover:text-brand-950">
                      Educational Travel Adventures
                    </span>
                    <ExternalLink className="w-4 h-4 text-brand-400 group-hover:text-brand-600" />
                  </a>
                  <a
                    href="https://www.instagram.com/pbsl.usa/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center bg-white p-4 rounded-xl border border-brand-100 hover:border-brand-300 transition-colors group"
                  >
                    <span className="font-semibold text-brand-800 group-hover:text-brand-950">
                      Peer-Based Student Leadership
                    </span>
                    <ExternalLink className="w-4 h-4 text-brand-400 group-hover:text-brand-600" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-brand-900/5 border border-brand-100"
            >
              <h2 className="text-2xl font-display font-bold text-brand-950 mb-8">
                Send a Message
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-900">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-900">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-900">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-900">
                    Subject / Topic <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white transition-colors appearance-none text-brand-800">
                    <option value="">Select a topic...</option>
                    <option value="booking">
                      Booking an In-Person Session
                    </option>
                    <option value="virtual">Virtual Consultation</option>
                    <option value="speaking">
                      Professional Development / Speaking
                    </option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-900">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white transition-colors"
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-900 hover:bg-brand-950 text-white rounded-xl font-medium transition-colors shadow-lg hover:shadow-brand-900/20 flex items-center justify-center gap-2 mt-4 group"
                >
                  Send Message{" "}
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
