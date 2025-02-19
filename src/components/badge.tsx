const Badge = ({tag}: any) => {
    return (
        <p className="inline rounded-full bg-dark-hl/10 px-3 py-1 text-xs font-medium 
        leading-5 text-dark-hl">
            {tag}
        </p>
    );
}

export default Badge;