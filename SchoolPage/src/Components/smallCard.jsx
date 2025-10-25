function SmallCard({ imageSrc, title, date }) {
    return (
        <div className="flex items-start text-left gap-3 pb-3 border-b border-gray-200 last:border-0">
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-16 h-16 object-cover"
                />
            )}
            <div className="flex-1">
                {date && (
                    <p className="text-xs text-gray-500">{date}</p>
                )}
                <h4 className="text-sm font-semibold text-slate-800 leading-snug">
                    {title}
                </h4>
            </div>
        </div>
    );
}

export default SmallCard;
