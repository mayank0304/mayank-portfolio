"use client";

import { Mail, MessageSquare, Send, User } from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactTab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(true);

    try {
      await emailjs.send(
        "service_k8l1zxb", // Replace with your EmailJS service ID
        "template_d1idl89", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "xuxkf_2tin8K6cTiP" // Replace with your EmailJS public key
      );

      toast.success("Message Sent", {
        style: {
          background: "#0D1117", // yellow-ish
          color: "#fff", // text color
        },
      });

      setFormData({ name: "", email: "", message: "" });
      setStatus(false);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Some Issue! Try again later", {
        style: {
          background: "#0D1117", // yellow-ish
          color: "#fff", // text color
        },
      });
      setStatus(false);
    }
  };

  return (
    <div className="p-8 text-white">
      {/* Header */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-3xl font-bold mb-4 text-[#E0FA51]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get In Touch
        </motion.h1>
        <motion.div 
          className="w-20 h-1 bg-[#E0FA51] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
      </motion.div>

      {/* Intro */}
      <motion.div 
        className="bg-[#1a1f29] py-6 px-8 rounded-xl mb-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.p 
          className="text-gray-300 leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          I&apos;m always interested in new opportunities or
          creative projects. Feel free
          to reach out if you&apos;d like to work together or discuss ideas!
        </motion.p>
      </motion.div>

      {/* Contact Form */}
      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <User size={18} className="text-[#E0FA51]" />
              Name
            </label>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 bg-[#1a1f29] text-white rounded-xl border border-white/20 focus:border-[#E0FA51] focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Mail size={18} className="text-[#E0FA51]" />
              Email
            </label>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 bg-[#1a1f29]  text-white rounded-xl border border-white/20 focus:border-[#E0FA51] focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <MessageSquare size={18} className="text-[#E0FA51]" />
              Message
            </label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              rows={5}
              className="w-full px-4 py-3 bg-[#1a1f29] text-white rounded-xl border border-white/20 focus:border-[#E0FA51] focus:outline-none resize-none"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
          </motion.div>

          {/* Submit */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <motion.button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-[#E0FA51] text-black font-semibold rounded-xl shadow-md hover:bg-[#cde941] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status}
            >
              <Send size={18} />
              {status ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactTab;
