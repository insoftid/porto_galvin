export default function AboutMe() {
    return (
        <section id="about" className="mx-auto max-w-6xl px-6 py-24 rounded-2xl">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
                    About{" "}
                    <span className="text-sky-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.25)]">
                        Me
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
                                className="rounded-xl border border-white/10 bg-zinc-800/40 p-5 hover:bg-zinc-800/60 transition-all hover:scale-[1.05] hover:shadow-[0_0_18px_rgba(56,189,248,0.25)]"
                            >
                                <p className="text-sm font-semibold text-white">{title}</p>
                                <p className="mt-2 text-sm text-zinc-300">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
