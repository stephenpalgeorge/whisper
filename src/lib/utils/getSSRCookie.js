/**
 * Take a cookie name and return the corresponding value.
 *
 * When a page is server-side rendered, the request doesn't know anything about the
 * cookies in the browser, since the browser isn't involved in SSR. This means, when making
 * a fetch request, we can't rely on simply sending the request with `credentials: 'include'`,
 * as this only works in the browser. Hence the need for this function.
 *
 * @param name - the cookie name that we are hoping to find.
 * @param request - the request object, which contains all the cookie info...
 * @return {*[]|*}
 */

export default function getSSRCookie(name, request) {
    // get all the cookies and massage them into an array
    const cookieList = request.headers.get('cookie');
    if (!cookieList) return [];
    const cookies = cookieList.split(';').map(c => c.trim());

    // by using `filter` we should get an empty array if the cookie doesn't exist
    // which means error handling for the consumer of this function should be straightforward.
    return cookies.filter(c => c.includes(name));
}
