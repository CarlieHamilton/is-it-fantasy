import React from 'react';
import axios from 'axios';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';

export const Fantasy: React.FC = () => {

    const searchGoogleBooks = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=kingkiller`)
        .then((response) => {
            console.log(response)
        })
    };

    return (
        <>
            <h1>Is It Fantasy?</h1>
            <div><SearchBar searchGoogleBooks={searchGoogleBooks} /></div>
            <div><SearchResults /></div>
        </>
    )
}