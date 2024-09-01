import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HealthWellnessPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/1st.jpg",
      title: "Your Curiosity + Our Herbal Wisdom = A Healthier You ",
      description: "Explore the range of medicinal plants",
      buttonText: "Explore"
    },
    // Add more slides as needed
  ];

  const brands = [
    { name: "Skin Care", logo: "/skinCare.jpg" },
    { name: "Hair Care", logo: "/hairCare.jpg" },
    { name: "Herbal Practices", logo: "/herbal.jpg" },
    { name: "Nutrition", logo: "/nutrition.jpg" },
    { name: "Fitness", logo: "/yoga.jpg" },
  ];

  const ingredients = [
    { name: "Amla", image: "/api/placeholder/200/200" },
    { name: "Tulsi", image: "/api/placeholder/200/200" },
    { name: "Neem", image: "/api/placeholder/200/200" },
    { name: "Aloe Vera", image: "/api/placeholder/200/200" },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <img src="/api/placeholder/150/50" alt="Logo" className="h-8" />
          <nav>
            <ul className="flex space-x-6 text-gray-600">
              <li>About Us</li>
              <li>Explore</li>
              <li>Ayurveda & You</li>
              <li>Support</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Slider */}
      <div className="relative h-96 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-6">{slide.description}</p>
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Brands Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8"></h2>
        <div className="flex justify-between items-center">
          {brands.map((brand, index) => (
            <div key={index} className="text-center">
              <img src={brand.logo} alt={brand.name} className="w-20 h-20 mx-auto mb-2" />
              <button className="bg-green-800 text-white px-4 py-1 rounded-full hover: bg-green-800 transition duration-300">
             {brand.name}
              </button>
            </div>
          ))}
        </div>
      </div>
          
           {/* New Text Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            FUTURE OF HERBAL WISDOM
          </h2>
          <h1 className="text-4xl font-bold text-amber-600 mb-8">
            EXPLORE THE WORLD OF HEALTH & WELLNESS
          </h1>
          <p className="text-gray-700 mb-8">
          In today's fast-paced world, staying healthy is a challenge. It requires eating the right foods, 
          finding balance, and nurturing both body and mind. Our mission is to make this journey easier by 
          offering a wealth of knowledge about medicinal plants through our Virtual Herbal Garden.
          </p>
          <p className="text-gray-700 mb-12">
          Our platform is built on a foundation of extensive research into traditional herbal practices.
           We bring together the best of nature's remedies, offering detailed information and interactive 
           experiences that help you discover the healing power of plants. This is what inspires us to keep
         expanding our garden and sharing it with you every day.


          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-amber-600">
            <div>
              <h3 className="text-4xl font-bold mb-2">150+</h3>
              <p className="text-sm uppercase">Medicinal Plants Catalogued</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-sm uppercase">TRADITIONAL HERBAL REMEDIES EXPLAINED</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-sm uppercase">Learn about 15+ yoga poses that align with Ayurvedic principles.</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">20+</h3>
              <p className="text-sm uppercase"> Nutritional Recipes for Wellness</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ayurveda Section */}
      <div className="relative bg-cover bg-center py-24" style={{ backgroundImage: `url('/ayurvedaaaa.jpg')` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <div className="bg-white bg-opacity-90 p-12 max-w-2xl">
            <h3 className="text-gray-600 uppercase text-sm mb-4 text-center">WHAT WE DO</h3>
            <h2 className="text-3xl font-light text-amber-600 mb-6 text-center">
              Ancient Ayurveda met modern science. And together they went and built a legacy.
            </h2>
            <p className="text-gray-700 mb-8 text-center">
              Gathering the choicest, natural ingredients is important. But you also need to know how to
              blend them to create a quality health product. That's why we rely on the traditional
              knowledge of Ayurveda and the expertise of modern-day science. And quite honestly, it's the
              very foundation of everything we've built ever since.
            </p>
            <div className="text-center">
              <button className="border border-amber-600 text-amber-600 px-6 py-2 hover:bg-amber-600 hover:text-white transition duration-300">
                Explore Ayurveda
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What's on the inside is what matters the most.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="text-center">
              <img src={ingredient.image} alt={ingredient.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <p className="font-medium">{ingredient.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>123 Health Street, Wellness City</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@healthwellness.com
                        support@herbalgarden.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>About Us</li>
                <li>Ayurvedic Practices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthWellnessPage;