import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              About Us
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to <span className="text-primary font-semibold">Your Marketplace</span>, where quality meets convenience. We are committed to offering a diverse range of top-notch products, ensuring customer satisfaction every step of the way.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Our platform connects buyers with high-quality sellers to bring you the best deals and a seamless shopping experience. Whether you are looking for trendy fashion, cutting-edge tech, or everyday essentials, we’ve got you covered.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/aboutimg.jpg"
              alt="About us"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-primary mt-12 py-12">
        <div className="container mx-auto px-6 lg:px-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to redefine online shopping by creating a reliable and efficient marketplace where customers can find the products they need with ease and confidence.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 lg:px-20 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center p-6 border rounded-lg shadow-sm">
            <div className="text-primary text-4xl mb-4">
              <span className="material-icons">shopping_cart</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
            <p className="text-gray-600">
              Explore a vast array of products across multiple categories.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 border rounded-lg shadow-sm">
            <div className="text-primary text-4xl mb-4">
              <span className="material-icons">verified</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Trusted Sellers</h3>
            <p className="text-gray-600">
              Partnering only with reliable and quality-driven sellers.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 border rounded-lg shadow-sm">
            <div className="text-primary text-4xl mb-4">
              <span className="material-icons">support_agent</span>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our team is here to assist you anytime you need help.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <Image
                src="/images/team1.jpg"
                alt="Team Member 1"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <Image
                src="/images/team2.jpg"
                alt="Team Member 2"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">Jane Smith</h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <Image
                src="/images/team3.jpg"
                alt="Team Member 3"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">Alex Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;