import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-500 text-center mb-6">Contact Us</h1>
      <p className="text-lg text-[#737373] text-center mb-4">
        We’d love to hear from you! If you have any questions, suggestions, or concerns, feel free to reach out to us. Your feedback is important to us.
      </p>

      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#737373]">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#737373]">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#737373]">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="text-center mt-8">
        <p className="text-[#737373]">
          Or reach us at: <a href="mailto:support@bandage.com" className="text-green-500 hover:underline">support@bandage.com</a>
        </p>
        <p className="text-[#737373]">
          Call us: <a href="tel:+123456789" className="text-green-500 hover:underline">+(225) 555-0118</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
