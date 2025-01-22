// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import React from "react";

// export default async function Hero()  {
 
//     const data = await client.fetch (`*[_type == "hero"] {
//   heading,
//   description,
//   buttonText,
//   statistics[] {
//     value,
//     label
//   },
//   images[] {
//     "imageUrl": asset->url,
//     alt,
//     animation
//   }
  
// }`);
  
//     // console.log(data);
//   return (
//     <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-8">
//         {/* Left Section */}
//         <section>
//           <h2 className="text-4xl sm:text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 font-bold text-center md:text-left">
//             {/* FIND CLOTHES THAT MATCHES YOUR STYLE */}
//             {/* {data.heading} */}
//             {data && data[0]?.heading}

//           </h2>
//           <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-full md:max-w-[545px] text-center md:text-left">
//             {/* Browse through our diverse range of meticulously crafted garments,
//             designed to bring out your individuality and cater to your sense of
//             style. */}
//             {data && data[0]?.description}
//           </p>
//           <div className="flex justify-center md:justify-start">
//             <button className="w-full md:w-auto text-center bg-black hover:bg-black/80 transition-all text-white px-8 md:px-14 py-3 md:py-4 rounded-full">
//               {/* Shop Now */}
//               {data && data[0]?.buttonText}
//             </button>
//           </div>
//           <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 md:mt-12">
//             <div className="flex flex-col items-center md:items-start">
//               <span className="font-bold text-2xl md:text-xl lg:text-4xl xl:text-[40px]">
//                 {/* 200+ */}
//                 {data && data[0]?.statistics[0]?.value}
//               </span>
//               <span className="text-xs xl:text-base text-black/60 text-center md:text-left">
//                 {/* International Brands */}
//                 {data && data[0]?.statistics[0]?.label}
//               </span>
//             </div>
//             <div className="h-px w-full md:w-0 md:h-12 bg-black/10 hidden md:block"></div>
//             <div className="flex flex-col items-center md:items-start">
//               <span className="font-bold text-2xl md:text-xl lg:text-4xl xl:text-[40px]">
//                 {/* 2000+ */}
//                 {data && data[0]?.statistics[1]?.value}
//               </span>
//               <span className="text-xs xl:text-base text-black/60 text-center md:text-left">
//                 {/* High-Quality Products */}
//                 {data && data[0]?.statistics[1]?.label}
//               </span>
//             </div>
//             <div className="h-px w-full md:w-0 md:h-12 bg-black/10 hidden md:block"></div>
//             <div className="flex flex-col items-center md:items-start">
//               <span className="font-bold text-2xl md:text-xl lg:text-4xl xl:text-[40px]">
//                 {/* 30,000+ */}
//                 {data && data[0]?.statistics[2]?.value}
//               </span>
//               <span className="text-xs xl:text-base text-black/60 text-center md:text-left">
//                 {/* Happy Customers */}
//                 {data && data[0]?.statistics[2]?.label}
//               </span>
//             </div>
//           </div>
//         </section>
//         {/* Right Sections */}
//         <section className="relative flex items-center justify-center min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat">
//           <Image
//             priority
//             src={data && data[0]?.images[1]?.imageUrl}
//             height={104}
//             width={104}
//             alt={data && data[0]?.images[1]?.alt}
//             className="absolute right-7 xl:right-0 top-12 w-12 md:w-16 lg:w-24 xl:w-[104px] animate-[spin_4s_infinite]"
//           />
//           <Image
//             priority
//             src={data && data[0]?.images[2]?.imageUrl}
//             height={56}
//             width={56}
//             alt={data && data[0]?.images[2]?.alt}
//             className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 w-8 md:w-10 lg:w-14 animate-[spin_3s_infinite]"
//           />
//           <Image
//             src={data && data[0]?.images[0]?.imageUrl}
//             alt={data && data[0]?.images[0]?.alt}
//             width={400}
//             height={400}
//             className="relative max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto"
//           />
//         </section>
//       </div>
//     </header>
//   );
// };













// "use client"

// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";

// interface Statistics {
//   value: string;
//   label: string;
// }

// interface ImageData {
//   imageUrl: string;
//   alt: string;
//   animation: string;
// }

// interface HeroData {
//   heading: string;
//   description: string;
//   buttonText: string;
//   statistics: Statistics[];
//   images: ImageData[];
// }

// export default function Hero() {
//   const [data, setData] = useState<HeroData | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await client.fetch(`*[_type == "hero"] {
//         heading,
//         description,
//         buttonText,
//         statistics[] {
//           value,
//           label
//         },
//         images[] {
//           "imageUrl": asset->url,
//           alt,
//           animation
//         }
//       }`);
//       setData(result[0]);
//     };

//     fetchData();
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>; 
//   }




//   return (
//     <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-8">
//         {/* Left Section */}
//         <section>
//           <h2 className="text-4xl sm:text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 font-bold text-center md:text-left">
//             {data.heading}
//           </h2>
//           <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-full md:max-w-[545px] text-center md:text-left">
//             {data.description}
//           </p>
//           <div className="flex justify-center md:justify-start">
//             <button className="w-full md:w-auto text-center bg-black hover:bg-black/80 transition-all text-white px-8 md:px-14 py-3 md:py-4 rounded-full">
//               {data.buttonText}
//             </button>
//           </div>
//           <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 md:mt-12">
//             <div className="flex flex-col items-center md:items-start">
//               <span className="font-bold text-2xl md:text-xl lg:text-4xl xl:text-[40px]">
//                 {data.statistics[0].value}
//               </span>
//               <span className="text-xs xl:text-base text-black/60 text-center md:text-left">
//                 {data.statistics[0].label}
//               </span>
//             </div>
//             <div className="h-px w-full md:w-0 md:h-12 bg-black/10 hidden md:block"></div>
//             <div className="flex flex-col items-center md:items-start">
//               <span className="font-bold text-2xl md:text-xl lg:text-4xl xl:text-[40px]">
//                 {data.statistics[1].value}
//               </span>
//               <span className="text-xs xl:text-base text-black/60 text-center md:text-left">
//                 {data.statistics[1].label}
//               </span>
//             </div>
//             <div className="h-px w-full md:w-0 md:h-12 bg-black/10 hidden md:block"></div>
//             <div className="flex flex-col items-center md:items-start">
//               <span className="font-bold text-2xl md:text-xl lg:text-4xl xl:text-[40px]">
//                 {data.statistics[2].value}
//               </span>
//               <span className="text-xs xl:text-base text-black/60 text-center md:text-left">
//                 {data.statistics[2].label}
//               </span>
//             </div>
//           </div>
//         </section>
//         {/* Right Section */}
//         <section className="relative flex items-center justify-center min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat">
//           <Image
//             priority
//             src={data.images[1].imageUrl}
//             height={104}
//             width={104}
//             alt={data.images[1].alt}
//             className="absolute right-7 xl:right-0 top-12 w-12 md:w-16 lg:w-24 xl:w-[104px] animate-[spin_4s_infinite]"
//           />
//           <Image
//             priority
//             src={data.images[2].imageUrl}
//             height={56}
//             width={56}
//             alt={data.images[2].alt}
//             className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 w-8 md:w-10 lg:w-14 animate-[spin_3s_infinite]"
//           />
//           <Image
//             src={data.images[0].imageUrl}
//             alt={data.images[0].alt}
//             width={400}
//             height={400}
//             className="relative max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto"
//           />
//         </section>
//       </div>
//     </header>
//   );
// }




// import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";

export default function Hero()  {
 
//     const data = await client.fetch (`*[_type == "hero"] {
//   heading,
//   description,
//   buttonText,
//   statistics[] {
//     value,
//     label
//   },
//   images[] {
//     "imageUrl": asset->url,
//     alt,
//     animation
//   }
  
// }`);
  
    // console.log(data);
  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-8">
        {/* Left Section */}
        <section>
          <h2 className="text-4xl sm:text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 font-bold text-center md:text-left">
            FIND CLOTHES THAT MATCHES YOUR STYLE
            {/* {data.heading} */}
            {/* {data && data[0]?.heading} */}

          </h2>
          <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-full md:max-w-[545px] text-center md:text-left">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
            {/* {data && data[0]?.description} */}
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="w-full md:w-auto text-center bg-black hover:bg-black/80 transition-all text-white px-8 md:px-14 py-3 md:py-4 rounded-full">
              Shop Now
              {/* {data && data[0]?.buttonText} */}
            </button>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 md:mt-12">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bold text-2xl md:text-xl lg:text-4xl xl:text-[40px]">
                200+
                {/* {data && data[0]?.statistics[0]?.value} */}
              </span>
              <span className="text-xs xl:text-base text-black/60 text-center md:text-left">
                International Brands
                {/* {data && data[0]?.statistics[0]?.label} */}
              </span>
            </div>
            <div className="h-px w-full md:w-0 md:h-12 bg-black/10 hidden md:block"></div>
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bold text-2xl md:text-xl lg:text-4xl xl:text-[40px]">
                2000+
                {/* {data && data[0]?.statistics[1]?.value} */}
              </span>
              <span className="text-xs xl:text-base text-black/60 text-center md:text-left">
                High-Quality Products
                {/* {data && data[0]?.statistics[1]?.label} */}
              </span>
            </div>
            <div className="h-px w-full md:w-0 md:h-12 bg-black/10 hidden md:block"></div>
            <div  className="flex flex-col items-center md:items-start">
              <span className="font-bold text-2xl md:text-xl lg:text-4xl xl:text-[40px]">
                30,000+
                {/* {data && data[0]?.statistics[2]?.value} */}
              </span>
              <span className="text-xs xl:text-base text-black/60 text-center md:text-left">
                Happy Customers
                {/* {data && data[0]?.statistics[2]?.label} */}
              </span>
            </div>
          </div>
        </section>
        {/* Right Sections */}
        <section className="relative flex items-center justify-center min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat">
          <Image
            priority
            // src={data && data[0]?.images[1]?.imageUrl}
            src="/star/Bigstar.png "
            alt={"image"}
            height={104}
            width={104}
            // alt={data && data[0]?.images[1]?.alt}
            className="absolute right-7 xl:right-0 top-12 w-12 md:w-16 lg:w-24 xl:w-[104px] animate-[spin_4s_infinite]"
          />
          <Image
            priority
            // src={data && data[0]?.images[2]?.imageUrl}
            src="/star/smallstar.png"
            alt={"image"}
            height={56}
            width={56}
            
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 w-8 md:w-10 lg:w-14 animate-[spin_3s_infinite]"
          />
          <Image
            // src={data && data[0]?.images[0]?.imageUrl}
            // alt={data && data[0]?.images[0]?.alt}
            src="/hero-1.png"
            alt={"image"}
            width={400}
            height={400}
            className="relative max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto"
          />
        </section>
      </div>
    </header>
  );
};





















