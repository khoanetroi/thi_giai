import Header from "./Layout/Header"
import Footer from "./Layout/footer";
import slide1 from "../assets/HomePageAssets/slide1.jpg"
import slide2 from "../assets/HomePageAssets/slide2.jpg"
import slide3 from "../assets/HomePageAssets/slide3.jpg"
import slide4 from "../assets/HomePageAssets/slide4.jpg"
import slide5 from "../assets/HomePageAssets/slide5.jpg"
import { initFlowbite } from 'flowbite';
import { useEffect } from "react";

function HomePage() {
    useEffect(() => {
        initFlowbite();
    }, []); 

    return (
       <>
            <div id="default-carousel" className="relative w-full mt-5" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                <div className=" duration-700 ease-in-out" data-carousel-item="">
                <img
                    src={slide1}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                />
                <div class="absolute inset-0 bg-linear-to-r from-black/70 to-black/20"></div>
                <div class="absolute inset-0 flex flex-col items-start justify-center text-left text-white p-4 sm:p-6 md:p-16 banner-caption transition-all duration-500 ease-out group-hover:-translate-y-2">
                    <h2 class="text-xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 uppercase">Kiến Tạo Tương Lai Số</h2>
                    <p class="text-xs sm:text-sm md:text-lg mb-3 sm:mb-5 max-w-lg">Học viện Công nghệ Bưu chính Viễn thông - Tiên phong đổi mới, dẫn dắt kỷ nguyên số.</p>
                    <a href="#" class="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-red-600 rounded-md md:rounded-full hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        Khám phá ngay
                    </a>
                </div>
                </div>
                {/* Item 2 */}
                <div className=" duration-700 ease-in-out" data-carousel-item="">
                <img
                    src={slide2}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                />
                <div class="absolute inset-0 bg-linear-to-r from-black/70 to-black/20"></div>
                <div class="absolute inset-0 flex flex-col items-start justify-center text-left text-white p-4 sm:p-6 md:p-16 banner-caption transition-all duration-500 ease-out group-hover:-translate-y-2">
                    <h2 class="text-xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 uppercase">Tuyển Sinh 2025</h2>
                    <p class="text-xs sm:text-sm md:text-lg mb-3 sm:mb-5 max-w-lg">Gia nhập cộng đồng PTIT-ers năng động và sáng tạo. Sẵn sàng chinh phục công nghệ.</p>
                    <a href="#" class="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-transparent border border-white rounded-md md:rounded-full hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        Xem thông tin tuyển sinh
                    </a>
                </div>
                </div>
                {/* Item 3 */}
                <div className=" duration-700 ease-in-out" data-carousel-item="">
                <img
                    src={slide3}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                />
                <div class="absolute inset-0 bg-linear-to-l from-black/70 to-black/20"></div>
                <div class="absolute inset-0 flex flex-col items-end justify-center text-right text-white p-4 sm:p-6 md:p-16 banner-caption transition-all duration-500 ease-out group-hover:-translate-y-2">
                    <h2 class="text-xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 uppercase">Đào tạo đa ngành</h2>
                    <p class="text-xs sm:text-sm md:text-lg mb-3 sm:mb-5 max-w-lg">Tập trung vào các ngành học cốt lõi: AI, Vi mạch, An toàn thông tin, Dữ liệu lớn...</p>
                    <a href="#" class="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-red-600 rounded-md md:rounded-full hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        Xem các ngành học
                    </a>
                </div>
                </div>
                {/* Item 4 */}
                <div className=" duration-700 ease-in-out" data-carousel-item="">
                <img
                    src={slide4}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                />
                <div class="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
                <div class="absolute inset-0 flex flex-col items-start justify-end text-left text-white p-4 sm:p-6 md:p-16 banner-caption transition-all duration-500 ease-out group-hover:-translate-y-2">
                    <h2 class="text-xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 uppercase">Sôi động học đường</h2>
                    <p class="text-xs sm:text-sm md:text-lg mb-3 sm:mb-5 max-w-lg">Cập nhật tin tức, sự kiện và các thành tựu nghiên cứu khoa học mới nhất.</p>
                    <a href="#" class="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-transparent border border-white rounded-md md:rounded-full hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        Đọc tin tức
                    </a>
                </div>
                </div>
                {/* Item 5 */}
                <div className=" duration-700 ease-in-out" data-carousel-item="">
                <img
                    src={slide5}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                />
                <div class="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
                <div class="absolute inset-0 flex flex-col items-end justify-end text-right text-white p-4 sm:p-6 md:p-16 banner-caption transition-all duration-500 ease-out group-hover:-translate-y-2">
                    <h2 class="text-xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 uppercase">Hợp Tác & Kết Nối</h2>
                    <p class="text-xs sm:text-sm md:text-lg mb-3 sm:mb-5 max-w-lg">Mở rộng mạng lưới với doanh nghiệp và các đối tác chiến lược trong và ngoài nước.</p>
                    <a href="#" class="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-red-600 rounded-md md:rounded-full hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        Liên hệ ngay
                    </a>
                </div>
                </div>
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to={0}
                />
                <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to={1}
                />
                <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to={2}
                />
                <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to={3}
                />
                <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to={4}
                />
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev=""
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1 1 5l4 4"
                    />
                </svg>
                <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next=""
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                    />
                </svg>
                <span className="sr-only">Next</span>
                </span>
            </button>
            </div>


       </>
    );
}

export default HomePage;