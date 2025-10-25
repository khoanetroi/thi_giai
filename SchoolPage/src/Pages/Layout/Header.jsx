import { useState, useEffect } from 'react';
import logo from "../../assets/logoptithcm.png" 

const NavbarPTIT = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDaoTaoOpen, setIsDaoTaoOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('#dropdownDaoTao') && !event.target.closest('#dropdownDaoTaoButton')) {
                setIsDaoTaoOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="sticky top-0 z-50 w-full px-2 pt-2 md:px-4 md:pt-4">
            <nav className="relative bg-white/90 backdrop-blur-lg border border-gray-100 rounded-lg md:rounded-full shadow-lg max-w-screen-xl mx-auto">
                <div className="flex flex-wrap items-center justify-between mx-auto p-2 md:p-3">

                    <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse pl-1">
                        <img src={logo} className="h-8 md:h-10" alt="PTIT Logo" />
                    </a>

                    <div className="flex items-center md:order-2 space-x-1 rtl:space-x-reverse pr-1 md:pr-2">
                        <a href="#" className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-md text-sm px-3 py-1.5 text-center transition-all duration-300 md:hidden transform hover:scale-105">
                            Xét tuyển
                        </a>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-mega-menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>

                    <div
                        id="navbar-mega-menu"
                        className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto md:order-1`}
                    >
                        <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">

                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-red-600 rounded-md md:rounded-full md:px-4 md:font-semibold" aria-current="page">
                                    Trang chủ
                                </a>
                            </li>

                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-700 rounded-md hover:bg-gray-100 hover:text-red-500 md:rounded-full md:px-4 transition-colors duration-200">
                                    Tuyển sinh
                                </a>
                            </li>

                            <li className="relative">
                                <button
                                    id="dropdownDaoTaoButton"
                                    onClick={() => setIsDaoTaoOpen(!isDaoTaoOpen)}
                                    onMouseEnter={() => setIsDaoTaoOpen(true)}
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded-md hover:bg-gray-100 hover:text-red-500 md:rounded-full md:px-4 transition-colors duration-200 md:w-auto"
                                >
                                    Đào tạo
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>

                                <div
                                    id="dropdownDaoTao"
                                    className={`${isDaoTaoOpen ? 'block' : 'hidden'} absolute z-10 font-normal bg-white/90 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-lg w-auto md:w-[400px] mt-2 border border-gray-100`}
                                    onMouseLeave={() => setIsDaoTaoOpen(false)}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 p-4 text-sm text-gray-700">
                                        <ul className="space-y-2" aria-labelledby="dropdownDaoTaoButton">
                                            <li>
                                                <a href="#" className="block p-2 rounded-lg hover:bg-red-50 transition-colors duration-200 hover:text-red-500">
                                                    <div className="font-semibold">Đại học chính quy</div>
                                                    <div className="text-xs text-gray-500">Chương trình đào tạo kỹ sư, cử nhân</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 rounded-lg hover:bg-red-50 transition-colors duration-200 hover:text-red-500">
                                                    <div className="font-semibold">Sau Đại học</div>
                                                    <div className="text-xs text-gray-500">Các chương trình Thạc sĩ, Tiến sĩ</div>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="space-y-2 mt-2 md:mt-0" aria-labelledby="dropdownDaoTaoButton">
                                            <li>
                                                <a href="#" className="block p-2 rounded-lg hover:bg-red-50 transition-colors duration-200 hover:text-red-500">
                                                    <div className="font-semibold">Liên thông</div>
                                                    <div className="text-xs text-gray-500">Liên thông từ Cao đẳng lên Đại học</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block p-2 rounded-lg hover:bg-red-50 transition-colors duration-200 hover:text-red-500">
                                                    <div className="font-semibold">Đào tạo từ xa</div>
                                                    <div className="text-xs text-gray-500">Học trực tuyến, lấy bằng chính quy</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-700 rounded-md hover:bg-gray-100 hover:text-red-500 md:rounded-full md:px-4 transition-colors duration-200">
                                    Tin tức
                                </a>
                            </li>

                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-700 rounded-md hover:bg-gray-100 hover:text-red-500 md:rounded-full md:px-4 transition-colors duration-200">
                                    Liên hệ
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div className="hidden md:flex items-center md:order-2">
                        <a href="#" className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-full text-sm px-5 py-2.5 transition-all duration-300 transform hover:scale-105">
                            Xét tuyển
                        </a>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default NavbarPTIT;