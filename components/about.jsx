import React, { useState } from 'react';
import { FiHeart, FiUsers, FiGlobe, FiAward, FiShield, FiTruck, FiHeadphones, FiRefreshCw, FiStar, FiArrowRight, FiPlay } from 'react-icons/fi';

const About = () => {
const [activeTab, setActiveTab] = useState('mission');

  // Company stats
const stats = [
    {
    id: 1,
    number: '50K+',
    label: 'Happy Customers',
    icon: <FiUsers className="w-8 h-8" />,
    color: 'text-blue-600'
    },
    {
    id: 2,
    number: '10K+',
    label: 'Products Sold',
    icon: <FiGlobe className="w-8 h-8" />,
    color: 'text-green-600'
    },
    {
    id: 3,
    number: '99.5%',
    label: 'Customer Satisfaction',
    icon: <FiStar className="w-8 h-8" />,
    color: 'text-yellow-600'
    },
    {
    id: 4,
    number: '24/7',
    label: 'Customer Support',
    icon: <FiHeadphones className="w-8 h-8" />,
    color: 'text-purple-600'
    }
];

  // Team members
const teamMembers = [
    {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    description: 'Visionary leader with 10+ years in e-commerce',
    social: { linkedin: '#', twitter: '#' }
    },
    {
    id: 2,
    name: 'Michael Chen',
    role: 'Head of Technology',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    description: 'Tech innovator passionate about user experience',
    social: { linkedin: '#', twitter: '#' }
    },
    {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    description: 'Creative strategist driving brand growth',
    social: { linkedin: '#', twitter: '#' }
    },
    {
    id: 4,
    name: 'David Kumar',
    role: 'Customer Success Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    description: 'Dedicated to exceptional customer experiences',
    social: { linkedin: '#', twitter: '#' }
    }
];

  // Company values
const values = [
    {
    id: 1,
    title: 'Customer First',
    description: 'Every decision we make starts with our customers in mind',
    icon: <FiHeart className="w-12 h-12" />,
    color: 'bg-pink-100 text-pink-600'
    },
    {
    id: 2,
    title: 'Quality Assurance',
    description: 'We curate only the finest products from trusted suppliers',
    icon: <FiAward className="w-12 h-12" />,
    color: 'bg-yellow-100 text-yellow-600'
    },
    {
    id: 3,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices and responsible sourcing',
    icon: <FiGlobe className="w-12 h-12" />,
    color: 'bg-green-100 text-green-600'
    },
    {
    id: 4,
    title: 'Innovation',
    description: 'Constantly improving our platform and services',
    icon: <FiRefreshCw className="w-12 h-12" />,
    color: 'bg-blue-100 text-blue-600'
    }
];

  // Why choose us features
const features = [
    {
    id: 1,
    title: 'Secure Shopping',
    description: 'SSL encryption and secure payment processing',
    icon: <FiShield className="w-8 h-8" />,
    color: 'text-green-600'
    },
    {
    id: 2,
    title: 'Fast Delivery',
    description: 'Free shipping on orders over $50, delivered in 2-3 days',
    icon: <FiTruck className="w-8 h-8" />,
    color: 'text-blue-600'
    },
    {
    id: 3,
    title: '24/7 Support',
    description: 'Round-the-clock customer service via chat, email, or phone',
    icon: <FiHeadphones className="w-8 h-8" />,
    color: 'text-purple-600'
    },
    {
    id: 4,
    title: 'Easy Returns',
    description: '30-day hassle-free return policy on all products',
    icon: <FiRefreshCw className="w-8 h-8" />,
    color: 'text-orange-600'
    }
];

  // Timeline data
const timeline = [
    {
    year: '2019',
    title: 'The Beginning',
    description: 'EaseShop was founded with a vision to make online shopping simple and enjoyable'
    },
    {
    year: '2020',
    title: 'Growth & Expansion',
    description: 'Reached 10,000 customers and expanded our product catalog to 1,000+ items'
    },
    {
    year: '2021',
    title: 'Technology Upgrade',
    description: 'Launched our new mobile app and improved website performance by 300%'
    },
    {
    year: '2022',
    title: 'Global Reach',
    description: 'Started international shipping and partnered with 50+ premium brands'
    },
    {
    year: '2023',
    title: 'Sustainability Focus',
    description: 'Implemented eco-friendly packaging and carbon-neutral shipping options'
    },
    {
    year: '2024',
    title: 'AI Integration',
    description: 'Introduced personalized recommendations and smart customer support'
    }
];

const tabContent = {
    mission: {
    title: 'Our Mission',
    content: 'To revolutionize online shopping by providing exceptional products, outstanding service, and seamless experiences that exceed customer expectations. We believe shopping should be easy, enjoyable, and accessible to everyone.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    vision: {
    title: 'Our Vision',
    content: 'To become the world\'s most trusted and innovative e-commerce platform, where customers can discover, explore, and purchase products that enhance their lives while supporting sustainable and ethical business practices.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop'
    },
    story: {
    title: 'Our Story',
    content: 'Started in a small garage by two friends who were frustrated with complicated online shopping experiences, EaseShop has grown into a thriving marketplace serving customers worldwide. Our journey is driven by passion for innovation and unwavering commitment to customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop'
    }
};

return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
    <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-pink-200">EaseShop</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
            We're passionate about creating exceptional shopping experiences that bring joy to your everyday life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <FiPlay className="w-5 h-5" />
                Watch Our Story
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-pink-600 transition-colors">
                Meet Our Team
            </button>
            </div>
        </div>
        </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="py-16 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
            </div>
            ))}
        </div>
        </div>

        {/* Mission, Vision, Story Tabs */}
        <div className="py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Learn more about our company values, mission, and the story behind EaseShop
            </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b">
            {Object.keys(tabContent).map((tab) => (
                <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                    activeTab === tab
                    ? 'bg-pink-600 text-white'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-gray-50'
                }`}
                >
                {tabContent[tab].title}
                </button>
            ))}
            </div>

            {/* Tab Content */}
            <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {tabContent[activeTab].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {tabContent[activeTab].content}
                </p>
                </div>
                <div className="order-first lg:order-last">
                <img
                    src={tabContent[activeTab].image}
                    alt={tabContent[activeTab].title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                </div>
            </div>
            </div>
        </div>
        </div>

        {/* Values Section */}
        <div className="py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at EaseShop
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
            <div key={value.id} className="text-center group">
                <div className={`${value.color} rounded-2xl p-6 mx-auto w-24 h-24 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
            </div>
            ))}
        </div>
        </div>

        {/* Timeline Section */}
        <div className="py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Milestones and achievements that shaped EaseShop
            </p>
        </div>

        <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-pink-200"></div>
            <div className="space-y-12">
            {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1 px-8">
                    <div className={`bg-white rounded-xl shadow-lg p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-2xl font-bold text-pink-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    </div>
                </div>
                <div className="w-4 h-4 bg-pink-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1"></div>
                </div>
            ))}
            </div>
        </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind EaseShop's success
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 justify-center">
                        <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 hover:bg-opacity-30 transition-colors">
                        <FiUsers className="w-4 h-4 text-white" />
                        </button>
                        <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 hover:bg-opacity-30 transition-colors">
                        <FiGlobe className="w-4 h-4 text-white" />
                        </button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-pink-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
            </div>
            ))}
        </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EaseShop?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes us different from other e-commerce platforms
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`${feature.color} mb-4`}>
                {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
            </div>
            ))}
        </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h3>
            <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust EaseShop for their online shopping needs. Discover amazing products and exceptional service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <FiArrowRight className="w-5 h-5" />
                Explore Products
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-pink-600 transition-colors">
                Contact Us
            </button>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default About;