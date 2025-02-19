export const fetchNews = async (category: string="", search: string="") => {
    try {
        const response = await fetch(`https://news-api-next-js-one.vercel.app/api/news?category=${category}&search=${search}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching news data: ", error);
        return [];
    }
}