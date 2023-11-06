import Image from "next/image";
import Slideshow from "./components/carousel";

export default function Home() {

  return (
    <>
      <main className="">
        <Slideshow />
        {/* <div className="mb-10">
          <Image
            src="/img/desain-interior-mewah-cover.jpeg" width={200} height={100} alt="Picture of the author" className="w-full" />
          <div className="absolute p-5 top-20 right-3 text-black bg-white bg-opacity-80 max-w-md">
            <h3 className="text-3xl border-b border-black mb-2">Nama Proyek</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit voluptatibus quia laborum quo sapiente atque praesentium delectus, perferendis nobis voluptates asperiores architecto ex fugiat.
            </p>
          </div>
        </div> */}
        <div className="m-10">
          <div className="grid grid-cols-2">
            <p className="p-16 flex items-center text-justify border">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nostrum fugiat totam quaerat. Velit, quisquam labore? At sed porro beatae tempore, aliquid totam neque fugit itaque. Nemo totam ipsam maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis ipsa magni quae? Explicabo repudiandae error placeat earum adipisci eaque obcaecati, voluptatibus eligendi, voluptate perspiciatis nihil commodi aspernatur ab quia?
            </p>
            <Image src='/img/rumah-sederhana-dan-recommended-3.jpeg' width={700} height={525} alt='' className="w-full h-auto" />
          </div>
          <div className="grid grid-cols-2">
            <Image src='/img/Desain-rumah-minimalis-modern-1092935829.webp' width={750} height={500} alt='' className="w-full h-auto" />
            <p className="p-16 flex items-center text-justify border">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nostrum fugiat totam quaerat. Velit, quisquam labore? At sed porro beatae tempore, aliquid totam neque fugit itaque. Nemo totam ipsam maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis ipsa magni quae? Explicabo repudiandae error placeat earum adipisci eaque obcaecati, voluptatibus eligendi, voluptate perspiciatis nihil commodi aspernatur ab quia?
            </p>
          </div>
          <div className="grid grid-cols-2">
            <p className="p-16 flex items-center text-justify border">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nostrum fugiat totam quaerat. Velit, quisquam labore? At sed porro beatae tempore, aliquid totam neque fugit itaque. Nemo totam ipsam maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis ipsa magni quae? Explicabo repudiandae error placeat earum adipisci eaque obcaecati, voluptatibus eligendi, voluptate perspiciatis nihil commodi aspernatur ab quia?
            </p>
            <Image src='/img/rumah-sederhana-dan-recommended-3.jpeg' width={700} height={525} alt='' className="w-full h-auto" />
          </div>
        </div>
      </main>
    </>
  )
}
