import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-red-700/90 backdrop-blur-lg border-t border-white/20 text-white shadow-inner-top mt-16 overflow-hidden rounded-t-xl md:rounded-t-2xl mx-2">
            <div className="max-w-screen-xl mx-auto p-4 sm:p-6 md:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">

                    {/* Thông tin liên hệ */}
                    <div className="space-y-4 sm:col-span-2 md:col-span-2">
                        <a href="#" className="block transition-opacity duration-300 hover:opacity-80">
              <span className="self-center text-lg sm:text-xl font-bold uppercase block max-w-[200px] sm:max-w-none">
                Học viện Công nghệ Bưu chính Viễn thông
              </span>
                        </a>

                        <ul className="space-y-2 text-sm text-gray-200">
                            <li className="flex items-start p-1.5 rounded-lg transition-colors duration-300 hover:bg-white/5">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5 md:w-10 md:h-10">
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <span>Cơ sở Hà Nội: Km10, Đường Nguyễn Trãi, Q. Hà Đông, Hà Nội</span>
                            </li>
                            <li className="flex items-start p-1.5 rounded-lg transition-colors duration-300 hover:bg-white/5">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5 md:w-10 md:h-10">
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <span>Điện thoại: (024) 3352 8122</span>
                            </li>
                            <li className="flex items-start p-1.5 rounded-lg transition-colors duration-300 hover:bg-white/5">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5 md:w-10 md:h-10">
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <span>Email: info@ptit.edu.vn</span>
                            </li>
                        </ul>
                    </div>

                    {/* Liên kết */}
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Liên kết</h2>
                        <ul className="text-gray-200 space-y-2 text-sm">
                            <li>
                                <a href="#" className="block py-1.5 px-3 rounded-md hover:bg-white/10 transition-colors duration-200">
                                    Trang chủ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 px-3 rounded-md hover:bg-white/10 transition-colors duration-200">
                                    Tuyển sinh
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 px-3 rounded-md hover:bg-white/10 transition-colors duration-200">
                                    Đào tạo
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 px-3 rounded-md hover:bg-white/10 transition-colors duration-200">
                                    Tin tức
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Kết nối */}
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Kết nối</h2>
                        <div className="flex space-x-3">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 md:w-10 md:h-10">
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 md:w-10 md:h-10">
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.016 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.401 2.25 12.016 2.25zm5.454 13.125a.75.75 0 01-.75.75H7.312a.75.75 0 01-.75-.75V8.625a.75.75 0 01.75-.75h8.406a.75.75 0 01.75.75v6.75z" clipRule="evenodd" />
                                    <path d="M10.125 14.625a.375.375 0 100 .75.375.375 0 000-.75z" />
                                </svg>
                                <span className="sr-only">Youtube</span>
                            </a>
                        </div>
                    </div>

                </div>

                <hr className="my-6 border-white/20 sm:mx-auto lg:my-8" />
                <span className="block text-xs sm:text-sm text-gray-200 text-center">
          © 2025 Bản quyền thuộc về
          <a href="#" className="font-semibold text-white transition-opacity duration-300 hover:opacity-80">
            Học viện Công nghệ Bưu chính Viễn thông
          </a>.
        </span>
            </div>
        </footer>
    );
};

export default Footer;