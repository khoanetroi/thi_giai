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
    const [activeTab, setActiveTab] = useState('score');

    const renderContent = () => {
        switch (activeTab) {
            case 'score':
                return (
                    <div className="space-y-4 sm:space-y-6">
                        {scoreBoard.map((semester) => (
                            <section
                                key={semester.semester}
                                className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-lg"
                            >
                                <header className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <h2 className="text-lg sm:text-xl font-bold">
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
                                <div className="overflow-x-auto">
                                    <table className="w-full table-auto text-left text-xs sm:text-sm">
                                        <thead>
                                        <tr className="border-b border-slate-200">
                                            <th className="pb-2 pr-4">Môn học</th>
                                            <th className="pb-2 text-right">Điểm</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                        {semester.subjects.map((subject) => (
                                            <tr key={subject.name}>
                                                <td className="py-2 font-medium pr-4">{subject.name}</td>
                                                <td className="py-2 text-right">{subject.score}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        ))}
                    </div>
                );
            case 'schedule':
                return <Schedule />;
            case 'exam':
                return <LichThi />;
            case 'tuition':
                return <div className="text-center py-8 text-gray-500">Nội dung Học phí đang được cập nhật...</div>;
            case 'achievement':
                return <div className="text-center py-8 text-gray-500">Nội dung Thành tích đang được cập nhật...</div>;
            case 'portfolio':
                return <div className="text-center py-8 text-gray-500">Nội dung Portfolio đang được cập nhật...</div>;
            case 'activity':
                return <div className="text-center py-8 text-gray-500">Nội dung Hoạt động sinh viên đang được cập nhật...</div>;
            default:
                return (
                    <div className="space-y-4 sm:space-y-6">
                        {scoreBoard.map((semester) => (
                            <section
                                key={semester.semester}
                                className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-lg"
                            >
                                <header className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <h2 className="text-lg sm:text-xl font-bold">
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
                                <div className="overflow-x-auto">
                                    <table className="w-full table-auto text-left text-xs sm:text-sm">
                                        <thead>
                                        <tr className="border-b border-slate-200">
                                            <th className="pb-2 pr-4">Môn học</th>
                                            <th className="pb-2 text-right">Điểm</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                        {semester.subjects.map((subject) => (
                                            <tr key={subject.name}>
                                                <td className="py-2 font-medium pr-4">{subject.name}</td>
                                                <td className="py-2 text-right">{subject.score}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        ))}
                    </div>
                );
        }
    };

    return (
        <section className="py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Mobile Menu - Hiển thị trên mobile */}
                <div className="lg:hidden mb-6">
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Quản lý thông tin</h2>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <button
                                onClick={() => setActiveTab('score')}
                                className={`p-3 rounded-lg text-center font-bold transition-colors ${
                                    activeTab === 'score'
                                        ? 'bg-red-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Bảng điểm
                            </button>
                            <button
                                onClick={() => setActiveTab('schedule')}
                                className={`p-3 rounded-lg text-center font-bold transition-colors ${
                                    activeTab === 'schedule'
                                        ? 'bg-red-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                TKB
                            </button>
                            <button
                                onClick={() => setActiveTab('exam')}
                                className={`p-3 rounded-lg text-center font-bold transition-colors ${
                                    activeTab === 'exam'
                                        ? 'bg-red-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Lịch thi
                            </button>
                            <button
                                onClick={() => setActiveTab('tuition')}
                                className={`p-3 rounded-lg text-center font-bold transition-colors ${
                                    activeTab === 'tuition'
                                        ? 'bg-red-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Học phí
                            </button>
                            <button
                                onClick={() => setActiveTab('achievement')}
                                className={`p-3 rounded-lg text-center font-bold transition-colors ${
                                    activeTab === 'achievement'
                                        ? 'bg-red-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Thành tích
                            </button>
                            <button
                                onClick={() => setActiveTab('portfolio')}
                                className={`p-3 rounded-lg text-center font-bold transition-colors ${
                                    activeTab === 'portfolio'
                                        ? 'bg-red-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Portfolio
                            </button>
                            <button
                                onClick={() => setActiveTab('activity')}
                                className={`p-3 rounded-lg text-center font-bold transition-colors ${
                                    activeTab === 'activity'
                                        ? 'bg-red-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Hoạt động sinh viên
                            </button>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    <div className={`rounded-2xl bg-white p-4 sm:p-6 shadow-lg lg:w-64 ${
                        activeTab !== 'score' ? 'hidden lg:block' : ''
                    }`}>
                        <h2 className="text-lg font-bold mb-4">Thông tin sinh viên</h2>
                        <dl className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Mã SV</dt>
                                <dd className="font-bold text-gray-800">{studentInfo.id}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Họ và tên</dt>
                                <dd className="font-bold text-gray-800">{studentInfo.name}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Lớp</dt>
                                <dd className="font-bold text-gray-800">{studentInfo.class}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Khóa</dt>
                                <dd className="font-bold text-gray-800">{studentInfo.cohort}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Ngành</dt>
                                <dd className="font-bold text-gray-800">{studentInfo.major}</dd>
                            </div>
                        </dl>
                    </div>


                    <main className="flex-1 space-y-6 sm:space-y-8">
                        <header className="text-center sm:text-left">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                                {activeTab === 'score' }
                                {activeTab === 'schedule' && 'Thời khóa biểu'}
                                {activeTab === 'exam' && 'Lịch thi'}
                                {activeTab === 'tuition' && 'Học phí'}
                                {activeTab === 'achievement' && 'Thành tích'}
                                {activeTab === 'portfolio' && 'Portfolio'}
                                {activeTab === 'activity' && 'Hoạt động sinh viên'}
                            </h1>
                            <p className="mt-2 text-sm text-gray-600">
                                {activeTab === 'score'}
                                {activeTab === 'schedule'}
                                {activeTab === 'exam' }
                                {activeTab === 'score' }
                                {activeTab === 'schedule'}
                                {activeTab === 'exam'}
                            </p>
                        </header>

                        {renderContent()}
                    </main>

                    <div className="hidden lg:block w-full rounded-2xl bg-red-50 p-6 shadow-lg lg:w-64">
                        <h2 className="text-lg font-semibold mb-4">Quản lý thông tin</h2>
                        <div className="space-y-3 text-sm">
                            <button
                                onClick={() => setActiveTab('score')}
                                className={`w-full text-left p-3 rounded-lg font-bold transition-colors ${
                                    activeTab === 'score'
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-700 hover:bg-red-100 hover:text-red-600'
                                }`}
                            >
                                Bảng điểm
                            </button>
                            <button
                                onClick={() => setActiveTab('schedule')}
                                className={`w-full text-left p-3 rounded-lg font-bold transition-colors ${
                                    activeTab === 'schedule'
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-700 hover:bg-red-100 hover:text-red-600'
                                }`}
                            >
                                Thời khóa biểu
                            </button>
                            <button
                                onClick={() => setActiveTab('exam')}
                                className={`w-full text-left p-3 rounded-lg font-bold transition-colors ${
                                    activeTab === 'exam'
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-700 hover:bg-red-100 hover:text-red-600'
                                }`}
                            >
                                Lịch thi
                            </button>
                            <button
                                onClick={() => setActiveTab('tuition')}
                                className={`w-full text-left p-3 rounded-lg font-bold transition-colors ${
                                    activeTab === 'tuition'
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-700 hover:bg-red-100 hover:text-red-600'
                                }`}
                            >
                                Học phí
                            </button>
                            <button
                                onClick={() => setActiveTab('achievement')}
                                className={`w-full text-left p-3 rounded-lg font-bold transition-colors ${
                                    activeTab === 'achievement'
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-700 hover:bg-red-100 hover:text-red-600'
                                }`}
                            >
                                Thành tích
                            </button>
                            <button
                                onClick={() => setActiveTab('portfolio')}
                                className={`w-full text-left p-3 rounded-lg font-bold transition-colors ${
                                    activeTab === 'portfolio'
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-700 hover:bg-red-100 hover:text-red-600'
                                }`}
                            >
                                Portfolio
                            </button>
                            <button
                                onClick={() => setActiveTab('activity')}
                                className={`w-full text-left p-3 rounded-lg font-bold transition-colors ${
                                    activeTab === 'activity'
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-700 hover:bg-red-100 hover:text-red-600'
                                }`}
                            >
                                Hoạt động sinh viên
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudentStatus;