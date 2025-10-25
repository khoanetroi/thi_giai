import Card from "../Components/Card";
import scholarshipImg1 from "../assets/HoatDongIMG/hinh1.jpg";
import scholarshipImg2 from "../assets/HoatDongIMG/hinh2.jpg";
import scholarshipImg3 from "../assets/HoatDongIMG/hinh3.jpg";
import eventImg1 from "../assets/HoatDongIMG/hinh4.jpg";
import eventImg2 from "../assets/HoatDongIMG/hinh5.jpg";
import eventImg3 from "../assets/HoatDongIMG/hinh6.jpg";
import eventImg4 from "../assets/HoatDongIMG/hinh7.jpg";
import eventImg5 from "../assets/HoatDongIMG/hinh8.jpg";
import eventImg6 from "../assets/HoatDongIMG/hinh9.jpg";

function HoatDong() {
    return (
        <section className=" py-16 text-slate-600">
            <div className="mx-auto max-w-7xl px-4 lg:px-0">
                <header className="mb-12 text-center">
                    <p className="text-lg font-semibold uppercase text-red-500">
                        Hoạt động nổi bật
                    </p>
                    <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                        Học bổng sắp tới hỗ trợ sinh viên
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed">
                        Cập nhật những chương trình hỗ trợ, sự kiện và cơ hội học bổng mới nhất dành cho sinh viên PTIT.
                    </p>
                </header>

                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
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
                </div>

                
                <header className="mb-12 text-center mt-15">
                    <p className="text-lg font-semibold uppercase text-red-500">
                        Sự kiện sắp diễn ra
                    </p>
                    <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                        Cập nhật sự kiện sắp diễn ra 
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed">
                        Những hoạt động sôi nổi xung quanh môi trường học viện, từ các sự kiện thể thao, văn hóa, nghệ thuật đến các hoạt động xã hội, tình nguyện.
                    </p>
                </header>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                    <Card
                        imageSrc={eventImg4}
                        category="Sự kiện"
                        date="15/10/2025"
                        title="Tuần lễ định hướng tân sinh viên 2025"
                        description="Các hoạt động giao lưu, hướng nghiệp và hỗ trợ học bổng dành cho sinh viên khóa mới."
                    />
                    <Card
                        imageSrc={eventImg5}
                        category="Sự kiện"
                        date="15/10/2025"
                        title="Tuần lễ định hướng tân sinh viên 2025"
                        description="Các hoạt động giao lưu, hướng nghiệp và hỗ trợ học bổng dành cho sinh viên khóa mới."
                    />
                    <Card
                        imageSrc={eventImg6}
                        category="Sự kiện"
                        date="15/10/2025"
                        title="Tuần lễ định hướng tân sinh viên 2025"
                        description="Các hoạt động giao lưu, hướng nghiệp và hỗ trợ học bổng dành cho sinh viên khóa mới."
                    />
                </div>

            </div>

            
        </section>
    );
}

export default HoatDong;
