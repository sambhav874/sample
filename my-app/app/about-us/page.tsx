import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-2xl text-center">
          Learn more about who we are and what drives us.
        </p>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg">
            We are committed to providing the best solutions for our customers, focusing on
            innovation, integrity, and customer satisfaction. Our mission is to make a positive
            impact on the communities we serve.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              
              <h3 className="text-xl font-semibold mt-4">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              
              <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
              <p className="text-gray-600">COO</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              
              <h3 className="text-xl font-semibold mt-4">Alice Johnson</h3>
              <p className="text-gray-600">CTO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our History</h2>
          <p className="text-lg text-center">
            Founded in 2010, our company has grown from a small startup into a leading provider in
            the industry. Our journey has been one of constant growth, innovation, and commitment to
            excellence.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center justify-center py-16 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Want to know more?</h2>
        <p className="text-lg mb-6">Contact us to learn more about our services and team.</p>
        <a
          href="/contact"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
