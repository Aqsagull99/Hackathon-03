import Image from "next/image";

const DressStyleSection = () => {
  return (
    <section className="py-12 flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-5xl bg-customGray p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">
          BROWSE BY dress STYLE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image with text - Top Left */}
          <div className="relative w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <Image
              src="/dress/image 11.png"
              alt="Dress 1"
              fill
              className="rounded-lg object-cover"
            />
            <p className="absolute top-4 left-4 text-primary font-bold text-2xl bg-opacity-50 px-2 py-1 rounded">
              Casual
            </p>
          </div>

          {/* Image with text - Top Right */}
          <div className="relative w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <Image
              src="/dress/image 13.png"
              alt="Dress 2"
              fill
              className="rounded-lg object-cover"
            />
            <p className="absolute top-4 left-4 text-primary font-bold text-2xl bg-opacity-50 px-2 py-1 rounded">
              Formal
            </p>
          </div>

          {/* Image with text - Bottom Left */}
          <div className="relative w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <Image
              src="/dress/image 12.png"
              alt="Dress 3"
              fill
              className="rounded-lg object-cover"
            />
            <p className="absolute top-4 left-4 text-primary font-bold text-2xl bg-opacity-50 px-2 py-1 rounded">
              Party
            </p>
          </div>

          {/* Image with text - Bottom Right */}
          <div className="relative w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <Image
              src="/dress/image 14.png"
              alt="Dress 4"
              fill
              className="rounded-lg object-cover"
            />
            <p className="absolute top-4 left-4 text-primary font-bold text-2xl bg-opacity-50 px-2 py-1 rounded">
              Gym
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyleSection;
