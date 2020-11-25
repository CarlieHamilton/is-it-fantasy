import React, { useReducer } from 'react';
import { SearchBarProps } from '../../models/models';

const formReducer = (state: any, event: any) =>  {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchGoogleBooks }: SearchBarProps) => {
    const [formData, setFormData] = useReducer(formReducer, {});

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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