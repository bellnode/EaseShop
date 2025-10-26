import React, { useState, useEffect } from 'react';
import { FiClock, FiPercent, FiGift, FiZap, FiStar, FiShoppingCart, FiTag, FiTrendingUp, FiHeart } from 'react-icons/fi';

const Offers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 23,
    seconds: 45
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Featured deals data
  const featuredDeals = [
    {
      id: 1,
      title: 'Flash Sale',
      subtitle: 'Limited Time Only',
      discount: '70%',
      originalPrice: 299.99,
      salePrice: 89.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop',
      badge: 'HOT',
      badgeColor: 'bg-red-500',
      timeLimit: '6 hours left',
      category: 'Electronics'
    },
    {
      id: 2,
      title: 'Buy 2 Get 1 Free',
      subtitle: 'Fashion Collection',
      discount: '33%',
      originalPrice: 149.99,
      salePrice: 99.99,
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=400&fit=crop',
      badge: 'POPULAR',
      badgeColor: 'bg-blue-500',
      timeLimit: '2 days left',
      category: 'Clothing'
    },
    {
      id: 3,
      title: 'Mega Clearance',
      subtitle: 'Home & Garden',
      discount: '60%',
      originalPrice: 199.99,
      salePrice: 79.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
      badge: 'NEW',
      badgeColor: 'bg-green-500',
      timeLimit: '1 week left',
      category: 'Home'
    }
  ];

  // Deal categories
  const dealCategories = [
    {
      id: 1,
      name: 'Daily Deals',
      icon: <FiZap className="w-8 h-8" />,
      description: 'New deals every 24 hours',
      color: 'from-yellow-400 to-orange-500',
      deals: 15
    },
    {
      id: 2,
      name: 'Weekly Specials',
      icon: <FiStar className="w-8 h-8" />,
      description: 'Hand-picked weekly offers',
      color: 'from-purple-400 to-pink-500',
      deals: 8
    },
    {
      id: 3,
      name: 'Clearance Sale',
      icon: <FiPercent className="w-8 h-8" />,
      description: 'Up to 80% off selected items',
      color: 'from-red-400 to-pink-500',
      deals: 23
    },
    {
      id: 4,
      name: 'Bundle Offers',
      icon: <FiGift className="w-8 h-8" />,
      description: 'Save more when you buy more',
      color: 'from-green-400 to-blue-500',
      deals: 12
    }
  ];

  // Product deals
  const productDeals = [
    {
      id: 1,
      name: 'Wireless Earbuds Pro',
      originalPrice: 159.99,
      salePrice: 79.99,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop',
      rating: 4.8,
      reviews: 324,
      category: 'Electronics',
      badge: 'Limited Stock'
    },
    {
      id: 2,
      name: 'Designer Sneakers',
      originalPrice: 129.99,
      salePrice: 89.99,
      discount: 31,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop',
      rating: 4.6,
      reviews: 189,
      category: 'Fashion',
      badge: 'Trending'
    },
    {
      id: 3,
      name: 'Smart Coffee Maker',
      originalPrice: 199.99,
      salePrice: 139.99,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop',
      rating: 4.7,
      reviews: 156,
      category: 'Home',
      badge: 'Best Seller'
    },
    {
      id: 4,
      name: 'Fitness Tracker',
      originalPrice: 99.99,
      salePrice: 59.99,
      discount: 40,
      image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=300&fit=crop',
      rating: 4.5,
      reviews: 278,
      category: 'Sports',
      badge: 'Flash Sale'
    },
    {
      id: 5,
      name: 'Organic Skincare Set',
      originalPrice: 79.99,
      salePrice: 49.99,
      discount: 38,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop',
      rating: 4.9,
      reviews: 92,
      category: 'Beauty',
      badge: 'Natural'
    },
    {
      id: 6,
      name: 'Gaming Headset',
      originalPrice: 149.99,
      salePrice: 99.99,
      discount: 33,
      image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop',
      rating: 4.4,
      reviews: 445,
      category: 'Gaming',
      badge: 'Pro Choice'
    }
  ];

  const CountdownTimer = () => (
    <div className="flex items-center justify-center gap-4 text-white">
      <div className="text-center">
        <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold">{timeLeft.days}</div>
          <div className="text-xs opacity-80">DAYS</div>
        </div>
      </div>
      <div className="text-2xl opacity-60">:</div>
      <div className="text-center">
        <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs opacity-80">HRS</div>
        </div>
      </div>
      <div className="text-2xl opacity-60">:</div>
      <div className="text-center">
        <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs opacity-80">MIN</div>
        </div>
      </div>
      <div className="text-2xl opacity-60">:</div>
      <div className="text-center">
        <div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs opacity-80">SEC</div>
        </div>
      </div>
    </div>
  );

  const DealCard = ({ deal }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Badge */}
        <div className={`absolute top-4 left-4 ${deal.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
          {deal.badge}
        </div>

        {/* Discount */}
        <div className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-bold">{deal.discount}</div>
            <div className="text-xs">OFF</div>
          </div>
        </div>

        {/* Time limit */}
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1">
          <div className="flex items-center gap-1 text-sm">
            <FiClock className="w-4 h-4 text-red-500" />
            <span className="font-semibold text-gray-800">{deal.timeLimit}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-pink-600 font-semibold">{deal.category}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{deal.title}</h3>
        <p className="text-gray-600 mb-4">{deal.subtitle}</p>
        
        <div className="flex items-center justify-between mb-4">
        <div>
            <span className="text-2xl font-bold text-pink-600">${deal.salePrice}</span>
            <span className="text-sm text-gray-500 line-through ml-2">${deal.originalPrice}</span>
        </div>
        <div className="text-green-600 font-semibold">
            Save ${(deal.originalPrice - deal.salePrice).toFixed(2)}
        </div>
        </div>

        <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
        <FiShoppingCart className="w-5 h-5" />
        Grab This Deal
        </button>
    </div>
    </div>
);

const ProductDealCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
    <div className="relative">
        <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white rounded-full px-2 py-1 text-sm font-bold">
        -{product.discount}%
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white rounded-full px-2 py-1 text-xs">
        {product.badge}
        </div>

        {/* Wishlist */}
        <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-pink-50 transition-colors">
        <FiHeart className="w-4 h-4 text-gray-600 hover:text-pink-600" />
        </button>
    </div>

    <div className="p-4">
        <div className="mb-2">
        <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
            <FiStar
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
            ))}
        </div>
        <span className="text-xs text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
        <div>
            <span className="text-lg font-bold text-pink-600">${product.salePrice}</span>
            <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
        </div>
        </div>

        <button className="w-full bg-gray-100 hover:bg-pink-600 hover:text-white text-gray-700 font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
        Add to Cart
        </button>
    </div>
    </div>
);

return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
    <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🔥 Mega Sale Event
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100">
            Up to 70% OFF on thousands of products!
            </p>
            
            {/* Countdown Timer */}
            <div className="mb-8">
            <p className="text-lg mb-4 text-pink-200">Sale ends in:</p>
            <CountdownTimer />
            </div>

            <button className="bg-white text-pink-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Shop Now & Save Big!
            </button>
        </div>
        </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Deals */}
        <div className="mb-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Deals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Don't miss out on these incredible limited-time offers. Grab them before they're gone!
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
            ))}
        </div>
        </div>

        {/* Deal Categories */}
        <div className="mb-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Deal Categories</h2>
            <p className="text-gray-600">Explore different types of amazing offers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealCategories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${category.color} text-white rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg`}>
                <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm opacity-90 mb-4">{category.description}</p>
                <div className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm font-semibold">
                    {category.deals} Active Deals
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>

        {/* Product Deals Grid */}
        <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
            <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Hot Deals</h2>
            <p className="text-gray-600">Limited time offers on popular products</p>
            </div>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors flex items-center gap-2">
            <FiTrendingUp className="w-5 h-5" />
            View All Deals
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productDeals.map((product) => (
            <ProductDealCard key={product.id} product={product} />
            ))}
        </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Never Miss a Deal!</h3>
        <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive offers, flash sales, and new arrivals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
            Subscribe
            </button>
        </div>
        </div>
    </div>
    </div>
);
};

export default Offers;