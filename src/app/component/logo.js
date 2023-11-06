"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";

export default function Logo() {
    const animationRef = useRef(null);
    const animasi = () => {
        animationRef.current =
            anime.timeline({
                easing: 'easeInOutExpo',
                loop: true,
                direction: 'alternate',
                duration: 2000
            })
                .add({
                    targets: '#nyempil',
                    transform: "rotate(45 76 54)"
                });
    }

    useEffect(() => {
        animasi();
    }, []);

    return (
        <span className='flex-none w-48 h-16 m-1'>
            <svg viewBox="0 0 260 84" className="w-full h-auto text-black">
                <rect width='15' height='25' x='0' y='0' fill="currentColor" />
                <rect width='15' height='25' x='20' y='0' fill="currentColor" />
                <rect width='15' height='25' x='40' y='0' fill="currentColor" />
                <rect width='15' height='25' x='60' y='0' fill="currentColor" />
                <rect width='15' height='25' x='0' y='30' fill="currentColor" />
                <rect width='15' height='25' x='20' y='30' fill="currentColor" />
                <rect width='15' height='25' x='40' y='30' fill="currentColor" />
                <rect width='15' height='25' x='60' y='30' fill="none" stroke="currentColor" transform="rotate(0 76 54)"  id="nyempil"/>
                <rect width='15' height='25' x='0' y='60' fill="currentColor" />
                <rect width='15' height='25' x='20' y='60' fill="currentColor" />
                <rect width='15' height='25' x='40' y='60' fill="currentColor" />
                <rect width='15' height='25' x='60' y='60' fill="currentColor" />
                <text y='50' x='100' className="text-4xl font-semibold font-mocha" fill="currentColor">tatagraha</text>
                <text y='75' x='100' className="text-lg" fill="currentColor">ARCHITECT</text>
            </svg>
        </span>
    )
}
