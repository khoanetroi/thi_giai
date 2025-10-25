import { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logoptithcm.png" 

const NavbarPTIT = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSinhVienOpen, setIsSinhVienOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('#dropdownSinhVien') && !event.target.closest('#dropdownSinhVienButton')) {
                setIsSinhVienOpen(false);
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

                    <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse pl-1">
                        <img src={logo} className="h-8 md:h-10" alt="PTIT Logo" />
                    </Link>

                    <div className="flex items-center md:order-2 space-x-1 rtl:space-x-reverse pr-1 md:pr-2">
                        <Link to="/Shedule" className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-md text-sm px-3 py-1.5 text-center transition-all duration-300 md:hidden transform hover:scale-105">
                            Đăng Ký
                        </Link>

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
                                <NavLink to="/" end className={({ isActive }) => `block py-2 px-3 rounded-md md:rounded-full md:px-4 md:font-semibold ${isActive ? 'text-white bg-red-600' : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'}`}>
                                    Trang chủ
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/hoat-dong" className={({ isActive }) => `block py-2 px-3 rounded-md md:rounded-full md:px-4 transition-colors duration-200 ${isActive ? 'text-white bg-red-600' : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'}`}>
                                    Hoạt động
                                </NavLink>
                            </li>

                            <li className="relative">
                                <button
                                    id="dropdownSinhVienButton"
                                    onClick={() => setIsSinhVienOpen(!isSinhVienOpen)}
                                    onMouseEnter={() => setIsSinhVienOpen(true)}
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded-md hover:bg-gray-100 hover:text-red-500 md:rounded-full md:px-4 transition-colors duration-200 md:w-auto"
                                >
                                    Thông tin sinh viên
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>

                                <div
                                    id="dropdownSinhVien"
                                    className={`${isSinhVienOpen ? 'block' : 'hidden'} absolute z-10 font-normal bg-white/90 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-lg w-auto md:w-[400px] mt-2 border border-gray-100`}
                                    onMouseLeave={() => setIsSinhVienOpen(false)}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 p-4 text-sm text-gray-700">
                                        <ul className="space-y-2" aria-labelledby="dropdownDaoTaoButton">
                                            <li>
                                                <NavLink to="/Shedule" className={({ isActive }) => `block p-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-red-100 text-red-600' : 'hover:bg-red-50 hover:text-red-500'}`}>
                                                    <div className="font-semibold">Thời khóa biểu</div>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Exam" className={({ isActive }) => `block p-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-red-100 text-red-600' : 'hover:bg-red-50 hover:text-red-500'}`}>
                                                    <div className="font-semibold">Lịch thi</div>
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <ul className="space-y-2 mt-2 md:mt-0" aria-labelledby="dropdownDaoTaoButton">
                                            <li>
                                                <NavLink to="/student" className={({ isActive }) => `block p-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-red-100 text-red-600' : 'hover:bg-red-50 hover:text-red-500'}`}>
                                                    <div className="font-semibold">Bảng điểm</div>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/about" className={({ isActive }) => `block p-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-red-100 text-red-600' : 'hover:bg-red-50 hover:text-red-500'}`}>
                                                    <div className="font-semibold">Về Khoa</div>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <NavLink to="/information-full" className={({ isActive }) => `block py-2 px-3 rounded-md md:rounded-full md:px-4 transition-colors duration-200 ${isActive ? 'text-white bg-red-600' : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'}`}>
                                    Tin tức
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/faq" className={({ isActive }) => `block py-2 px-3 rounded-md md:rounded-full md:px-4 transition-colors duration-200 ${isActive ? 'text-white bg-red-600' : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'}`}>
                                    Liên hệ
                                </NavLink>
                            </li>
                        </ul>
                    </div>


                    <div className="hidden md:flex items-center md:order-2">
                        <Link to="/#" className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-full text-sm px-5 py-2.5 transition-all duration-300 transform hover:scale-105">
                            Đăng Ký
                        </Link>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default NavbarPTIT;