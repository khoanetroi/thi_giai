import { useState } from 'react';
import ChatBox, { exampleChatData } from '../Components/ChatBox';

const FAQForm = () => {
    const [Data, setData] = useState({
        major: '',
        issueType: '',
        title: '',
        content: ''
    });
    const [files, setFiles] = useState([]);
    const [submitForms, setSubmitForms] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const majors = [
        'Công nghệ Thông tin',
        'Truyền thông Đa phương tiện',
        'An toàn Thông tin',
        'Công nghệ Đa phương tiện'
    ];

    const issueTypes = [
        'Tuyển sinh',
        'Đào tạo',
        'Học phí',
        'Thủ tục hành chính',
        'Chương trình học',
        'Thi cử',
        'Bằng cấp',
        'Khác'
    ];

    const Change = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const FileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...selectedFiles]);
    };

    const removeFile = (index) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const Delete = () => {
        setData({
            major: '',
            issueType: '',
            title: '',
            content: ''
        });
        setFiles([]);
        setEditIndex(null);
    };

    const Submit = (e) => {
        e.preventDefault();

        const newForm = {
            ...Data,
            files: [...files],
            id: Date.now(),
            submittedAt: new Date().toLocaleString('vi-VN'),
            status: 'Chưa xem',
            response: null
        };

        if (editIndex !== null) {
            const updatedForms = [...submitForms];
            updatedForms[editIndex] = newForm;
            setSubmitForms(updatedForms);
        } else {
            setSubmitForms(prev => [newForm, ...prev]);
        }

        setData({
            major: '',
            issueType: '',
            title: '',
            content: ''
        });
        setFiles([]);
        setEditIndex(null);
    };

    const Edit = (index) => {
        const formToEdit = submitForms[index];
        setData({
            major: formToEdit.major,
            issueType: formToEdit.issueType,
            title: formToEdit.title,
            content: formToEdit.content
        });
        setFiles(formToEdit.files || []);
        setEditIndex(index);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const isFormValid = Data.major && Data.issueType && Data.title && Data.content;

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
            {/* Form hỏi đáp */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 sm:mb-8">
                <div className="bg-red-600 py-3 sm:py-4 px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
                        {editIndex !== null ? 'Chỉnh sửa câu hỏi' : 'Hỏi đáp'}
                    </h2>
                </div>

                <div className="p-4 sm:p-6">
                    <form onSubmit={Submit} className="space-y-4 sm:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label htmlFor="major" className="flex text-sm font-medium text-gray-700 mb-2">
                                    Ngành học <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="major"
                                    name="major"
                                    value={Data.major}
                                    onChange={Change}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm sm:text-base"
                                >
                                    <option value="">Chọn ngành học</option>
                                    {majors.map((major, index) => (
                                        <option key={index} value={major}>
                                            {major}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="issueType" className="flex text-sm font-medium text-gray-700 mb-2">
                                    Loại vấn đề <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="issueType"
                                    name="issueType"
                                    value={Data.issueType}
                                    onChange={Change}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm sm:text-base"
                                >
                                    <option value="">Chọn loại vấn đề</option>
                                    {issueTypes.map((type, index) => (
                                        <option key={index} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="title" className="flex text-sm font-medium text-gray-700 mb-2">
                                Tiêu đề câu hỏi <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={Data.title}
                                onChange={Change}
                                required
                                placeholder="Nhập tiêu đề câu hỏi của bạn"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm sm:text-base"
                            />
                        </div>

                        <div>
                            <label htmlFor="content" className="flex text-sm font-medium text-gray-700 mb-2">
                                Nội dung chi tiết <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                value={Data.content}
                                onChange={Change}
                                required
                                rows={4}
                                placeholder="Mô tả chi tiết câu hỏi của bạn..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-vertical text-sm sm:text-base"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Đính kèm tệp tin
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-red-400 transition-colors duration-200">
                                <input
                                    type="file"
                                    multiple
                                    onChange={FileChange}
                                    className="hidden"
                                    id="file-upload"
                                />
                                <label htmlFor="file-upload" className="cursor-pointer">
                                    <svg className="mx-auto h-8 sm:h-12 w-8 sm:w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        <span className="font-medium text-red-600 hover:text-red-500">Click để upload</span> hoặc kéo thả file vào đây
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF, DOCX tối đa 10MB</p>
                                </label>
                            </div>

                            {files.length > 0 && (
                                <div className="mt-4 space-y-2">
                                    <p className="text-sm font-medium text-gray-700">File đã chọn:</p>
                                    {files.map((file, index) => (
                                        <div key={index} className="flex items-center justify-between bg-gray-50 px-3 sm:px-4 py-2 rounded-lg">
                                            <div className="flex items-center space-x-2 flex-1 min-w-0">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <span className="text-xs sm:text-sm text-gray-600 truncate flex-1">{file.name}</span>
                                                <span className="text-xs text-gray-500 flex-shrink-0 ml-2">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeFile(index)}
                                                className="text-red-500 hover:text-red-700 transition-colors duration-200 ml-2"
                                            >
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4">
                            <button
                                type="button"
                                onClick={Delete}
                                className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center space-x-2"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                <span>Xóa tất cả</span>
                            </button>

                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className={`w-full sm:w-auto font-medium py-2 px-4 sm:px-6 rounded-md transition-colors duration-300 transform hover:scale-105 ${
                                    isFormValid
                                        ? 'bg-red-600 hover:bg-red-700 text-white'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                {editIndex !== null ? 'Cập nhật câu hỏi' : 'Gửi câu hỏi'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
                {isChatOpen && (
                    <ChatBox
                        messages={exampleChatData}
                        onClose={() => setIsChatOpen(false)}
                    />
                )}
                <button
                    type="button"
                    onClick={() => setIsChatOpen(prev => !prev)}
                    className="w-14 h-14 md:w-16 md:h-16 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200 transition-transform transform hover:scale-105 flex items-center justify-center"
                    aria-label={isChatOpen ? 'Đóng cửa sổ chat' : 'Mở cửa sổ chat'}
                >
                    {isChatOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 11H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z" />
                        </svg>
                    )}
                </button>
            </div>

            {submitForms.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-red-600 py-3 sm:py-4 px-4 sm:px-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Câu hỏi đã gửi</h2>
                    </div>

                    <div className="p-4 sm:p-6">
                        <div className="space-y-4">
                            {submitForms.map((form, index) => (
                                <div key={form.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg text-gray-800 mb-2">{form.title}</h3>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs sm:text-sm text-gray-600">
                                                <span>Ngành: {form.major}</span>
                                                <span className="hidden sm:block">•</span>
                                                <span>Loại: {form.issueType}</span>
                                                <span className="hidden sm:block">•</span>
                                                <span>Thời gian: {form.submittedAt}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                form.status === 'Chưa xem'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : form.status === 'Đã xem'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : 'bg-green-100 text-green-800'
                                            }`}>
                                                {form.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <p className="text-gray-700 whitespace-pre-line text-sm sm:text-base">{form.content}</p>
                                    </div>

                                    {form.files && form.files.length > 0 && (
                                        <div className="mb-3">
                                            <p className="text-sm font-medium text-gray-700 mb-1">File đính kèm:</p>
                                            <div className="space-y-1">
                                                {form.files.map((file, fileIndex) => (
                                                    <div key={fileIndex} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                                                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                        <span className="truncate flex-1">{file.name}</span>
                                                        <span className="text-xs text-gray-500 flex-shrink-0">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {form.response && (
                                        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                                            <p className="text-sm font-medium text-green-800 mb-1">Phản hồi từ PTIT:</p>
                                            <p className="text-green-700 whitespace-pre-line text-sm">{form.response}</p>
                                        </div>
                                    )}

                                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
                                        <div className="flex space-x-2">
                                            {form.status === 'Chưa xem' && (
                                                <button
                                                    onClick={() => Edit(index)}
                                                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors duration-200"
                                                >
                                                    Sửa
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FAQForm;