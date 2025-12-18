export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-8">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-col items-center gap-2 text-center">
                    <p className="text-sm text-zinc-400">
                        © {new Date().getFullYear()} Ahmad Galvin. All rights reserved.
                    </p>
                    <p className="text-xs text-zinc-500">
                        Developed by{" "}
                        <a
                            href="https://instagram.com/insoft.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-sky-400 hover:text-sky-300 transition"
                        >
                            Insoft.id
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
