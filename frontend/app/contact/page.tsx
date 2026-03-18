"use client";

import React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        source: "contact-form",
      }),
    });

    if (res.ok) alert("Message sent!");
    else alert("Error");
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "gautamtechnical493@gmail.com",
      href: "mailto:gautamtechnical493@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7355474484",
      href: "tel:+917355474484",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "Start a conversation",
      href: "https://wa.me/7355474484",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "lucknow, Uttar Pradesh, India",
      href: "#",
    },
  ];

  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Header />

      {/* Page Title */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">
              Get In Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Let's Build Something{" "}
              <span className="text-accent">Amazing Together</span>
            </h1>
            <p className="text-lg text-foreground/70 text-balance">
              Have a project in mind? Let's turn it into something impactful.
              Connect with our team and discover how we can transform your
              vision into a scalable, high-performing digital solution{" "}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
