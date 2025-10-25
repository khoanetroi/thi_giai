import { Link } from "react-router-dom";
import { useState } from "react";

const footerLinks = [
    {
        title: "Liên kết",
        items: [
            { label: "Trang chủ", to: "/" },
            { label: "Hoạt động", to: "/hoat-dong" },
            { label: "Thông tin đào tạo", to: "/information-full" },
            { label: "Hỏi đáp", to: "/faq" }
        ]
    },
    {
        title: "Sinh viên",
        items: [
            { label: "Thời khóa biểu", to: "/shedule" },
            { label: "Lịch thi", to: "/exam" },
            { label: "Bản điểm", to: "/student" },
            { label: "Về Khoa", to: "/about" }
        ]
    },
    {
        title: "Thông tin",
        items: [
            { label: "Tin tức", to: "/information-full" },
            { label: "Tuyển sinh", to: "/shedule" },
            { label: "Liên hệ", to: "/faq" },
            { label: "Về PTIT", to: "/about" }
        ]
    }
];

const socialLinks = [
    { 
        name: "Facebook", 
        url: "https://facebook.com/ptit.edu.vn",
        color: "hover:bg-blue-600",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
        )
    },
    { 
        name: "YouTube", 
        url: "https://youtube.com/@ptit",
        color: "hover:bg-red-600",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
        )
    },
    { 
        name: "LinkedIn", 
        url: "https://linkedin.com/school/ptit",
        color: "hover:bg-blue-700",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        )
    },
    { 
        name: "Zalo", 
        url: "https://zalo.me/ptit",
        color: "hover:bg-blue-500",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.5c-.85 1.04-2.08 1.98-3.67 2.8-1.59.82-3.18 1.23-4.77 1.23-1.59 0-3.18-.41-4.77-1.23-1.59-.82-2.82-1.76-3.67-2.8-.42-.52-.42-1.26 0-1.78.85-1.04 2.08-1.98 3.67-2.8 1.59-.82 3.18-1.23 4.77-1.23 1.59 0 3.18.41 4.77 1.23 1.59.82 2.82 1.76 3.67 2.8.42.52.42 1.26 0 1.78z"/>
            </svg>
        )
    }
];

function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            alert("Cảm ơn bạn đã đăng ký nhận bản tin!");
            setEmail("");
        }
    };

    return (
        <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white mt-16 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-12 relative z-10">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
                    <div className="space-y-4">
                        <Link to="/" className="inline-flex items-center gap-3 group">
                            <div className="text-2xl font-bold uppercase leading-tight group-hover:text-red-400 transition-colors duration-300">
                                Học viện Công nghệ Bưu chính Viễn thông
                            </div>
                        </Link>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Kết nối cộng đồng học viên và phụ huynh với những thông tin mới nhất về đào tạo,
                            sự kiện và hoạt động của PTIT.
                        </p>
                        <div className="space-y-2 text-sm text-slate-300">
                            <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 group-hover:bg-red-600 transition-colors duration-200">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="font-medium">Cơ sở Hồ Chí Minh</p>
                                    <p>97 Man Thiện, Tăng Nhân Phú, Quận 7, TP. Hồ Chí Minh</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 group-hover:bg-red-600 transition-colors duration-200">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="font-medium">Hotline</p>
                                    <p>(024) 3352 8122</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 group-hover:bg-red-600 transition-colors duration-200">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p>info@ptit.edu.vn</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                                {section.title}
                            </h2>
                            <ul className="space-y-2 text-sm text-slate-300">
                                {section.items.map((item) => (
                                    <li key={`${section.title}-${item.label}`}>
                                        <Link
                                            to={item.to}
                                            className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 transition-all duration-200 hover:bg-slate-800 hover:text-white hover:translate-x-1"
                                        >
                                            <span className="text-red-500">▸</span>
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="space-y-4">
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                            Nhận bản tin PTIT
                        </h2>
                        <p className="text-sm text-slate-300">
                            Đăng ký để nhận thông tin tuyển sinh, sự kiện và hoạt động nổi bật của Học viện.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-105"
                            >
                                Đăng ký ngay
                            </button>
                        </form>
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-all duration-300 hover:scale-110 ${social.color} hover:shadow-lg`}
                                    aria-label={social.name}
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row">
                    <span className="text-center sm:text-left">
                        © {new Date().getFullYear()} Học viện Công nghệ Bưu chính Viễn thông. All rights reserved.
                    </span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors duration-200">Quy định sử dụng</a>
                        <span className="text-slate-600">•</span>
                        <a href="#" className="hover:text-white transition-colors duration-200">Bảo mật</a>
                        <span className="text-slate-600">•</span>
                        <Link to="/faq" className="hover:text-white transition-colors duration-200">Liên hệ</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;