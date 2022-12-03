interface StateObject {
    books: Array;
    valueSearch: string;
    category: string;
    sort: string;
    maxResults: number;
    loading: boolean;
}

interface BooksObject {
    thumbnail: string;
    title: string;
    authors: string;
    language: string;
    description: string;
    infoLink: string;
    publishedDate: string;
    publisher: string;
    pageCount: string;
}
