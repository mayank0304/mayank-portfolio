"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  User,
  FileText,
} from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const ContactTab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} className="text-[#E0FA51]" />,
      label: "Email",
      value: "mayank771768@gmail.com",
      link: "mailto:mayank771768@gmail.com",
    },
    {
      icon: <Phone size={20} className="text-[#E0FA51]" />,
      label: "Phone",
      value: "+91 7696071903",
      link: "tel:+917696071903",
    },
    {
      icon: <MapPin size={20} className="text-[#E0FA51]" />,
      label: "Location",
      value: "Ludhiana, Punjab, India",
      link: "https://maps.google.com/?q=Ludhiana,Punjab,India",
    },
    {
      icon: <Clock size={20} className="text-[#E0FA51]" />,
      label: "Timezone",
      value: "IST (UTC +5:30)",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/mayank-sharma-62b47a24a/",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/mayank0304",
      color: "hover:text-gray-300",
    },
    {
      name: "Twitter",
      icon: <FaX className="text-xl" />,
      url: "#",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-xl" />,
      url: "#",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <div className="p-8 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#E0FA51]">Get In Touch</h1>
        <div className="w-20 h-1 bg-[#E0FA51] rounded-full"></div>
      </div>

      {/* Introduction */}
      <div className="mb-8">
        <p className="text-gray-300 leading-relaxed text-lg">
          I&apos;m always interested in hearing about new opportunities, creative
          projects, or just having a chat about technology. Feel free to reach
          out if you&apos;d like to work together or discuss ideas!
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Contact Form */}
        <div className="bg-[#1a1f29]/50 p-6 rounded-xl border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#E0FA51]/20 rounded-lg flex items-center justify-center">
              <MessageCircle size={20} className="text-[#E0FA51]" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Send Message</h2>
          </div>

          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3">
              <CheckCircle size={20} className="text-green-400" />
              <p className="text-green-400">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  <User size={16} className="inline mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D1117] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#E0FA51]/50 focus:outline-none focus:ring-2 focus:ring-[#E0FA51]/20 transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  <Mail size={16} className="inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D1117] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#E0FA51]/50 focus:outline-none focus:ring-2 focus:ring-[#E0FA51]/20 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                <FileText size={16} className="inline mr-2" />
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#0D1117] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#E0FA51]/50 focus:outline-none focus:ring-2 focus:ring-[#E0FA51]/20 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                <MessageCircle size={16} className="inline mr-2" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#0D1117] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#E0FA51]/50 focus:outline-none focus:ring-2 focus:ring-[#E0FA51]/20 transition-colors resize-vertical"
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#E0FA51] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#E0FA51]/80 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          

       

          {/* Availability */}
          <div className="bg-gradient-to-r from-[#E0FA51]/10 to-[#E0FA51]/5 rounded-xl border border-[#E0FA51]/20 p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Availability
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-white">Available for freelance projects</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-white">Open to full-time opportunities</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <p className="text-white">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#1a1f29]/50 p-8 rounded-xl border border-white/10 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Ready to start a project?
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Whether you have a clear vision or just an idea, I&apos;m here to help
          bring your project to life. Let&apos;s discuss how we can work together to
          create something amazing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:mayank771768@gmail.com"
            className="bg-[#E0FA51] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#E0FA51]/80 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/mayank-sharma-62b47a24a/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0D1117] text-white px-6 py-3 rounded-lg font-semibold border border-white/10 hover:border-[#E0FA51]/30 transition-colors inline-flex items-center justify-center gap-2"
          >
            <FaLinkedin />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
