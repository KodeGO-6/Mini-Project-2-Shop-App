export const TrucateText = ({text}) => {
    const truncateText = text.length > 20 ? text.slice(0, 25) + '...' : text;

    return truncateText
}
