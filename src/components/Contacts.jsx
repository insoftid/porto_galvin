export default function Contacts() {
    const contacts = [
        {
            icon: (
                <svg width="20" height="16" viewBox="0 0 20 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" />
                </svg>
            ),
            label: "Email",
            value: "galvinahmad@gmail.com",
            href: "mailto:galvinahmad@gmail.com",
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            ),
            label: "WhatsApp",
            value: "+62 813-2954-6052",
            href: "https://wa.me/6281329546052",
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M12 .5C5.73.5.75 5.62.75 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.26.79-.57v-2.2c-3.2.71-3.88-1.26-3.88-1.26-.52-1.35-1.27-1.71-1.27-1.71-1.04-.73.08-.72.08-.72 1.15.08 1.76 1.2 1.76 1.2 1.02 1.79 2.68 1.27 3.33.97.1-.76.4-1.27.72-1.56-2.55-.3-5.23-1.3-5.23-5.78 0-1.28.45-2.33 1.18-3.15-.12-.3-.51-1.52.11-3.17 0 0 .97-.32 3.18 1.2.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.52 3.18-1.2 3.18-1.2.62 1.65.23 2.87.11 3.17.73.82 1.18 1.87 1.18 3.15 0 4.49-2.69 5.48-5.25 5.77.41.37.78 1.1.78 2.22v3.29c0 .31.21.68.8.57 4.57-1.53 7.86-5.85 7.86-10.95C23.25 5.62 18.27.5 12 .5Z" />
                </svg>
            ),
            label: "GitHub",
            value: "AhmadGalvin",
            href: "https://github.com/AhmadGalvin",
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.66H9.4V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
            ),
            label: "LinkedIn",
            value: "Ahmad Galvin",
            href: "https://www.linkedin.com/in/ahmad-galvin-firdaus-zahid-99aba4286",
        },
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" />
                </svg>
            ),
            label: "Instagram",
            value: "@_inigaalvin_",
            href: "https://www.instagram.com/_inigaalvin_",
        },
    ];

    return (
        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                    Get In{" "}
                    <span className="text-sky-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.25)]">
                        Touch
                    </span>
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
                    Feel free to reach out through any of these platforms. I'm always open to discussing new projects and opportunities.
                </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {contacts.map((contact) => (
                    <a
                        key={contact.label}
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-800/40 p-5 transition-all hover:bg-zinc-800/60 hover:border-sky-400/50 hover:shadow-[0_0_18px_rgba(56,189,248,0.25)]"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-400 transition-all group-hover:bg-sky-400 group-hover:text-black">
                            {contact.icon}
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-xs font-medium text-zinc-400">{contact.label}</p>
                            <p className="mt-1 truncate text-sm font-semibold text-white">
                                {contact.value}
                            </p>
                        </div>
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 text-zinc-400 transition-all group-hover:translate-x-1 group-hover:text-sky-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                ))}
            </div>
        </section>
    );
}
