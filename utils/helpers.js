export const convertToSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
};

export const removeNonEnglishChars = (text) => {
    return text
        .replace(/[əƏ]/g, 'e')
        .replace(/[ıİ]/g, 'i')
        .replace(/[öÖ]/g, 'o')
        .replace(/[üÜ]/g, 'u')
        .replace(/[şŞ]/g, 's')
        .replace(/[çÇ]/g, 'c')
        .replace(/[ğĞ]/g, 'g')
        .replace(/[^a-zA-Z0-9\s-]/g, '');
};

export const generateSlug = (title, id) => {
    const cleanTitle = removeNonEnglishChars(title);
    const slug = convertToSlug(cleanTitle);
    return `${slug}-${id}`;
}; 