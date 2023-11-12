import Image from "next/image";
import ImageMasonry from "./components/masonry";

export default function Home() {

  return (
    <>
      <main className="">
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
          <ImageMasonry/>
        </div>
      </main>
    </>
  )
}
