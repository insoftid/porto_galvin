export default function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                    Powers &{" "}
                    <span className="text-sky-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.25)]">
                        Abilities
                    </span>
                </h2>
                <p className="mt-3 text-sm text-zinc-400 sm:text-base">
                    Technologies and tools I frequently use to design, build, and maintain functional software from backend systems to interactive applications.
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
    );
}
