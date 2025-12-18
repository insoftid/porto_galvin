"use client";
import { useEffect, useState } from "react";

export default function Hero() {
    const roles = ["Programmer", "Web Developer", "Game Developer", "Software Engineer"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [typed, setTyped] = useState("");

    useEffect(() => {
        const current = roles[roleIndex];
        let i = 0;

        const type = setInterval(() => {
            i++;
            setTyped(current.slice(0, i));
            if (i >= current.length) clearInterval(type);
        }, 60);

        const cycle = setTimeout(() => {
            setTyped("");
            setRoleIndex((v) => (v + 1) % roles.length);
        }, 2200);

        return () => {
            clearInterval(type);
            clearTimeout(cycle);
        };
    }, [roleIndex]);

    return (
        <section className="relative mx-auto max-w-6xl px-6 py-14 md:py-0">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />

            <div className="grid items-center gap-10 md:min-h-[calc(100vh-80px)] md:grid-cols-2 md:gap-16">
                {/* LEFT */}
                <div className="order-2 md:order-">
                    <p className="mb-6 inline-flex items-center gap-3 text-lg font-semibold text-white/90">
                        Hi There! <span className="text-2xl">👋🏻</span>
                    </p>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        I'M{" "}
                        <span className="text-sky-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.3)]">
                            AHMAD GALVIN
                        </span>
                    </h1>

                    {/* Typewriter */}
                    <div className="mt-6 flex items-baseline gap-2">
                        <p className="text-3xl font-bold text-white sm:text-4xl">
                            {typed}
                            <span className="ml-1 inline-block w-[10px] animate-pulse text-sky-400">
                                |
                            </span>
                        </p>
                    </div>

                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                        I am a programmer focused on building reliable software solutions from
                        web-based systems and APIs to Unity-based 3D games. I enjoy solving problems,
                        structuring logic, and turning ideas into functional applications.
                    </p>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-zinc-200 transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="/CV_AHMAD_GALVIN_FIRDAUS_ZAHID.pdf"
                            download
                            className="inline-flex items-center justify-center rounded-md border border-sky-400/40 px-6 py-3 text-sm font-medium text-sky-400 hover:bg-sky-400/10 hover:border-sky-400 transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* RIGHT (Image) */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                    <div className="relative w-full max-w-[420px]">
                        <div className="overflow-hidden rounded-2xl drop-shadow-[0_0_18px_rgba(56,189,248,0.25)]">
                            <div className="aspect-[4/5] w-full">
                                <img
                                    src="/img/GalvinPP.png"
                                    alt="Ahmad Galvin"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
