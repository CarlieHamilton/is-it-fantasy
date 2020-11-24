import React, { useState } from 'react';
import axios from 'axios';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';

export const Fantasy: React.FC = () => {
    const [isFantasy, setIsFantasy] = useState(null);

    const searchGoogleBooks = () => {
        axios.get(`http://openlibrary.org/search.json?q=name+of+the+wind`)
        .then((response) => {
            const bookGenre = response.data.docs[0].subject;
            const isItFantasy = bookGenre.includes('fantasy');
            setIsFantasy(isItFantasy);
        })
    };

    return (
        <>
            <h1>Is It Fantasy?</h1>
            <div><SearchBar searchGoogleBooks={searchGoogleBooks} /></div>
            <div><SearchResults isFantasy={isFantasy} /></div>
        </>
    )
}