import { useState } from 'react';

const exampleChatData = [
    {
        id: 1,
        sender: 'Sinh viên',
        role: 'user',
        message: 'Chào PTIT, em muốn hỏi về thời hạn nộp học phí học kỳ này ạ?',
        timestamp: '09:15'
    },
    {
        id: 2,
        sender: 'Phòng CTSV',
        role: 'support',
        message: 'Chào em! Thời hạn nộp học phí là trước ngày 30/10. Em nhớ hoàn thành đúng hạn nhé.',
        timestamp: '09:17'
    },
    {
        id: 3,
        sender: 'Sinh viên',
        role: 'user',
        message: 'Nếu em nộp trễ thì có bị phạt không ạ?',
        timestamp: '09:18'
    },
    {
        id: 4,
        sender: 'Phòng CTSV',
        role: 'support',
        message: 'Sau thời hạn trên, hệ thống sẽ tính phí chậm nộp 5% tổng học phí.',
        timestamp: '09:20'
    }
];

function ChatBox(props) {
    const [chatMessages, setChatMessages] = useState(props.messages || exampleChatData);
    const [inputValue, setInputValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (!inputValue.trim()) {
            return;
        }

        const timeNow = new Date().toLocaleTimeString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit'
        });

        const studentMessage = {
            id: Date.now(),
            sender: 'Sinh viên',
            role: 'user',
            message: inputValue,
            timestamp: timeNow
        };

        const teacherReply = {
            id: Date.now() + 1,
            sender: 'Phòng CTSV',
            role: 'support',
            message: 'test message',
            timestamp: timeNow
        };

        setChatMessages(prev => [...prev, studentMessage, teacherReply]);
        setInputValue('');
    }

    return (
        <div className="bg-white rounded-lg shadow-lg w-72 border border-red-100 overflow-hidden">
            <div className="bg-red-600 text-white px-4 py-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold">Chat PTIT</h2>
                {props.onClose && (
                    <button type="button" onClick={props.onClose} className="text-white text-lg leading-none">
                        ×
                    </button>
                )}
            </div>
            <div className="p-4 bg-gray-50">
                <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                    {chatMessages.map((item) => {
                        const isTeacher = item.role === 'support';
                        return (
                            <div key={item.id} className={isTeacher ? 'text-left' : 'text-right'}>
                                <p className="text-xs text-gray-500">{item.sender}</p>
                                <div className={`mt-1 inline-block p-3 rounded-lg text-sm ${isTeacher ? 'bg-white text-gray-700 border border-gray-200' : 'bg-red-100 text-red-700'}`}>
                                    {item.message}
                                </div>
                                <span className="text-xs text-gray-400 block">{item.timestamp}</span>
                            </div>
                        );
                    })}
                </div>

                <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        placeholder="Nhập tin nhắn..."
                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button
                        type="submit"
                        className="bg-red-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-700"
                    >
                        Gửi
                    </button>
                </form>
            </div>
        </div>
    );
}

export { exampleChatData };
export default ChatBox;
