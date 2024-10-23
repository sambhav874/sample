import React from "react";


const Adventures: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 bg-green-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Explore Adventures</h1>
        <p className="text-xl max-w-2xl text-center">
          Discover the excitement of outdoor adventures with our range of activities, from hiking
          through majestic mountains to camping under the stars.
        </p>
      </section>

      {/* Adventure Types */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Types of Adventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Hiking */}
            <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center">
              
              <h3 className="text-2xl font-semibold mt-4">Hiking</h3>
              <p className="text-gray-600 mt-2">
                Embark on an unforgettable hiking journey through breathtaking trails and
                picturesque landscapes. Perfect for adventurers of all skill levels.
              </p>
            </div>

            {/* Camping */}
            <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center">
              
              <h3 className="text-2xl font-semibold mt-4">Camping</h3>
              <p className="text-gray-600 mt-2">
                Enjoy a night under the stars with our camping expeditions. From basic survival
                camps to luxury retreats, we have it all!
              </p>
            </div>

            {/* Kayaking */}
            <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center">
              
              <h3 className="text-2xl font-semibold mt-4">Kayaking</h3>
              <p className="text-gray-600 mt-2">
                Paddle through serene lakes and rushing rivers with our kayaking adventures. Suitable
                for individuals and groups alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center justify-center py-16 bg-green-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready for an Adventure?</h2>
        <p className="text-lg mb-6">Join us today and make your next adventure unforgettable!</p>
        <a
          href="/contact"
          className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Adventures;
