export default function getSSRCookie(name, request) {
    const cookieList = request.headers.get('cookie');
    if (!cookieList) return [];
    const cookies = cookieList.split(';').map(c => c.trim());
    return cookies.filter(c => c.includes(name));
}
