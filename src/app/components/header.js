"use client";

import Logo from "./logo";

export default function Header() {
    return (
        <header className='grid grid-cols-1 text-black px-8 h-fit'>
            <Logo />
            <span className="flex w-fit m-auto child:border-b-2 child:border-black font-medium child:py-1 child:px-3 child:mx-2 child-hover:opacity-60">
                <a href="/">Home</a>
                <a href="/">Insight</a>
                <a href="/">About</a>
            </span>
            {/* <span className="grid grid-cols-2 gap-2 content-center font-medium">
                <div className="flex text-black">
                    <input type="text" name="cari" id="" className="rounded-s py-1 px-4" placeholder="Cari" />
                    <button className="py-2 px-4 bg-link rounded-e">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-auto h-4" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </div>
                <button className="bg-blue-800 text-white py-1 px-3 rounded hover:bg-blue-600">
                    Login
                </button> 
            </span> */}
        </header>
    )
}
