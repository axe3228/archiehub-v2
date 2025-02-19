
type hyperlinkProps = {
    href: string;
    name: string;
    label: string;
    hlColor?: string;
    classBlock?: string;
};

const Hyperlink = ({ href, name, label, hlColor, classBlock }: hyperlinkProps) => {
    return (
        <a
            href={href}
            target="_blank"
            className={`font-medium ${hlColor ?? 'text-dark-primary-txt'} hover:text-dark-hover focus-visible:text-dark-hover ${classBlock}`}
            aria-label={label}
        >
            {name}
        </a>
    );
}

export default Hyperlink;