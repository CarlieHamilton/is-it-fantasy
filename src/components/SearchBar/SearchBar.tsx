import React, { useReducer } from 'react';
import { SearchBarProps } from '../../models/models';
import { formReducer } from '../../utils/formReducer';


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