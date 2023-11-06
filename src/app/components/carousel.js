'use client'

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Slideshow() {

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <Image
          src="/img/desain-interior-mewah-cover.jpeg" width={2200} height={1467} alt="Picture of the author" className="w-full" />
        <Image
          src="/img/Desain-rumah-minimalis-modern-1092935829.webp" width={750} height={500} alt="Picture of the author" className="w-full" />
        <Image
          src="/img/rumah-sederhana-dan-recommended-3.jpeg" width={700} height={525} alt="Picture of the author" className="w-full" />
      </Carousel>
    </div>
  );
}