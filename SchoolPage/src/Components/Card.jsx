
function Card({
    imageSrc,
    imageAlt = "",
    category,
    date,
    title,
    xemChiTiet,
    description,
    className = "",
}) {
    

    return (
        <article
            className={`flex h-full flex-col bg-white shadow-lg transition-shadow hover:shadow-xl ${className}`.trim()}
        >
            {imageSrc && (
                <div className="relative h-56 w-full overflow-hidden">
                    <img
                        src={imageSrc}
                        alt={imageAlt || title}
                        className="h-full w-full object-cover"
                    />
                </div>
            )}
            <div className="flex flex-col gap-5 p-6 text-left">
                {(category || date) && (
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                        {category && (
                            <span className="inline-flex items-center gap-2 font-semibold text-red-500">
                                <span>{category}</span>
                            </span>
                        )}
                        {date && (
                            <span className="inline-flex items-center gap-2">
                                <span>{date}</span>
                            </span>
                        )}
                    </div>
                )}
                {title && (
                    <h3 className="text-lg font-semibold leading-snug text-slate-900">
                        {title}
                    </h3>
                )}
                {description && (
                    <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                )}
                <button
                    type="button"
                        onClick={xemChiTiet}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-red-500 transition hover:text-red-600"
                    >
                        <span>Xem chi tiết</span>
                        <span aria-hidden>→</span>
                </button>
            </div>
        </article>
    );
}

export default Card;
