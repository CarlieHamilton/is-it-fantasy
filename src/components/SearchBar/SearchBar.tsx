import React from 'react';

interface SearchBarProps {
    searchGoogleBooks: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchGoogleBooks }: SearchBarProps) => {

    const onSubmit = (event: any) => {
        event.preventDefault();
        searchGoogleBooks();
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="search" />
            <button type="submit">Search</button>
        </form>
    )
}