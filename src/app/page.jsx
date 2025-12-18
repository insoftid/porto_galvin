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
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-sm hover:bg-black/60 transition"
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
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-sm hover:bg-black/60 transition"
                type="button"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-sm hover:bg-black/60 transition"
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
                      className={`h-2 w-2 rounded-full transition ${
                        i === idx ? "bg-white" : "bg-white/30 hover:bg-white/60"
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

function ProjectsSection() {
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
        "/projects/medipet-1.png",
        "/projects/medipet-2.png",
        "/projects/medipet-3.png",
      ],
      image: "/projects/medipet-1.png",
      stack: ["Web App", "Mobile App", "UI/UX", "Database"],
      highlights: [
        "Manajemen data kesehatan hewan terpusat",
        "Integrasi pemilik, dokter, dan klinik",
        "Mendukung platform web dan mobile",
      ],
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
        "/projects/ocean-1.png",
        "/projects/ocean-2.png",
        "/projects/ocean-3.png",
      ],
      image: "/projects/ocean-1.png",
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
        "/projects/car-1.png",
        "/projects/car-2.png",
        "/projects/car-3.png",
      ],
      image: "/projects/car-1.png",
      stack: ["Decision Support System", "Data Processing"],
      highlights: [
        "Perbandingan multi-kriteria",
        "Output berupa ranking/rekomendasi",
        "Struktur pengambilan keputusan jelas",
      ],
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
          Selected{" "}
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
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeFilter === f ? "bg-white text-black" : "text-zinc-200 hover:bg-white/10"
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
            className="group overflow-hidden rounded-2xl bg-zinc-800/40 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition hover:shadow-[0_0_0_1px_rgba(56,189,248,0.45),0_18px_60px_rgba(0,0,0,0.45)]"
          >
            {/* Banner (klik untuk modal) */}
            <button
              type="button"
              onClick={() => setSelected(p)}
              className="relative block w-full text-left"
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
            <div className="px-6 pb-6 pt-5 text-center">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {p.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {p.desc}
              </p>

              {/* Tech chips (optional, bisa kamu hapus kalau mau super mirip gambar) */}
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

              {/* CTA */}
              <div className="mt-6 flex justify-center gap-3">
                <a
                  href={p.links?.repo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-sky-400 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>

                {/* Optional: tombol detail (kalau mau ada 2 tombol) */}
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
                >
                  View Detail
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

function Divider() {
  return <div className="h-px w-full bg-white/10" />;
}

function ContactRow({ label, value, href }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 rounded-lg px-2 py-2 hover:bg-white/5 transition"
    >
      <div>
        <p className="text-xs text-zinc-400">{label}</p>
        <p className="text-sm font-medium text-zinc-100">{value}</p>
      </div>
      <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition">
        →
      </span>
    </a>
  );
}

export default function Home() {
  const roles = ["Programmer"];
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
    <main className="min-h-screen bg-zinc-900 text-white selection:bg-white selection:text-black pt-20">
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-semibold tracking-wide">Ahmad Galvin</span>
          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200 transition"
          >
            Contact
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-6 py-14 md:py-0">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />

        <div className="grid items-center gap-10 md:min-h-[calc(100vh-80px)] md:grid-cols-2 md:gap-16">
          {/* LEFT */}
          <div className="order-1">
            <p className="mb-6 inline-flex items-center gap-3 text-lg font-semibold text-white/90">
              Hi There! <span className="text-2xl">👋🏻</span>
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              I&apos;M{" "}
              <span className="text-sky-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.25)]">
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
                href="/CV_Ahmad_Galvin.pdf"
                download
                className="inline-flex items-center justify-center rounded-md border border-sky-400/40 px-6 py-3 text-sm font-medium text-sky-400 hover:bg-sky-400/10 hover:border-sky-400 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT (Image) */}
          <div className="order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[420px]">
              {/* Soft glow */}
              <div className="absolute -inset-6 -z-10 rounded-full bg-sky-400/10 blur-3xl" />

              <div className="overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-[4/5] w-full">
                  <img
                    src="/GalvinPP.png"
                    alt="Ahmad Galvin"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            ABOUT{" "}
            <span className="text-sky-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.25)]">
              ME
            </span>
          </h2>

          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center text-base leading-relaxed text-zinc-300 sm:text-lg">
            <p>
              I am a programmer with a strong interest in building{" "}
              <span className="text-sky-400 font-semibold">functional</span>,{" "}
              <span className="text-sky-400 font-semibold">structured</span>, and{" "}
              <span className="text-sky-400 font-semibold">maintainable</span> software
              systems.
            </p>

            <p>
              My experience includes developing{" "}
              <span className="text-sky-400 font-semibold">web applications</span>,{" "}
              <span className="text-sky-400 font-semibold">backend logic</span>, and{" "}
              <span className="text-sky-400 font-semibold">API-based systems</span>,
              where I focus on clear data flow, system integration, and scalability.
            </p>

            <p>
              I also work on{" "}
              <span className="text-sky-400 font-semibold">game programming</span> using
              Unity, implementing gameplay mechanics, quest systems, and interactive
              environments that combine logic with real-world themes.
            </p>

            {/* Programmer highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Web Systems", "CRUD, data flow, and system integration"],
                ["Game Programming", "Gameplay logic, quests, and mechanics"],
                ["Problem Solving", "Structured logic and decision-based systems"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-zinc-800/40 p-5"
                >
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm text-zinc-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Powers &{" "}
            <span className="text-sky-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.25)]">
              Abilities
            </span>
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Technologies and tools I frequently use to design, build, and maintain functional software—from backend systems to interactive applications.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
              { name: "C++", icon: "💠" },
              { name: "JavaScript", icon: "🟨" },
              { name: "TypeScript", icon: "🔷" },
              { name: "Go", icon: "🐹" },
              { name: "Python", icon: "🐍" },
              { name: "Java", icon: "☕" },
              { name: "PHP", icon: "🐘" },
              { name: "Node.js", icon: "🟢" },
              { name: "React.js", icon: "⚛️" },
              { name: "Laravel", icon: "🔺" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "MySQL", icon: "🐬" },
              { name: "Git", icon: "🔶" },
              { name: "AWS", icon: "☁️" },
              { name: "Postman", icon: "📮" },
              { name: "VS Code", icon: "🧩" },
              { name: "Figma", icon: "🎨" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-3 rounded-full border border-sky-400/40 bg-zinc-900/60 px-5 py-3 text-sm font-medium text-white shadow-[0_0_0_0_rgba(56,189,248,0.0)] transition hover:border-sky-400 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)]"
            >
              <span className="text-lg">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>


      {/* PROJECTS (FIXED) */}
      <ProjectsSection />

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            My<span className="text-sky-400">Contact</span>
          </h2>

          <div className="mt-10 flex items-center justify-center gap-6">
            {/* Email */}
            <a
              href="mailto:galvinahmad@gmail.com"
              className="group grid h-14 w-14 place-items-center rounded-full bg-white text-zinc-900 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M2 5.75A2.75 2.75 0 0 1 4.75 3h14.5A2.75 2.75 0 0 1 22 5.75v12.5A2.75 2.75 0 0 1 19.25 21H4.75A2.75 2.75 0 0 1 2 18.25V5.75Zm2.9-.25 7.1 5.2 7.1-5.2H4.9Zm15.6 2.9-7.95 5.83a1.5 1.5 0 0 1-1.1.27 1.5 1.5 0 0 1-1.1-.27L2.4 8.4v9.85c0 .41.34.75.75.75h15.7c.41 0 .75-.34.75-.75V8.4Z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AhmadGalvin"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid h-14 w-14 place-items-center rounded-full bg-white text-zinc-900 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M12 .5C5.73.5.75 5.62.75 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.26.79-.57v-2.2c-3.2.71-3.88-1.26-3.88-1.26-.52-1.35-1.27-1.71-1.27-1.71-1.04-.73.08-.72.08-.72 1.15.08 1.76 1.2 1.76 1.2 1.02 1.79 2.68 1.27 3.33.97.1-.76.4-1.27.72-1.56-2.55-.3-5.23-1.3-5.23-5.78 0-1.28.45-2.33 1.18-3.15-.12-.3-.51-1.52.11-3.17 0 0 .97-.32 3.18 1.2.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.52 3.18-1.2 3.18-1.2.62 1.65.23 2.87.11 3.17.73.82 1.18 1.87 1.18 3.15 0 4.49-2.69 5.48-5.25 5.77.41.37.78 1.1.78 2.22v3.29c0 .31.21.68.8.57 4.57-1.53 7.86-5.85 7.86-10.95C23.25 5.62 18.27.5 12 .5Z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ahmad-galvin-firdaus-zahid-99aba4286"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid h-14 w-14 place-items-center rounded-full bg-white text-zinc-900 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.66H9.4V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_inigaalvin_"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid h-14 w-14 place-items-center rounded-full bg-white text-zinc-900 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>




      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <p className="text-center text-sm text-zinc-500">© {new Date().getFullYear()} Insoft</p>
      </footer>
    </main>
  );
}
