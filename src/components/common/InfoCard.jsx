export default function InfoCard({src, alt, label, text, href}) {
    return (
        <div className="about-me-info">
            <img src={src} alt={alt}/>
            <span className="info-label">{label}</span>
            {href ? (
                 <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link"
                >
                    {text}
                </a>
                ) : (
                <p className="info-value">{text}</p>
                )}
        </div>
    )
}