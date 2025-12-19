"use client";
import { useState } from "react";

function CertificateModal({ certificate, onClose }) {
    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 md:p-6 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-zinc-900 text-white shadow-2xl scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Certificate Image */}
                <div className="relative">
                    <div className="aspect-[16/11] w-full overflow-hidden">
                        <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="h-full w-full object-contain bg-zinc-800"
                            loading="lazy"
                        />
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900 via-black/10 to-transparent" />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-md font-bold cursor-pointer hover:bg-black/60 transition"
                        type="button"
                        aria-label="Close modal"
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8">
                    <div className="flex flex-col gap-2">
                        <div>
                            <p className="text-sm text-zinc-400">{certificate.issuer}</p>
                            <h3 className="mt-1 text-2xl font-semibold">{certificate.title}</h3>
                            <p className="mt-1 text-sm text-sky-400">{certificate.date}</p>
                            {certificate.credentialId && (
                                <p className="mt-2 text-xs text-zinc-400">
                                    Credential ID: <span className="text-zinc-300">{certificate.credentialId}</span>
                                </p>
                            )}
                            {certificate.description && (
                                <p className="mt-3 max-w-2xl text-zinc-300">{certificate.description}</p>
                            )}
                        </div>
                    </div>

                    {certificate.skills && certificate.skills.length > 0 && (
                        <div className="mt-6">
                            <p className="text-sm font-medium text-zinc-200">Skills Covered</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {certificate.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/12 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {certificate.url && (
                        <div className="mt-6">
                            <a
                                href={certificate.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-black hover:bg-sky-400 transition"
                            >
                                View Certificate
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Certificates() {
    const certificates = [
        {
            id: 1,
            title: "HCIA-AI V3.5 Course",
            issuer: "Huawei",
            date: "2025",
            image: "/sertifikat/HCIA-AI V3.5 Course.png",
            description: "Huawei Certified ICT Associate - Artificial Intelligence certification covering AI fundamentals, machine learning, and deep learning concepts.",
            skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Huawei AI"],
        },
        {
            id: 2,
            title: "HCIA-IoT V3.0 Course",
            issuer: "Huawei",
            date: "2025",
            image: "/sertifikat/HCIA-IoT V3.0 Course.png",
            description: "Huawei Certified ICT Associate - Internet of Things certification covering IoT architecture, protocols, and applications.",
            skills: ["Internet of Things", "IoT Architecture", "IoT Protocols", "Smart Devices"],
        },
        {
            id: 3,
            title: "HCIA-Security V4.0 Course",
            issuer: "Huawei",
            date: "2025",
            image: "/sertifikat/HCIA-Security V4.0 Course.png",
            description: "Huawei Certified ICT Associate - Security certification covering network security, cryptography, and security management.",
            skills: ["Network Security", "Cryptography", "Security Management", "Cybersecurity"],
        },
        {
            id: 4,
            title: "Artificial Intelligence and Applications",
            issuer: "Huawei",
            date: "2025",
            image: "/sertifikat/Artificial Intelligence and Applications.png",
            description: "Comprehensive course on AI applications in real-world scenarios and industry use cases.",
            skills: ["AI Applications", "Machine Learning", "AI Solutions", "Industry AI"],
        },
        {
            id: 5,
            title: "Internet of Things Technology and Applications",
            issuer: "Huawei",
            date: "2025",
            image: "/sertifikat/Internet of Things Technology and Applications.png",
            description: "Advanced course covering IoT technologies and their practical applications in various industries.",
            skills: ["IoT Technology", "Smart Systems", "IoT Applications", "Connected Devices"],
        },
        {
            id: 6,
            title: "Overview of AI",
            issuer: "Huawei",
            date: "2025",
            image: "/sertifikat/Overview of AI.png",
            description: "Introduction to Artificial Intelligence concepts, methodologies, and future trends.",
            skills: ["AI Fundamentals", "AI Concepts", "AI Trends", "Machine Learning Basics"],
        },
        {
            id: 7,
            title: "Overview of IoT Technologies",
            issuer: "Huawei",
            date: "2025",
            image: "/sertifikat/Overview of IoT Technologies.png",
            description: "Comprehensive overview of Internet of Things technologies and ecosystem.",
            skills: ["IoT Overview", "IoT Ecosystem", "Smart Technology", "Connected Systems"],
        },
        {
            id: 8,
            title: "Overview of IoT Technologies (CRA Training Program)",
            issuer: "Huawei",
            date: "2025",
            image: "/sertifikat/Overview of IoT Technologies(CRA Training Program).png",
            description: "Specialized IoT technologies training as part of the CRA (Certified Regional Academy) program.",
            skills: ["IoT Technologies", "CRA Program", "IoT Training", "Smart Solutions"],
        },
        {
            id: 9,
            title: "AI Basic",
            issuer: "Huawei",
            date: "2025",
            image: "/sertifikat/Al Basic.png",
            description: "Foundational course covering basic concepts and principles of Artificial Intelligence.",
            skills: ["AI Basics", "AI Principles", "Machine Learning Intro", "AI Fundamentals"],
        },
        {
            id: 10,
            title: "CCNA - Introduction to Networks",
            issuer: "Cisco Networking Academy",
            date: "2025",
            image: "/sertifikat/CCNA-_Introduction_to_Networks_certificate_galvinahmad-students-unnes-ac-id_3d0576e2-3b1e-44d7-a197-aab6fa37577a.pdf",
            credentialId: "3d0576e2-3b1e-44d7-a197-aab6fa37577a",
            description: "Cisco Certified Network Associate certification covering network fundamentals, IP addressing, and network protocols.",
            skills: ["Networking", "TCP/IP", "Network Protocols", "Cisco", "Network Configuration"],
            isPdf: true,
        },
        {
            id: 11,
            title: "Belajar Dasar Visualisasi Data",
            issuer: "Dicoding Indonesia",
            date: "2024",
            image: "/sertifikat/Belajar Dasar Visualisasi Data.pdf",
            description: "Fundamental course on data visualization techniques and best practices for presenting data insights.",
            skills: ["Data Visualization", "Data Analysis", "Charts & Graphs", "Data Presentation"],
            isPdf: true,
        },
    ];

    const [selectedCert, setSelectedCert] = useState(null);

    const handleCertificateClick = (cert) => {
        if (cert.isPdf) {
            // Open PDF in new tab
            window.open(cert.image, '_blank');
        } else {
            // Show modal for images
            setSelectedCert(cert);
        }
    };

    return (
        <section id="certificates" className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-14 text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                    My{" "}
                    <span className="text-sky-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.25)]">
                        Certificates
                    </span>
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
                    Professional certifications and achievements that validate my skills and expertise.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {certificates.map((cert) => (
                    <article
                        key={cert.id}
                        className="group flex flex-col h-full overflow-hidden rounded-2xl bg-zinc-800/40 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition hover:shadow-[0_0_0_1px_rgba(56,189,248,0.45),0_18px_60px_rgba(0,0,0,0.45)]"
                    >
                        {/* Certificate Preview */}
                        <button
                            type="button"
                            onClick={() => handleCertificateClick(cert)}
                            className="relative block w-full text-left cursor-pointer"
                            aria-label={`View certificate: ${cert.title}`}
                        >
                            <div className="aspect-[16/11] w-full overflow-hidden bg-zinc-800">
                                {cert.isPdf ? (
                                    // PDF Placeholder
                                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                                        <div className="text-center">
                                            <svg className="w-20 h-20 mx-auto text-sky-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-6 4h6" />
                                            </svg>
                                            <p className="mt-3 text-sm text-zinc-400 font-medium">PDF Certificate</p>
                                            <p className="mt-1 text-xs text-zinc-500">Click to view</p>
                                        </div>
                                    </div>
                                ) : (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                                        loading="lazy"
                                    />
                                )}
                            </div>

                            {/* Overlay gradient */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                            {/* Badge */}
                            <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-100 backdrop-blur flex items-center gap-1.5">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {cert.isPdf ? 'PDF' : 'Certified'}
                            </span>
                        </button>

                        {/* Body */}
                        <div className="flex flex-col px-6 pb-6 pt-5 h-full">
                            <p className="text-xs text-sky-400 font-medium">{cert.issuer}</p>
                            <h3 className="mt-2 text-lg font-semibold tracking-tight text-white line-clamp-2">
                                {cert.title}
                            </h3>

                            <p className="mt-2 text-sm text-zinc-400">
                                {cert.date}
                            </p>

                            {cert.skills && cert.skills.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {cert.skills.slice(0, 3).map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                    {cert.skills.length > 3 && (
                                        <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-400">
                                            +{cert.skills.length - 3}
                                        </span>
                                    )}
                                </div>
                            )}

                            {/* CTA - Always at bottom */}
                            <div className="mt-auto pt-6">
                                <button
                                    type="button"
                                    onClick={() => handleCertificateClick(cert)}
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-sky-400/40 px-5 py-2.5 text-sm font-medium text-sky-400 hover:bg-sky-400/10 hover:border-sky-400 transition"
                                >
                                    {cert.isPdf ? 'Open PDF' : 'View Details'}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {selectedCert && <CertificateModal certificate={selectedCert} onClose={() => setSelectedCert(null)} />}
        </section>
    );
}
