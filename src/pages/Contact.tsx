
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@breatheai.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-5PM PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "Healthcare Innovation Hub"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "#",
      description: "View our open source code"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      description: "Connect with our team"
    },
    {
      icon: MessageCircle,
      name: "Discord",
      url: "#",
      description: "Join our community"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about BreatheAI? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="demo">Demo Request</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="technical">Technical Support</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-blue-600 font-medium">{info.content}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h2>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-all duration-300"
                  >
                    <div className="bg-gray-100 p-2 rounded-lg mr-3">
                      <social.icon className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{social.name}</h3>
                      <p className="text-gray-600 text-sm">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Our Response Promise</h2>
              <div className="space-y-3 text-blue-100">
                <p>• General inquiries: Within 24 hours</p>
                <p>• Technical support: Within 12 hours</p>
                <p>• Partnership requests: Within 2 business days</p>
                <p>• Press inquiries: Within 4 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How accurate is BreatheAI?</h3>
                <p className="text-gray-600 mb-4">Our AI models achieve 85%+ accuracy in clinical validation studies, with continuous improvements through machine learning.</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my health data secure?</h3>
                <p className="text-gray-600 mb-4">Yes, we use end-to-end encryption and are HIPAA compliant. Your audio data is processed anonymously and not stored on our servers.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">When will the demo be available?</h3>
                <p className="text-gray-600 mb-4">We're planning a public demo release in Q2 2024. Subscribe to our updates to be notified when it launches.</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I integrate BreatheAI into my healthcare app?</h3>
                <p className="text-gray-600 mb-4">Yes! We offer API access for healthcare organizations. Contact us to discuss integration opportunities.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
