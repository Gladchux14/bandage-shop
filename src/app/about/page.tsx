import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      
      <div className="bg-green-100 p-8 rounded-lg shadow-md text-center mb-12">
        <h1 className="text-4xl font-bold text-green-500 mb-4">Welcome to Bandage</h1>
        <p className="text-lg text-[#737373]">
          Your trusted destination for premium-quality products that meet your everyday needs. We’re dedicated to making your shopping experience seamless, enjoyable, and rewarding.
        </p>
      </div>

      
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-green-500 text-center mb-6">Our Mission</h2>
        <p className="text-lg text-[#737373] text-center">
          At Bandage, our mission is to redefine online shopping by offering top-quality products, exceptional customer service, and a platform you can trust. We aim to empower our customers with convenience, innovation, and choice.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-green-500 mb-2">Quality Products</h3>
          <p className="text-[#737373]">
            Each product is handpicked to ensure it meets our high standards, offering you the best value for your money.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-green-500 mb-2">Exceptional Support</h3>
          <p className="text-[#737373]">
            Our friendly team is always ready to assist with any questions or concerns, ensuring your satisfaction.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-green-500 mb-2">Secure Shopping</h3>
          <p className="text-[#737373]">
            Shop with confidence knowing your data and transactions are protected by the latest security measures.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-green-50 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-green-500 text-center mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-lg text-[#737373] italic">
              "Bandage has completely transformed my shopping experience! The quality of products and customer service is unmatched."
            </p>
            <span className="block mt-4 text-green-500 font-semibold">- Jane Doe</span>
          </div>
          <div className="text-center">
            <p className="text-lg text-[#737373] italic">
              "Fast delivery and amazing products. I always recommend Bandage to my friends and family."
            </p>
            <span className="block mt-4 text-green-500 font-semibold">- John Smith</span>
          </div>
          <div className="text-center">
            <p className="text-lg text-[#737373] italic">
              "Shopping here is so easy and secure. I’m a customer for life!"
            </p>
            <span className="block mt-4 text-green-500 font-semibold">- Sarah Lee</span>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-4">Join Our Community</h2>
        <p className="text-lg text-[#737373] mb-6">
          Be part of the Bandage family and enjoy exclusive offers, updates, and insights into the latest trends.
        </p>
        <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default About;
