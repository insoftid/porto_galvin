export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-900/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="/" className="font-semibold text-xl tracking-wide">Ahmad Galvin</a>
                <nav className="hidden gap-6 text-md text-zinc-300 md:flex">
                    <a href="#about" className="hover:text-white hover:underline transition duration-300">About</a>
                    <a href="#skills" className="hover:text-white hover:underline transition duration-300">Skills</a>
                    <a href="#projects" className="hover:text-white hover:underline transition duration-300">Projects</a>
                    <a href="#contact" className="hover:text-white hover:underline transition duration-300">Contact</a>
                </nav>
                <a
                    href="#contact"
                    className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200 transition"
                >
                    Contact
                </a>
            </div>
        </header>
    );
}
