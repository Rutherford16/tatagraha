'use client'

import { useState } from "react";
import ImageMasonry from "./components/masonry";
import ColorsTimeline from "./components/timeline";
import LogoLoading from "./components/logo-loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const selesaiKah = (iya) => {
    setLoading(iya);
  }

  return (
    <>
      {loading ? (
        <main className="fixed top-0 left-0 w-screen h-screen flex bg-white text-blue-900">
          <div id='loading' className="lg:w-2/4 w-3/4 h-fit m-auto">
            <LogoLoading loading={selesaiKah} />
          </div>
        </main>
      ) : (
        <main className="text-blue-900">
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
            <h1 className="text-4xl font-semibold my-3 py-2 w-fit border-b-2 border-blue-900">Galery</h1>
            <ImageMasonry />
            <h1 className="text-4xl font-semibold my-3 py-2 border-b-2 border-blue-900">Alur Kerja</h1>
            <ColorsTimeline />
          </div>
        </main>
      )}
    </>
  )
}
