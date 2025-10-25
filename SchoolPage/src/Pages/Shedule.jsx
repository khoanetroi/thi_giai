import { useState } from 'react';

const Schedule = () => {
    const [currentWeek, setCurrentWeek] = useState(0);
    const [selectedClass, setSelectedClass] = useState(null);

    const scheduleData = [
        {
            week: "Tuần 1 (02/01 - 08/01)",
            days: [
                {
                    day: "Thứ 2",
                    classes: [
                        { time: "07:00 - 09:00", subject: "Lập trình Web", room: "A1.01", teacher: "TS. Nguyễn Văn A" },
                        { time: "13:00 - 15:00", subject: "Cơ sở dữ liệu", room: "B2.03", teacher: "ThS. Trần Thị B" }
                    ]
                },
                {
                    day: "Thứ 3",
                    classes: [
                        { time: "09:00 - 11:00", subject: "Mạng máy tính", room: "C3.02", teacher: "PGS. Lê Văn C" }
                    ]
                },
                {
                    day: "Thứ 4",
                    classes: [
                        { time: "07:00 - 09:00", subject: "Toán rời rạc", room: "D4.01", teacher: "TS. Phạm Văn D" },
                        { time: "13:00 - 15:00", subject: "Lập trình hướng đối tượng", room: "A1.02", teacher: "ThS. Hoàng Thị E" }
                    ]
                },
                {
                    day: "Thứ 5",
                    classes: [
                        { time: "15:00 - 17:00", subject: "Hệ điều hành", room: "B2.05", teacher: "TS. Nguyễn Văn F" }
                    ]
                },
                {
                    day: "Thứ 6",
                    classes: [
                        { time: "09:00 - 11:00", subject: "Đồ án môn học", room: "Phòng Lab", teacher: "PGS. Trần Văn G" }
                    ]
                }
            ]
        },
        {
            week: "Tuần 2 (09/01 - 15/01)",
            days: [
                {
                    day: "Thứ 2",
                    classes: [
                        { time: "07:00 - 09:00", subject: "Lập trình Web", room: "A1.01", teacher: "TS. Nguyễn Văn A" },
                        { time: "15:00 - 17:00", subject: "Thực hành Web", room: "Phòng Lab", teacher: "TS. Nguyễn Văn A" }
                    ]
                },
                {
                    day: "Thứ 3",
                    classes: [
                        { time: "09:00 - 11:00", subject: "Mạng máy tính", room: "C3.02", teacher: "PGS. Lê Văn C" },
                        { time: "13:00 - 15:00", subject: "Bài tập Mạng", room: "B2.04", teacher: "PGS. Lê Văn C" }
                    ]
                },
                {
                    day: "Thứ 4",
                    classes: [
                        { time: "07:00 - 09:00", subject: "Toán rời rạc", room: "D4.01", teacher: "TS. Phạm Văn D" }
                    ]
                },
                {
                    day: "Thứ 5",
                    classes: [
                        { time: "13:00 - 15:00", subject: "Hệ điều hành", room: "B2.05", teacher: "TS. Nguyễn Văn F" },
                        { time: "15:00 - 17:00", subject: "Thực hành HĐH", room: "Phòng Lab", teacher: "TS. Nguyễn Văn F" }
                    ]
                },
                {
                    day: "Thứ 6",
                    classes: [
                        { time: "07:00 - 11:00", subject: "Đồ án môn học", room: "Phòng Lab", teacher: "PGS. Trần Văn G" }
                    ]
                }
            ]
        }
    ];

    const daysOfWeek = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];

    const ClassClick = (classItem) => {
        setSelectedClass(classItem);
    };

    const nextWeek = () => {
        setCurrentWeek(prev => (prev + 1) % scheduleData.length);
    };

    const prevWeek = () => {
        setCurrentWeek(prev => (prev - 1 + scheduleData.length) % scheduleData.length);
    };

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-red-600 py-3 sm:py-4 px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white text-center">THỜI KHÓA BIỂU</h2>
                </div>

                <div className="p-4 sm:p-6">
                    {/* Week Navigation */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4 sm:mb-6">
                        <button
                            onClick={prevWeek}
                            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            <span>Tuần trước</span>
                        </button>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center">{scheduleData[currentWeek].week}</h3>

                        <button
                            onClick={nextWeek}
                            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
                        >
                            <span>Tuần sau</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Schedule Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-xs sm:text-sm">
                            <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 font-semibold text-gray-700 min-w-16 sm:min-w-20">Thời gian</th>
                                {daysOfWeek.map(day => (
                                    <th key={day} className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 font-semibold text-gray-700 min-w-20 sm:min-w-24">
                                        {day}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {['07:00-09:00', '09:00-11:00', '11:00-13:00', '13:00-15:00', '15:00-17:00'].map(timeSlot => (
                                <tr key={timeSlot}>
                                    <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-center font-medium text-gray-700 bg-gray-50 whitespace-nowrap">
                                        {timeSlot}
                                    </td>
                                    {daysOfWeek.map(day => {
                                        const dayData = scheduleData[currentWeek].days.find(d => d.day === day);
                                        const classInSlot = dayData?.classes.find(cls =>
                                            cls.time.split(' - ')[0] === timeSlot.split('-')[0]
                                        );

                                        return (
                                            <td
                                                key={day}
                                                className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2 min-h-12 sm:min-h-16 cursor-pointer hover:bg-gray-50 transition-colors duration-150"
                                                onClick={() => classInSlot && ClassClick(classInSlot)}
                                            >
                                                {classInSlot ? (
                                                    <div className={`p-1 sm:p-2 rounded-lg ${
                                                        classInSlot.subject.includes('Thực hành') || classInSlot.subject.includes('Lab')
                                                            ? 'bg-green-100 border border-green-200'
                                                            : classInSlot.subject.includes('Bài tập')
                                                                ? 'bg-yellow-100 border border-yellow-200'
                                                                : 'bg-blue-100 border border-blue-200'
                                                    }`}>
                                                        <div className="font-semibold text-gray-800 line-clamp-2 text-xs sm:text-sm">
                                                            {classInSlot.subject}
                                                        </div>
                                                        <div className="text-gray-600 mt-1 text-xs">
                                                            {classInSlot.room}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="text-gray-400 text-xs sm:text-sm">-</div>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Legend */}
                    <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 justify-center">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-100 border border-blue-200 rounded"></div>
                            <span className="text-xs sm:text-sm text-gray-600">Lý thuyết</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-100 border border-green-200 rounded"></div>
                            <span className="text-xs sm:text-sm text-gray-600">Thực hành</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-100 border border-yellow-200 rounded"></div>
                            <span className="text-xs sm:text-sm text-gray-600">Bài tập</span>
                        </div>
                    </div>

                    {/* Class Detail Modal */}
                    {selectedClass && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-lg p-4 sm:p-6 max-w-md w-full mx-2">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Chi tiết môn học</h3>
                                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                                    <div>
                                        <span className="font-semibold text-gray-700">Môn học:</span>
                                        <p className="text-gray-800">{selectedClass.subject}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-700">Thời gian:</span>
                                        <p className="text-gray-800">{selectedClass.time}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-700">Phòng:</span>
                                        <p className="text-gray-800">{selectedClass.room}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-700">Giảng viên:</span>
                                        <p className="text-gray-800">{selectedClass.teacher}</p>
                                    </div>
                                </div>
                                <div className="flex justify-end mt-4 sm:mt-6">
                                    <button
                                        onClick={() => setSelectedClass(null)}
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

export default Schedule;