const URLS = {
    MAIN: () => '/',
    LOGIN: () => '/login',
    CATEGORY: (categoryId) => `/categories/${categoryId}`,
    FLASHCARDS: (categoryId) => `/categories/${categoryId}/flashcards`,
    FLASHCARD: (flashcardId) => `/flashcards/${flashcardId}`,
    SEARCH_FLASHCARD: () => `/flashcards`,
    SEARCH_FLASHCARD_QUERY: (searchQuery) => `/flashcards?question=${searchQuery}`,
    MEMBER: () => '/member',
    MEMBER_CORRECT: () => '/member/correct',
    MEMBER_WRONG: () => '/member/wrong'
};

export default URLS;
