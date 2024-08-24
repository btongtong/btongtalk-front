// BASE URL
export const DOMAIN = 'http://localhost:8080';

const API_URLS = {
    KAKAOLOGIN: () => `${DOMAIN}/oauth2/authorization/kakao`,
    NAVERLOGIN : () => `${DOMAIN}/oauth2/authorization/naver`,
    LOGOUT : () => `${DOMAIN}/signout`,
    REISSUE : () => `${DOMAIN}/reissue`,

    GET_MEMBER : () => `${DOMAIN}/member`,

    GET_CATEGORIES : () => `${DOMAIN}/categories`,
    GET_SUB_CATEGORIES : (categoryId) => `${DOMAIN}/categories/${categoryId}`,

    GET_FLASHCARDS : (categoryId) => `${DOMAIN}/categories/${categoryId}/flashcard`
}

export default API_URLS;

