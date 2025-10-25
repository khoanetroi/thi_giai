import { useState } from 'react';
import LichThi from "./LichThi.jsx";
import Schedule from "./Shedule.jsx";

const studentInfo = {
    id: "B21DCCN123",
    name: "Nguyễn Anh A",
    class: "D22CQPT01-N",
    cohort: "D22",
    major: "Công nghệ đa phương tiện",
};

const scoreBoard = [
    {
        semester: "Kỳ 1 2024-2025",
        subjects: [
            { name: "Cấu trúc dữ liệu", score: 8.5 },
            { name: "Xác suất thống kê", score: 8.0 },
            { name: "Nhập môn AI", score: 8.7 },
        ],
    },
    {
        semester: "Kỳ 2 2024-2025",
        subjects: [
            { name: "Hệ điều hành", score: 8.2 },
            { name: "Mạng máy tính", score: 8.8 },
            { name: "Cơ sở dữ liệu", score: 9.0 },
        ],
    },
];

function StudentStatus() {
    const [activeTab, setActiveTab] = useState('score'); // Mặc định hiển thị bảng điểm

    // Hàm render nội dung dựa vào tab đang chọn
    const renderContent = () => {
        switch (activeTab) {
            case 'score':
                return (
                    <div className="space-y-6">
                        {scoreBoard.map((semester) => (
                            <section
                                key={semester.semester}
                                className="rounded-2xl bg-white p-6 shadow-lg"
                            >
                                <header className="mb-4 flex items-center justify-between">
                                    <h2 className="text-xl font-bold">
                                        {semester.semester}
                                    </h2>
                                    <span className="text-sm font-medium text-red-500">
                                        Điểm TB: {" "}
                                        {(
                                            semester.subjects.reduce((acc, cur) => acc + cur.score, 0) /
                                            semester.subjects.length
                                        ).toFixed(2)}
                                    </span>
                                </header>
                                <table className="w-full table-auto text-left text-sm">
                                    <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="pb-2">Môn học</th>
                                        <th className="pb-2 text-right">Điểm</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                    {semester.subjects.map((subject) => (
                                        <tr key={subject.name}>
                                            <td className="py-2 font-medium">{subject.name}</td>
                                            <td className="py-2 text-right">{subject.score}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </section>
                        ))}
                    </div>
                );
            case 'schedule':
                return <Schedule />;
            case 'exam':
                return <LichThi />;
            case 'tuition':
                return <div className="text-center py-8">Nội dung Học phí đang được cập nhật...</div>;
            case 'achievement':
                return <div className="text-center py-8">Nội dung Thành tích đang được cập nhật...</div>;
            case 'portfolio':
                return <div className="text-center py-8">Nội dung Portfolio đang được cập nhật...</div>;
            case 'activity':
                return <div className="text-center py-8">Nội dung Hoạt động sinh viên đang được cập nhật...</div>;
            default:
                return (
                    <div className="space-y-6">
                        {scoreBoard.map((semester) => (
                            <section
                                key={semester.semester}
                                className="rounded-2xl bg-white p-6 shadow-lg"
                            >
                                <header className="mb-4 flex items-center justify-between">
                                    <h2 className="text-xl font-bold">
                                        {semester.semester}
                                    </h2>
                                    <span className="text-sm font-medium text-red-500">
                                        Điểm TB: {" "}
                                        {(
                                            semester.subjects.reduce((acc, cur) => acc + cur.score, 0) /
                                            semester.subjects.length
                                        ).toFixed(2)}
                                    </span>
                                </header>
                                <table className="w-full table-auto text-left text-sm">
                                    <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="pb-2">Môn học</th>
                                        <th className="pb-2 text-right">Điểm</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                    {semester.subjects.map((subject) => (
                                        <tr key={subject.name}>
                                            <td className="py-2 font-medium">{subject.name}</td>
                                            <td className="py-2 text-right">{subject.score}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </section>
                        ))}
                    </div>
                );
        }
    };

    return (
        <section className="py-16">
            <div className="mx-auto flex max-w-7xl gap-10 px-4 lg:flex-row lg:items-start">
                {/* Thông tin sinh viên */}
                <div className="w-full rounded-2xl bg-white p-6 shadow-lg lg:w-64">
                    <h2 className="text-lg font-bold">Thông tin sinh viên</h2>
                    <dl className="mt-4 space-y-3 text-sm">
                        <div className="flex justify-between">
                            <dt>Mã SV</dt>
                            <dd className="font-bold">{studentInfo.id}</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt>Họ và tên</dt>
                            <dd className="font-bold">{studentInfo.name}</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt>Lớp</dt>
                            <dd className="font-bold">{studentInfo.class}</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt>Khóa</dt>
                            <dd className="font-bold">{studentInfo.cohort}</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt>Ngành</dt>
                            <dd className="font-bold">{studentInfo.major}</dd>
                        </div>
                    </dl>
                </div>

                {/* Nội dung chính */}
                <main className="w-full flex-1 space-y-8">
                    <header>
                        <h1 className="text-3xl font-bold">
                            {activeTab === 'score' && 'Bảng điểm tổng quan'}
                            {activeTab === 'schedule' && 'Thời khóa biểu'}
                            {activeTab === 'exam' && 'Lịch thi'}
                            {activeTab === 'tuition' && 'Học phí'}
                            {activeTab === 'achievement' && 'Thành tích'}
                            {activeTab === 'portfolio' && 'Portfolio'}
                            {activeTab === 'activity' && 'Hoạt động sinh viên'}
                        </h1>
                        <p className="mt-2 text-sm">
                            {activeTab === 'score' && 'Số liệu cập nhật đến tháng 10/2025'}
                            {activeTab === 'schedule' && 'Lịch học học kỳ I - 2024'}
                            {activeTab === 'exam' && 'Lịch thi học kỳ I - 2024'}
                            {activeTab !== 'score' && activeTab !== 'schedule' && activeTab !== 'exam' && 'Thông tin chi tiết'}
                        </p>
                    </header>

                    {renderContent()}
                </main>

                {/* Menu quản lý thông tin */}
                <div className="w-full rounded-2xl bg-red-100 p-6 shadow-lg lg:w-64">
                    <h2 className="text-lg font-semibold">Quản lý thông tin</h2>
                    <div className="mt-4 space-y-2 text-sm">
                        <button
                            onClick={() => setActiveTab('score')}
                            className={`w-full text-left font-bold hover:text-red-500 transition-colors ${
                                activeTab === 'score' ? 'text-red-600' : 'text-gray-700'
                            }`}
                        >
                            Bảng điểm
                        </button>
                        <button
                            onClick={() => setActiveTab('schedule')}
                            className={`w-full text-left font-bold hover:text-red-500 transition-colors ${
                                activeTab === 'schedule' ? 'text-red-600' : 'text-gray-700'
                            }`}
                        >
                            Thời khóa biểu
                        </button>
                        <button
                            onClick={() => setActiveTab('exam')}
                            className={`w-full text-left font-bold hover:text-red-500 transition-colors ${
                                activeTab === 'exam' ? 'text-red-600' : 'text-gray-700'
                            }`}
                        >
                            Lịch thi
                        </button>
                        <button
                            onClick={() => setActiveTab('tuition')}
                            className={`w-full text-left font-bold hover:text-red-500 transition-colors ${
                                activeTab === 'tuition' ? 'text-red-600' : 'text-gray-700'
                            }`}
                        >
                            Học phí
                        </button>
                        <button
                            onClick={() => setActiveTab('achievement')}
                            className={`w-full text-left font-bold hover:text-red-500 transition-colors ${
                                activeTab === 'achievement' ? 'text-red-600' : 'text-gray-700'
                            }`}
                        >
                            Thành tích
                        </button>
                        <button
                            onClick={() => setActiveTab('portfolio')}
                            className={`w-full text-left font-bold hover:text-red-500 transition-colors ${
                                activeTab === 'portfolio' ? 'text-red-600' : 'text-gray-700'
                            }`}
                        >
                            Portfolio
                        </button>
                        <button
                            onClick={() => setActiveTab('activity')}
                            className={`w-full text-left font-bold hover:text-red-500 transition-colors ${
                                activeTab === 'activity' ? 'text-red-600' : 'text-gray-700'
                            }`}
                        >
                            Hoạt động của sinh viên
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudentStatus;