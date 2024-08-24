const URLS = {
    MAIN: () => '/',
    LOGIN: () => '/login',
    CATEGORY: (categoryId) => `/categories/${categoryId}`,
    FLASHCARD: () => '/flashcard',
    MEMBER: () => '/member',
    MEMBER_CORRECT: () => '/member/correct',
    MEMBER_WRONG: () => '/member/wrong'
};

export default URLS;
