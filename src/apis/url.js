// BASE URL
export const DOMAIN = 'http://localhost:8080';

const API_URLS = {
    KAKAOLOGIN: () => `${DOMAIN}/oauth2/authorization/kakao`,
    NAVERLOGIN: () => `${DOMAIN}/oauth2/authorization/naver`,
    LOGOUT: () => `${DOMAIN}/logout`,
    WITHDRAW: () => `${DOMAIN}/withdraw`,
    REISSUE: () => `${DOMAIN}/reissue`,

    GET_MEMBER: () => `${DOMAIN}/member`,

    GET_CATEGORIES: () => `${DOMAIN}/categories`,
    GET_SUB_CATEGORIES: (categoryId) => `${DOMAIN}/categories/${categoryId}`,

    GET_FLASHCARDS: (categoryId) => `${DOMAIN}/categories/${categoryId}/flashcards`,
    GET_SEARCH_FLASHCARD: (question) => `${DOMAIN}/flashcards?question=${question}`,
    GET_FLASHCARD: (flashcardId) => `${DOMAIN}/flashcards/${flashcardId}`,

    GET_STATISTICS: (status) => `${DOMAIN}/records/statistics?status=${status}`,
    GET_RECORDS: (status, page) => `${DOMAIN}/records?status=${status}&page=${page}`,
    POST_RECORDS: () => `${DOMAIN}/records`,
    POST_RECORD: () => `${DOMAIN}/records/record`,
}

export default API_URLS;

