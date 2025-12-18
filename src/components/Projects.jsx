"use client";
import { useEffect, useMemo, useState } from "react";

function ModalProject({ project, onClose }) {
    const images = project.images?.length ? project.images : [project.image];
    const [idx, setIdx] = useState(0);

    const prev = () => setIdx((v) => (v - 1 + images.length) % images.length);
    const next = () => setIdx((v) => (v + 1) % images.length);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [images.length]);

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 text-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Carousel */}
                <div className="relative">
                    <div className="aspect-[16/8] w-full overflow-hidden">
                        <img
                            src={images[idx]}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900 via-black/10 to-transparent" />

                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-md font-bold cursor-pointer hover:bg-black/60 transition"
                        type="button"
                        aria-label="Close modal"
                    >
                        ✕
                    </button>

                    {/* Prev/Next */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm font-bold cursor-pointer hover:bg-black/60 transition"
                                type="button"
                                aria-label="Previous"
                            >
                                ‹
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm font-bold cursor-pointer hover:bg-black/60 transition"
                                type="button"
                                aria-label="Next"
                            >
                                ›
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur">
                                <div className="flex items-center gap-2">
                                    {images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setIdx(i)}
                                            className={`h-2 w-2 rounded-full transition ${i === idx ? "bg-white" : "bg-white/30 hover:bg-white/60"
                                                }`}
                                            aria-label={`Go to image ${i + 1}`}
                                            type="button"
                                        />
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Counter */}
                    <div className="absolute left-4 bottom-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-100 backdrop-blur">
                        {idx + 1} / {images.length}
                    </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8">
                    <div className="flex flex-col gap-2">
                        <div>
                            <p className="text-sm text-zinc-400">{project.category}</p>
                            <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>
                            <p className="mt-3 max-w-2xl text-zinc-300">{project.detail || project.desc}</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-medium text-zinc-200">Tech Stack</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {project.stack.map((s) => (
                                <span
                                    key={s}
                                    className="rounded-full border border-white/12 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-medium text-zinc-200">Highlights</p>
                        <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                            {project.highlights.map((h) => (
                                <li key={h} className="flex gap-2">
                                    <span className="mt-[6px] h-2 w-2 rounded-full bg-white/70" />
                                    <span>{h}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "MEDIPET CARE",
            category: "Web",
            role: "All Roles",
            // DESKRIPSI SINGKAT (card)
            desc: "Platform digital terintegrasi untuk manajemen kesehatan hewan peliharaan.",
            // DESKRIPSI DETAIL (modal)
            detail:
                "MedipetCare adalah aplikasi berbasis web dan mobile yang berfungsi sebagai platform digital terintegrasi untuk manajemen kesehatan hewan peliharaan. Aplikasi ini menghubungkan pemilik hewan, dokter hewan, dan klinik dalam satu sistem terpusat, sehingga proses pencatatan, pemantauan, dan pengelolaan layanan kesehatan hewan menjadi lebih cepat, rapi, dan terkoordinasi.",
            images: [
                "/img/medipetcare-1.jpeg",
                "/img/medipetcare-2.jpeg",
                "/img/medipetcare-3.jpeg",
                "/img/medipetcare-4.jpeg",
                "/img/medipetcare-5.jpeg",
                "/img/medipetcare-6.jpeg",
                "/img/medipetcare-7.jpeg",
            ],
            image: "/img/medipetcare-1.jpeg",
            stack: ["Web App", "Mobile App", "UI/UX", "Database"],
            highlights: [
                "Manajemen data kesehatan hewan terpusat",
                "Integrasi pemilik, dokter, dan klinik",
                "Mendukung platform web dan mobile",
            ],
            repo: "https://github.com/AhmadGalvin/MEDIPET-CARE",
            repoLabel: "GitHub",
        },
        {
            id: 2,
            title: "Ocean Guardian",
            category: "Game",
            role: "Programmer & Level Designer",
            // DESKRIPSI SINGKAT (card)
            desc: "Game simulasi petualangan 3D bertema pelestarian lingkungan laut.",
            // DESKRIPSI DETAIL (modal)
            detail:
                "The Ocean Guardian adalah game simulasi petualangan 3D berbasis Unity yang mengangkat isu pelestarian lingkungan. Pemain berperan sebagai penjaga teluk yang dapat menjelajahi daratan dan mengendarai kapal untuk membersihkan sampah laut. Game ini dilengkapi sistem Quest modular serta fitur upgrade kapal, menggabungkan edukasi lingkungan dengan mekanika permainan yang menarik dan adiktif.",
            images: [
                "/img/ocean-1.jpeg",
                "/img/ocean-2.jpeg",
                "/img/ocean-3.jpeg",
                "/img/ocean-4.jpeg",
                "/img/ocean-5.jpeg",
            ],
            image: "/img/ocean-1.jpeg",
            stack: ["Unity", "3D Game", "Quest System", "Environment Design"],
            highlights: [
                "Gameplay eksplorasi darat dan laut",
                "Sistem quest modular",
                "Fitur upgrade kapal",
            ],
            external: {
                label: "Play on itch.io",
                href: "https://ahmadgalvin.itch.io/ocean-guardian",
            },
            repo: "https://ahmadgalvin.itch.io/ocean-guardian",
            repoLabel: "itch.io",
        },
        {
            id: 3,
            title: "Car Purchase Decision",
            category: "Data",
            role: "Developer",
            desc: "Sistem pendukung keputusan untuk membantu memilih mobil terbaik.",
            detail:
                "Car Purchase Decision adalah project sistem pendukung keputusan yang membantu pengguna dalam menentukan pilihan mobil berdasarkan beberapa kriteria penilaian. Sistem ini mengolah data dan membandingkan alternatif untuk menghasilkan rekomendasi yang objektif dan terstruktur.",
            images: [
                "/img/car-1.png",
                "/img/car-2.png",
                "/img/car-3.png",
            ],
            image: "/img/car-1.png",
            stack: ["Decision Support System", "Data Processing"],
            highlights: [
                "Perbandingan multi-kriteria",
                "Output berupa ranking/rekomendasi",
                "Struktur pengambilan keputusan jelas",
            ],
            repo: "https://github.com/AhmadGalvin/Car-Purchase-Decision",
            repoLabel: "GitHub",
        }
    ];

    const filters = ["All", "Web", "Game", "Data"];
    const [activeFilter, setActiveFilter] = useState("All");
    const [selected, setSelected] = useState(null);

    const filtered = useMemo(() => {
        if (activeFilter === "All") return projects;
        return projects.filter((p) => p.category === activeFilter);
    }, [activeFilter]);

    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-14 text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                    My{" "}
                    <span className="text-sky-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.25)]">
                        Projects
                    </span>
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
                    Filter kategori dan klik card untuk melihat detail + carousel screenshot.
                </p>

                <div className="mt-8 flex justify-center">
                    <div className="flex w-fit gap-2 rounded-full border border-white/10 bg-zinc-800/50 p-1">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`rounded-full px-4 py-2 text-sm transition ${activeFilter === f ? "bg-white text-black" : "text-zinc-200 hover:bg-white/10"
                                    }`}
                                type="button"
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                    <article
                        key={p.id}
                        className="group flex flex-col h-full overflow-hidden rounded-2xl bg-zinc-800/40 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition hover:shadow-[0_0_0_1px_rgba(56,189,248,0.45),0_18px_60px_rgba(0,0,0,0.45)]"
                    >
                        {/* Banner (klik untuk modal) */}
                        <button
                            type="button"
                            onClick={() => setSelected(p)}
                            className="relative block w-full text-left cursor-pointer"
                            aria-label={`View details for ${p.title}`}
                        >
                            <div className="aspect-[16/10] w-full overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                            </div>

                            {/* overlay gradient */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                            {/* badge category */}
                            <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-100 backdrop-blur">
                                {p.category}
                            </span>
                        </button>

                        {/* Body */}
                        <div className="flex flex-col px-6 pb-6 pt-5 text-center h-full">
                            <h3 className="text-lg font-semibold tracking-tight text-white">
                                {p.title}
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                                {p.desc}
                            </p>

                            {/* Tech chips */}
                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                                {p.stack.map((s) => (
                                    <span
                                        key={s}
                                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>

                            {/* CTA - Always at bottom */}
                            <div className="mt-auto pt-6 flex justify-center gap-3">
                                <a
                                    href={p.repo || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-sky-400 transition"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {p.repoLabel || "GitHub"}
                                </a>

                                {/* Optional: tombol detail (kalau mau ada 2 tombol) */}
                                <button
                                    type="button"
                                    onClick={() => setSelected(p)}
                                    className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
                                >
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>


            {selected && <ModalProject project={selected} onClose={() => setSelected(null)} />}
        </section>
    );
}
