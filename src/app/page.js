"use client";

import { Menu, Transition } from "@headlessui/react"
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {

  return (
    <>
      <header className='flex bg-header px-8 h-fit'>
        <span className='flex-none w-48 h-16 m-1'>
          <svg viewBox="0 0 260 84" className="w-full h-auto text-black">
            <rect width='15' height='25' x='0' y='0' fill="currentColor" />
            <rect width='15' height='25' x='20' y='0' fill="currentColor" />
            <rect width='15' height='25' x='40' y='0' fill="currentColor" />
            <rect width='15' height='25' x='60' y='0' fill="currentColor" />
            <rect width='15' height='25' x='0' y='30' fill="currentColor" />
            <rect width='15' height='25' x='20' y='30' fill="currentColor" />
            <rect width='15' height='25' x='40' y='30' fill="currentColor" />
            <rect width='15' height='25' x='60' y='30' fill="none" stroke="currentColor" transform="rotate(45 76 54)" />
            <rect width='15' height='25' x='0' y='60' fill="currentColor" />
            <rect width='15' height='25' x='20' y='60' fill="currentColor" />
            <rect width='15' height='25' x='40' y='60' fill="currentColor" />
            <rect width='15' height='25' x='60' y='60' fill="currentColor" />
            <text y='50' x='100' className="text-4xl font-semibold font-mocha" fill="currentColor">tatagraha</text>
            <text y='75' x='100' className="text-lg" fill="currentColor">ARCHITECT</text>
          </svg>
        </span>
        <span className="grow mx-9 font-medium child:mt-8 child:rounded-t child:py-1 child:px-3 child:mx-2 child-hover:text-gray-600">
          <a href="/">Home</a>
          <a href="/">Insight</a>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full font-medium">
                Project
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-auto">
                  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                </svg>

              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Edit
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Duplicate
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Archive
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Move
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Delete
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <a href="/">About</a>
        </span>
        <span className="flex-none pt-5 font-medium">
          <button className="bg-blue-800 text-white py-1 px-3 rounded hover:bg-blue-600">
            Login
          </button>
        </span>
      </header>
      <main className="">
        <div className="mb-10">
          <Image
            src="/img/desain-interior-mewah-cover.jpeg" width={200} height={150} alt="Picture of the author" className="w-full" />
          <div className="absolute p-5 top-20 right-3 text-black bg-white bg-opacity-80 max-w-md">
            <h3 className="text-3xl border-b border-black mb-2">Nama Proyek</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit voluptatibus quia laborum quo sapiente atque praesentium delectus, perferendis nobis voluptates asperiores architecto ex fugiat.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 mb-10">
          <p className="px-16 flex items-center border">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nostrum fugiat totam quaerat. Velit, quisquam labore? At sed porro beatae tempore, aliquid totam neque fugit itaque. Nemo totam ipsam maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis ipsa magni quae? Explicabo repudiandae error placeat earum adipisci eaque obcaecati, voluptatibus eligendi, voluptate perspiciatis nihil commodi aspernatur ab quia?
          </p>
          <Image src='/img/rumah-sederhana-dan-recommended-3.jpeg' width={100} height={100} alt='' className="w-full h-auto" />
          <Image src='/img/rumah-sederhana-dan-recommended-3.jpeg' width={100} height={100} alt='' className="w-full h-auto" />
          <p className="px-16 flex items-center border">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nostrum fugiat totam quaerat. Velit, quisquam labore? At sed porro beatae tempore, aliquid totam neque fugit itaque. Nemo totam ipsam maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis ipsa magni quae? Explicabo repudiandae error placeat earum adipisci eaque obcaecati, voluptatibus eligendi, voluptate perspiciatis nihil commodi aspernatur ab quia?
          </p>
          <p className="px-16 flex items-center border">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nostrum fugiat totam quaerat. Velit, quisquam labore? At sed porro beatae tempore, aliquid totam neque fugit itaque. Nemo totam ipsam maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis ipsa magni quae? Explicabo repudiandae error placeat earum adipisci eaque obcaecati, voluptatibus eligendi, voluptate perspiciatis nihil commodi aspernatur ab quia?
          </p>
          <Image src='/img/rumah-sederhana-dan-recommended-3.jpeg' width={100} height={100} alt='' className="w-full h-auto" />
        </div>
      </main>
      <footer className="grid grid-cols-2 bg-footer text-white p-4">
        aaaa
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3554.4032085336867!2d117.13310366386696!3d-0.4724535844023699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1699106270112!5m2!1sen!2sid" className="w-full h-80" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </footer>
    </>
  )
}
