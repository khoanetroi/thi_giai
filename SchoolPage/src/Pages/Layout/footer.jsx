import { Link } from "react-router-dom";

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
        title: "Hỗ trợ",
        items: [
            { label: "Tuyển sinh", to: "/shedule" },
            { label: "Lịch thi", to: "/exam" },
            { label: "Tình trạng sinh viên", to: "/student" },
            { label: "Liên hệ", to: "/faq" }
        ]
    }
];

const socialLinks = [
    { name: "Facebook", icon: (
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
    ) },
    { name: "YouTube", icon: (
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.016 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.401 2.25 12.016 2.25zm5.454 13.125a.75.75 0 01-.75.75H7.312a.75.75 0 01-.75-.75V8.625a.75.75 0 01.75-.75h8.406a.75.75 0 01.75.75v6.75z" clipRule="evenodd" />
            <path d="M10.125 14.625a.375.375 0 100 .75.375.375 0 000-.75z" />
        </svg>
    ) }
];

function Footer() {
    return (
        <footer className="bg-slate-900 text-white mt-16">
            <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    <div className="space-y-4">
                        <Link to="/" className="inline-flex items-center gap-3">
                            <div className="text-2xl font-bold uppercase leading-tight">
                                Học viện Công nghệ Bưu chính Viễn thông
                            </div>
                        </Link>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Kết nối cộng đồng học viên và phụ huynh với những thông tin mới nhất về đào tạo,
                            sự kiện và hoạt động của PTIT.
                        </p>
                        <div className="space-y-2 text-sm text-slate-300">
                            <div className="flex items-start gap-3">
                                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="font-medium">Cơ sở Hà Nội</p>
                                    <p>Km10, Đường Nguyễn Trãi, Q. Hà Đông</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="font-medium">Hotline</p>
                                    <p>(024) 3352 8122</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800">
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
                                            className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-200 hover:bg-slate-800 hover:text-white"
                                        >
                                            <span>•</span>
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
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-500"
                            >
                                Đăng ký
                            </button>
                        </form>
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-white transition-transform duration-200 hover:scale-110 hover:bg-red-500"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row">
                    <span>
                        {new Date().getFullYear()} Học viện Công nghệ Bưu chính Viễn thông. All rights reserved.
                    </span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">Quy định sử dụng</a>
                        <a href="#" className="hover:text-white">Bảo mật</a>
                        <a href="#" className="hover:text-white">Liên hệ</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;