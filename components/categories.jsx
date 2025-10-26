import React, { useState } from 'react';
import { FiArrowRight, FiGrid, FiStar, FiTag, FiTrendingUp, FiShoppingBag } from 'react-icons/fi';

const Categories = () => {
const [hoveredCategory, setHoveredCategory] = useState(null);

  // Main categories data
const mainCategories = [
    {
    id: 1,
    name: 'Electronics',
    description: 'Latest gadgets and tech accessories',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop',
    productCount: 234,
    icon: '📱',
    color: 'from-blue-500 to-purple-600',
    subcategories: ['Smartphones', 'Laptops', 'Headphones', 'Smart Watches', 'Cameras']
    },
    {
    id: 2,
    name: 'Clothing',
    description: 'Fashion for every style and season',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
    productCount: 567,
    icon: '👕',
    color: 'from-pink-500 to-rose-600',
    subcategories: ['Mens Wear', 'Womens Wear', 'Kids Clothing', 'Shoes', 'Accessories']
    },
    {
    id: 3,
    name: 'Home & Living',
    description: 'Everything for your perfect home',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    productCount: 189,
    icon: '🏠',
    color: 'from-green-500 to-teal-600',
    subcategories: ['Furniture', 'Decor', 'Kitchen', 'Bedding', 'Storage']
    },
    {
    id: 4,
    name: 'Sports & Fitness',
    description: 'Gear up for an active lifestyle',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    productCount: 156,
    icon: '⚽',
    color: 'from-orange-500 to-red-600',
    subcategories: ['Gym Equipment', 'Outdoor Sports', 'Yoga & Fitness', 'Sportswear', 'Supplements']
    },
    {
    id: 5,
    name: 'Beauty & Care',
    description: 'Personal care and beauty essentials',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop',
    productCount: 298,
    icon: '💄',
    color: 'from-purple-500 to-pink-600',
    subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Fragrances', 'Personal Care']
    },
    {
    id: 6,
    name: 'Books & Media',
    description: 'Knowledge and entertainment collection',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
    productCount: 445,
    icon: '📚',
    color: 'from-indigo-500 to-blue-600',
    subcategories: ['Fiction', 'Non-Fiction', 'Educational', 'Comics', 'Audio Books']
    }
];

  // Featured collections
const featuredCollections = [
    {
    id: 1,
    name: 'Summer Sale',
    description: 'Up to 70% off on selected items',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop',
    badge: 'Hot Deal',
    badgeColor: 'bg-red-500'
    },
    {
    id: 2,
    name: 'New Arrivals',
    description: 'Fresh products just landed',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
    badge: 'New',
    badgeColor: 'bg-green-500'
    },
    {
    id: 3,
    name: 'Best Sellers',
    description: 'Most popular products this month',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop',
    badge: 'Trending',
    badgeColor: 'bg-blue-500'
    }
];

  // Popular brands
const popularBrands = [
    { name: 'Apple', logo: '🍎' },
    { name: 'Samsung', logo: '📱' },
    { name: 'Nike', logo: '👟' },
    { name: 'Adidas', logo: '👕' },
    { name: 'Sony', logo: '🎧' },
    { name: 'Canon', logo: '📷' }
];

const CategoryCard = ({ category }) => (
    <div 
    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
    onMouseEnter={() => setHoveredCategory(category.id)}
    onMouseLeave={() => setHoveredCategory(null)}
    >
      {/* Image Container */}
    <div className="relative h-48 overflow-hidden">
        <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-40 transition-opacity`} />
        
        {/* Category Icon */}
        <div className="absolute top-4 left-4 text-4xl bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
        {category.icon}
        </div>

        {/* Product Count Badge */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-sm font-semibold text-gray-800">{category.productCount} items</span>
        </div>
    </div>

      {/* Content */}
    <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
        {category.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
        {category.description}
        </p>

        {/* Subcategories */}
        <div className="mb-4">
        <div className="flex flex-wrap gap-2">
            {category.subcategories.slice(0, 3).map((sub, index) => (
            <span 
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-pink-100 hover:text-pink-700 transition-colors cursor-pointer"
            >
                {sub}
            </span>
            ))}
            {category.subcategories.length > 3 && (
            <span className="text-xs text-gray-500">+{category.subcategories.length - 3} more</span>
            )}
        </div>
        </div>

        {/* Browse Button */}
        <button className="w-full bg-gray-50 hover:bg-pink-600 hover:text-white text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
        Browse Category
        <FiArrowRight className={`w-4 h-4 transition-transform ${hoveredCategory === category.id ? 'translate-x-1' : ''}`} />
        </button>
    </div>
    </div>
);

return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop by <span className="text-pink-600">Categories</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections across different categories. Find exactly what you're looking for.
        </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-2xl font-bold text-pink-600 mb-1">1,889</div>
            <div className="text-gray-600 text-sm">Total Products</div>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-2xl font-bold text-blue-600 mb-1">6</div>
            <div className="text-gray-600 text-sm">Main Categories</div>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
            <div className="text-gray-600 text-sm">Brands</div>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-2xl font-bold text-purple-600 mb-1">4.8</div>
            <div className="text-gray-600 text-sm">Avg Rating</div>
        </div>
        </div>

        {/* Main Categories Grid */}
        <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
            <FiGrid className="w-6 h-6 text-pink-600" />
            <h2 className="text-2xl font-bold text-gray-900">Main Categories</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
            ))}
        </div>
        </div>

        {/* Featured Collections */}
        <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
            <FiStar className="w-6 h-6 text-pink-600" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Collections</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCollections.map((collection) => (
            <div key={collection.id} className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="relative h-40 overflow-hidden">
                <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                
                  {/* Badge */}
                <div className={`absolute top-3 left-3 ${collection.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {collection.badge}
                </div>
                </div>
                
                <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">{collection.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{collection.description}</p>
                <button className="text-pink-600 font-semibold text-sm hover:text-pink-700 flex items-center gap-2">
                    Explore Collection <FiArrowRight className="w-4 h-4" />
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>

        {/* Popular Brands */}
        <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
            <FiTag className="w-6 h-6 text-pink-600" />
            <h2 className="text-2xl font-bold text-gray-900">Popular Brands</h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularBrands.map((brand, index) => (
                <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-3 group-hover:bg-pink-100 group-hover:scale-110 transition-all duration-300">
                    {brand.logo}
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-pink-600 transition-colors">
                    {brand.name}
                </p>
                </div>
            ))}
            </div>
        </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
        <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
            Browse our complete product catalog or use our advanced search to find exactly what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
            <FiShoppingBag className="w-5 h-5" />
            Browse All Products
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-xl hover:bg-white hover:text-pink-600 transition-colors">
            Advanced Search
            </button>
        </div>
        </div>
    </div>
    </div>
);
};

export default Categories;