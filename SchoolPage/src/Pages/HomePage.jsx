import slide1 from "../assets/HomePageAssets/slide1.jpg"
import slide2 from "../assets/HomePageAssets/slide2.jpg"
import slide3 from "../assets/HomePageAssets/slide3.jpg"
import slide4 from "../assets/HomePageAssets/slide4.jpg"
import slide5 from "../assets/HomePageAssets/slide5.jpg"
import logo from "../assets/HomePageAssets/logo.webp"
import bg_contact from "../assets/HomePageAssets/bg_contact.jpg"
import { initFlowbite } from 'flowbite';
import { useEffect } from "react";
import Card from "../Components/Card";
import scholarshipImg1 from "../assets/HoatDongIMG/hinh1.jpg";
import scholarshipImg2 from "../assets/HoatDongIMG/hinh2.jpg";
import scholarshipImg3 from "../assets/HoatDongIMG/hinh3.jpg";
import eventImg1 from "../assets/HoatDongIMG/hinh4.jpg";
import eventImg2 from "../assets/HoatDongIMG/hinh5.jpg";
import eventImg3 from "../assets/HoatDongIMG/hinh6.jpg";
import tip_1 from "../assets/HomePageAssets/tip_1.jpg"
import tip_2 from "../assets/HomePageAssets/tip_2.jpg"

function HomePage() {
    useEffect(() => {
        initFlowbite();
    }, []); 

    return (
       <>
            {/* Banner */}
            <div id="default-carousel" className="relative w-full my-5" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                <div className=" duration-500 ease-in-out" data-carousel-item="">
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
                <div className=" duration-500 ease-in-out" data-carousel-item="">
                <img
                    src={slide2}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                />
                <div class="absolute inset-0 bg-linear-to-r from-black/70 to-black/20"></div>
                <div class="absolute inset-0 flex flex-col items-start justify-center text-left text-white p-4 sm:p-6 md:p-16 banner-caption transition-all duration-500 ease-out group-hover:-translate-y-2">
                    <h2 class="text-xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 uppercase">Tình hình học tập</h2>
                    <p class="text-xs sm:text-sm md:text-lg mb-3 sm:mb-5 max-w-lg">Giúp phụ huynh nắm bắt tình hình học tập, rèn luyện của sinh viên. </p>
                    <a href="#" class="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-transparent border border-white rounded-md md:rounded-full hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        Xem thông tin học tập và rèn luyện
                    </a>
                </div>
                </div>
                {/* Item 3 */}
                <div className=" duration-500 ease-in-out" data-carousel-item="">
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
                <div className=" duration-500 ease-in-out" data-carousel-item="">
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
                <div className=" duration-500 ease-in-out" data-carousel-item="">
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

            {/* Info về trường */}
            <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto my-10 p-5 gap-2">
                <div className="mx-auto my-auto hidden md:block md:col-span-1">

                    <figure class="relative max-w-sm transition-all duration-500 cursor-pointer filter grayscale hover:grayscale-0">
                        <a href="#">
                            <img class="rounded-lg" src={logo} alt="image description"/>
                        </a>
                    </figure>


                </div>

                <div className="mx-auto col-span-1 md:col-span-2">            
                    <div className="my-3 transition duration-300 transform hover:shadow-xl hover:-translate-y-1 p-5" >
                        <h1 className="text-sm md:text-xl text-left font-bold text-red-500">Học viện công nghệ bưu chính viễn thông </h1>
                        <h3 className="text-lg md:text-2xl text-left text-[#051a53] font-bold">Cơ sở Giáo dục Đại học trọng điểm Quốc gia về kỹ thuật, công nghệ</h3>
                    </div>
                    <p className="text-justify rounded-xl hover:bg-gray-300 p-2 duration-600">Học viện Công nghệ Bưu chính Viễn thông là 1 trong 7 trường Đại học đào tạo nguồn nhân lực An toàn thông tin trọng điểm Quốc gia từ năm 2013; 1 trong 5 trường đại học thuộc liên minh các cơ sở giáo dục đào tạo ngành Vi mạch bán dẫn từ năm 2023. Là đơn vị giáo dục duy nhất của Việt Nam nhận giải thưởng Công nghệ thông tin uy tín ASOCIO 2024 hạng mục Giáo dục số, được tổ chức SCImago bình chọn giữ vị trí số 1 về tiêu chí đổi mới sáng tạo trong bảng xếp hạng các cơ sở nghiên cứu khoa học tại Việt Nam. Trong lĩnh vực khoa học máy tính, Học viện cũng là Cơ sở giáo dục Đại học duy nhất tại Việt Nam được xếp hạng trong bảng xếp hạng về CS Ranking Châu Á. </p>
                </div>
                
                
            </div>

            {/* Info contact */}
            <div
                className="relative w-full h-120 bg-cover bg-center  p-8 my-[30px] overflow-hidden  flex  flex-col justify-center  items-end" 
                style={{ 
                    backgroundImage: `url(${bg_contact})` 
                }}
            >

                
                <div className="absolute inset-0 bg-linear-to-r from-white/10 to-white/100"></div>

               
                <div className="w-full md:w-1/2 lg:w-2/5 p-6 z-10 space-y-4 bg-white border border-red-600 md:bg-transparent md:border-none hover:shadow-2xl duration-500">
                    {/* TIÊU ĐỀ CHÍNH */}
                    <h2 className="text-3xl font-extrabold text-red-600 mb-4 border-b pb-2">
                        THÔNG TIN LIÊN HỆ
                    </h2>

                    {/* MỤC 1: ĐỊA CHỈ */}
                    <div className="space-y-1">
                        <h3 className="text-lg font-bold text-[#051a53]">
                            1. ĐỊA CHỈ TẠI TP. HỒ CHÍ MINH
                        </h3>
                        <p className="text-gray-700 ml-3">
                            <strong className="font-semibold">Trụ sở chính:</strong> 11 Nguyễn Đình Chiểu, phường Sài Gòn
                        </p>
                        <p className="text-gray-700 ml-3">
                            <strong className="font-semibold">Cơ sở đào tạo:</strong> 97 Man Thiện, phường Tăng Nhơn Phú
                        </p>
                    </div>

                     {/* MỤC 2: ĐỊA CHỈ */}
                    <div className="space-y-1">
                        <h3 className="text-lg font-bold text-[#051a53]">
                            2. Thông tin liên hệ nhà trường
                        </h3>
                        <p className="text-gray-700 ml-3">
                            <strong className="font-semibold">Email liên hệ:</strong> hvbcvthcm@ptithcm.edu.vn
                        </p>
                        <p className="text-gray-700 ml-3">
                            <strong className="font-semibold">SĐT:</strong> (028) 38.295.258
                        </p>
                        <p className="text-gray-700 ml-3">
                            <strong className="font-semibold">SĐT:</strong>  (028) 39.105.510
                        </p>
                    </div>
                </div>
                
                
                
            </div>

            {/* Tin tức hoạt động sinh viên */}
            <div className="container mx-auto my-15 p-5">
                <h2 className="text-3xl font-extrabold text-red-600 mb-5 border-b pb-2 ">
                    Hoạt động - tin tức
                </h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
                    <Card
                        imageSrc={scholarshipImg1}
                        category="Tin tức"
                        date="24/10/2025"
                        title="PTIT tổ chức Lễ tốt nghiệp cho gần 800 Thạc sỹ, Cử nhân"
                        description="Cùng nhìn lại những khoảnh khắc ấn tượng trong buổi lễ tốt nghiệp năm 2025 đợt 1."
                    />
                    <Card
                        imageSrc={scholarshipImg2}
                        category="Tin tức"
                        date="20/10/2025"
                        title="Câu lạc bộ học thuật ra mắt chuỗi hội thảo công nghệ"
                        description="Sinh viên được cập nhật xu hướng AI, Cloud và An toàn thông tin qua các phiên chuyên đề."
                    />
                    <Card
                        imageSrc={scholarshipImg3}
                        category="Sự kiện"
                        date="15/10/2025"
                        title="Tuần lễ định hướng tân sinh viên 2025"
                        description="Các hoạt động giao lưu, hướng nghiệp và hỗ trợ học bổng dành cho sinh viên khóa mới."
                    />
                    <Card
                        imageSrc={eventImg1}
                        category="Sự kiện"
                        date="24/10/2025"
                        title="PTIT tổ chức Lễ tốt nghiệp cho gần 800 Thạc sỹ, Cử nhân"
                        description="Cùng nhìn lại những khoảnh khắc ấn tượng trong buổi lễ tốt nghiệp năm 2025 đợt 1."
                    />
                    <Card
                        imageSrc={eventImg2}
                        category="Sự kiện"
                        date="20/10/2025"
                        title="Câu lạc bộ học thuật ra mắt chuỗi hội thảo công nghệ"
                        description="Sinh viên được cập nhật xu hướng AI, Cloud và An toàn thông tin qua các phiên chuyên đề."
                    />
                    <Card
                        imageSrc={eventImg3}
                        category="Sự kiện"
                        date="15/10/2025"
                        title="Tuần lễ định hướng tân sinh viên 2025"
                        description="Các hoạt động giao lưu, hướng nghiệp và hỗ trợ học bổng dành cho sinh viên khóa mới."
                    />
                </div>

            </div>
            
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 my-15 gapy-10 gap-y-10">
                <div className="col-span-1 md:col-span-7 bg-red-700 p-5 rounded-2xl flex justify-center items-center">
                    <div className="p-5">
                        <h3 className="md:text-2xl font-extrabold text-white mb-3 text-left">
                        Cẩm nang dành cho Phụ huynh và Gia đình sinh viên PTITHCM
                        </h3>
                        
                        <p className="text-gray-200 text-lg mb-6 text-justify">
                            Nắm bắt nhanh chóng các thông tin, chương trình, và dịch vụ hỗ trợ sinh viên bên cạnh những tài nguyên hữu ích dành cho phụ huynh.
                        </p>
                        
                        <a href="#" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white hover: bg-blue-950 rounded-lg shadow-md hover:bg-blue-500 transition duration-300">
                            Nhận ngay
                        </a>
                    </div>
                </div>
                <div className="hidden md:block md:col-span-5 p-5 ">
                    <img src={tip_1} className="rounded-2xl"/>
                </div>
                <div className="hidden md:block md:col-span-5 p-5">
                    <img src={tip_2} className="rounded-2xl"/>
                </div>
                <div className="col-span-1 md:col-span-7 bg-blue-950 p-5 rounded-2xl flex justify-center items-center">
                    <div className="p-5">
                        <h3 className="md:text-2xl font-extrabold text-white mb-3 text-left">
                        Đăng ký nhận bản tin và thông tin sự kiện
                        </h3>
                        
                        <p className="text-gray-200 text-lg mb-6 text-justify">
                            Cập nhật tin tức nổi bật tại PTIT và thông tin, sự kiện dành cho phụ huynh và gia đình sinh viên. 
                        </p>
                        
                        <a href="#" className="inline-flex items-center px-6 py-3 text-sm font-medium  text-white hover: bg-red-700 rounded-lg shadow-md hover:bg-red-400 transition duration-300">
                            Đăng ký ngay
                        </a>
                    </div>
                </div>

            </div>
       </>
    );
}

export default HomePage;