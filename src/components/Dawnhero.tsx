import Image from "next/image";
import React from "react";

  function Dawnhero() {
  
return (
    <div className="w-full h-auto bg-primary text-maintext flex justify-center items-center flex-wrap gap-8 md:gap-16 lg:gap-[180px] py-4">
      <Image
        src="/group/Group1.png"
        alt="Group 1"
        height={80}
        width={80}
        className="w-12 md:w-16 lg:w-20"
      />
      <Image
        src="/group/Group2.png"
        alt="Group 2"
        height={50}
        width={50}
        className="w-10 md:w-12 lg:w-14"
      />
      <Image
        src="/group/Group3.png"
        alt="Group 3"
        height={80}
        width={80}
        className="w-12 md:w-16 lg:w-20"
      />
      <Image
        src="/group/Group4.png"
        alt="Group 4"
        height={80}
        width={80}
        className="w-12 md:w-16 lg:w-20"
      />
      <Image
        src="/group/Group5.png"
        alt="Group 5"
        height={90}
        width={90}
        className="w-20 md:w-20 lg:w-20"
      />
    </div>
  );
}

export default Dawnhero;






