import React, { useState } from 'react';
import axios from 'axios';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';

export const Fantasy: React.FC = () => {
    const [isFantasy, setIsFantasy] = useState<boolean>();
    const [loading, setLoading] = useState(false);

    const searchGoogleBooks = (formData: any) => {
        setLoading(true);
        const searchParams = formData.search
        axios.get(`http://openlibrary.org/search.json?q=${searchParams}`)
        .then((response) => {
            const bookGenre = response.data.docs[0].subject;

            if (bookGenre === undefined) {
                setIsFantasy(false);
            } else {
                const isItFantasy = bookGenre.includes('fantasy');
                setIsFantasy(isItFantasy);
            }

            setLoading(false);
        })
    };

    return (
        <>
            <h1>Is It Fantasy?</h1>
            <div><SearchBar searchGoogleBooks={searchGoogleBooks} /></div>
            <div><SearchResults isFantasy={isFantasy} loading={loading} /></div>
        </>
    )
}