import React, { useReducer } from 'react';

interface SearchBarProps {
    searchGoogleBooks: (formData: any) => void;
}

const formReducer = (state: any, event: any) =>  {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchGoogleBooks }: SearchBarProps) => {
    const [formData, setFormData] = useReducer(formReducer, {});

    const onSubmit = (event: any) => {
        event.preventDefault();
        searchGoogleBooks(formData);
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="search" name="search" placeholder="Search for the title of a book" onChange={setFormData} />
            <button type="submit">Search</button>
        </form>
    )
}