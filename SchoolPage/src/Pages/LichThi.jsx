import { useState } from 'react';

const ExamSchedule = () => {
    const [selectedExam, setSelectedExam] = useState(null);

    const exams = [
        {
            id: 1,
            subject: "Lập trình Web",
            date: "15/12/2025",
            time: "07:00 - 09:00",
            room: "2B21",
        },
        {
            id: 2,
            subject: "Xử lý ảnh và video",
            date: "18/12/2025",
            time: "13:00 - 14:30",
            room: "2E02",
        },
        {
            id: 3,
            subject: "Thiết kế game",
            date: "25/12/2025",
            time: "09:00 - 11:00",
            room: "2B22",
        },
        {
            id: 4,
            subject: "Lập trình game cơ bản",
            date: "28/12/2025",
            time: "15:00 - 17:00",
            room: "2E01",
        },
        {
            id: 5,
            subject: "Lập trình ứng dụng trên đầu cuối di động",
            date: "28/12/2025",
            time: "13:00 - 15:00",
            room: "2E03",
        },
        {
            id: 6,
            subject: "Chuyên đề Phát triển ứng dụng đa phương tiện",
            date: "28/12/2025",
            time: "7:00 - 8:30",
            room: "2E02",
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
            <div className="bg-white rounded-lg shadow-lg">
                <div className="bg-red-600 py-3 sm:py-4 px-4 sm:px-6 rounded-t-lg">
                    <h2 className="text-xl sm:text-2xl font-bold text-white text-center">LỊCH THI</h2>
                </div>

                <div className="p-4 sm:p-6">
                    <div className="space-y-3 sm:space-y-4">
                        {exams.map((exam) => (
                            <div
                                key={exam.id}
                                className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                                onClick={() => setSelectedExam(exam)}
                            >
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-base sm:text-lg text-gray-800 line-clamp-2">
                                            {exam.subject}
                                        </h3>
                                        <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-3 mt-1 text-xs sm:text-sm text-gray-600">
                                            <span className="flex items-center gap-1">
                                                <span>📅</span>
                                                <span>{exam.date}</span>
                                            </span>
                                            <span className="hidden xs:block">•</span>
                                            <span className="flex items-center gap-1">
                                                <span>⏰</span>
                                                <span>{exam.time}</span>
                                            </span>
                                            <span className="hidden xs:block">•</span>
                                            <span className="flex items-center gap-1">
                                                <span>🏫</span>
                                                <span>{exam.room}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedExam && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-lg p-4 sm:p-6 max-w-md w-full mx-2">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                                    {selectedExam.subject}
                                </h3>

                                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Ngày thi:</span>
                                        <span>{selectedExam.date}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium">Giờ thi:</span>
                                        <span>{selectedExam.time}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium">Phòng thi:</span>
                                        <span>{selectedExam.room}</span>
                                    </div>
                                </div>

                                <div className="flex justify-end mt-4 sm:mt-6">
                                    <button
                                        onClick={() => setSelectedExam(null)}
                                        className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                                    >
                                        Đóng
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExamSchedule;