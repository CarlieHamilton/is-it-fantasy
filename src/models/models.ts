export interface formData {
    search: string
};

export interface SearchBarProps {
    searchGoogleBooks: (formData: formData) => void;
};

export interface SearchResultProps {
    isFantasy: boolean | undefined;
    loading: boolean;
};