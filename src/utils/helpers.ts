export const addUrlParam = (
    url: string,
    param: string,
    value: string
): string => {
    const newUrl = new URL(url);
    newUrl.searchParams.append(param, value);
    return newUrl.toString();
};

export const getFormattedDate = (date: string): string => {
    return new Date(Date.parse(date)).toLocaleDateString('ru');
};
