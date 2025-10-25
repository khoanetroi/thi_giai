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
    return (
        <section className="py-16">
            <div className="mx-auto flex max-w-7xl gap-10 px-4 lg:flex-row lg:items-start">
                <board className="w-full rounded-2xl bg-white p-6 shadow-lg lg:w-64">
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
                </board>

                <main className="w-full flex-1 space-y-8">
                    <header>
                        <h1 className="text-3xl font-bold">Bảng điểm tổng quan</h1>
                        <p className="mt-2 text-sm">
                            Số liệu cập nhật đến tháng 10/2025
                        </p>
                    </header>

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
                </main>

                <board className="w-full bg-red-100 p-6 shadow-lg lg:w-64">
                    <h2 className="text-lg font-semibold">Quản lý thông tin</h2>
                    <p className="mt-4 text-sm">
                        <button className="w-full text-left font-bold hover:text-red-500">
                            Bảng điểm
                        </button>
                        <button className="w-full text-left font-bold hover:text-red-500">
                            Thời khóa biểu
                        </button>
                        <button className="w-full text-left font-bold hover:text-red-500">
                            Lịch thi
                        </button>
                        <button className="w-full text-left font-bold hover:text-red-500">
                            Học phí
                        </button>
                        <button className="w-full text-left font-bold hover:text-red-500">
                            Thành tích
                        </button>
                        <button className="w-full text-left font-bold hover:text-red-500">
                            Portfolio
                        </button>
                        <button className="w-full text-left font-bold hover:text-red-500">
                            Hoạt động của sinh viên
                        </button>
                    </p>
                </board>
            </div>
        </section>
    );
}

export default StudentStatus
