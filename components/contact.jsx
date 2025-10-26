import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiMessageCircle, FiHeadphones, FiHelpCircle, FiShoppingCart, FiUser, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeMethod, setActiveMethod] = useState('form');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Contact methods
  const contactMethods = [
    {
      id: 'phone',
      title: 'Call Us',
      subtitle: 'Speak with our team',
      value: '+1 (555) 123-4567',
      icon: <FiPhone className="w-8 h-8" />,
      color: 'bg-blue-100 text-blue-600',
      availability: '24/7 Support'
    },
    {
      id: 'email',
      title: 'Email Us',
      subtitle: 'Send us a message',
      value: 'support@easeshop.com',
      icon: <FiMail className="w-8 h-8" />,
      color: 'bg-green-100 text-green-600',
      availability: 'Response within 2 hours'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      subtitle: 'Instant assistance',
      value: 'Start Chat',
      icon: <FiMessageCircle className="w-8 h-8" />,
      color: 'bg-purple-100 text-purple-600',
      availability: 'Available now'
    },
    {
      id: 'location',
      title: 'Visit Us',
      subtitle: 'Our office location',
      value: '123 Commerce St, City',
      icon: <FiMapPin className="w-8 h-8" />,
      color: 'bg-pink-100 text-pink-600',
      availability: 'Mon-Fri 9AM-6PM'
    }
  ];

  // Support categories
  const supportCategories = [
    {
      id: 'orders',
      title: 'Order Support',
      description: 'Track orders, returns, refunds',
      icon: <FiShoppingCart className="w-6 h-6" />,
      color: 'bg-blue-50 border-blue-200 text-blue-700'
    },
    {
      id: 'account',
      title: 'Account Help',
      description: 'Login issues, profile updates',
      icon: <FiUser className="w-6 h-6" />,
      color: 'bg-green-50 border-green-200 text-green-700'
    },
    {
      id: 'technical',
      title: 'Technical Issues',
      description: 'Website bugs, app problems',
      icon: <FiHeadphones className="w-6 h-6" />,
      color: 'bg-purple-50 border-purple-200 text-purple-700'
    },
    {
      id: 'general',
      title: 'General Inquiry',
      description: 'Questions about our services',
      icon: <FiHelpCircle className="w-6 h-6" />,
      color: 'bg-orange-50 border-orange-200 text-orange-700'
    }
  ];

  // FAQ items
  const faqItems = [
    {
      id: 1,
      question: 'How can I track my order?',
      answer: 'You can track your order by logging into your account and visiting the "My Orders" section. You\'ll also receive tracking information via email.'
    },
    {
      id: 2,
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some restrictions apply to certain categories.'
    },
    {
      id: 3,
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days. Express shipping is available for next-day delivery. Free shipping is available on orders over $50.'
    },
    {
      id: 4,
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 50 countries worldwide. International shipping times vary by location and typically take 7-14 business days.'
    }
  ];

  // Office hours
  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-pink-200">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              We're here to help! Reach out to our friendly support team anytime
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Methods */}
        <div className="mb-16 -mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <div 
                key={method.id} 
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setActiveMethod(method.id)}
              >
                <div className={`${method.color} rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.subtitle}</p>
                <div className="text-lg font-semibold text-pink-600 mb-2">{method.value}</div>
                <div className="text-sm text-gray-500">{method.availability}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <FiSend className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <FiCheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      <option value="orders">Order Support</option>
                      <option value="account">Account Help</option>
                      <option value="technical">Technical Issues</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                      placeholder="Please describe your question or concern in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Support Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Help</h3>
              <div className="space-y-4">
                {supportCategories.map((category) => (
                  <div 
                    key={category.id} 
                    className={`border-2 rounded-xl p-4 cursor-pointer hover:shadow-md transition-all ${category.color}`}
                  >
                    <div className="flex items-center gap-3">
                      {category.icon}
                      <div>
                        <h4 className="font-semibold">{category.title}</h4>
                        <p className="text-sm opacity-80">{category.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FiClock className="w-6 h-6 text-pink-600" />
                <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700">{schedule.day}</span>
                    <span className="font-semibold text-gray-900">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Emergency Support</h3>
              <p className="text-red-100 mb-4 text-sm">
                For urgent issues that need immediate attention
              </p>
              <button className="bg-white text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors w-full">
                Call Emergency Line
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to the most common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-pink-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-pink-700 transition-colors">
              View All FAQs
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Store</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <FiMapPin className="w-5 h-5 text-pink-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">123 Commerce Street<br />Downtown District<br />New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiPhone className="w-5 h-5 text-pink-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiMail className="w-5 h-5 text-pink-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">store@easeshop.com</p>
                    </div>
                  </div>
                </div>
                <button className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-pink-700 transition-colors">
                  Get Directions
                </button>
              </div>
              <div className="bg-gray-200 h-64 lg:h-auto flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FiMapPin className="w-16 h-16 mx-auto mb-4" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Map integration would go here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;