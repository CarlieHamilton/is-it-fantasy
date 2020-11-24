import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';

export const Fantasy: React.FC = () => {
    return (
        <>
            <h1>Is It Fantasy?</h1>
            <div><SearchBar /></div>
            <div><SearchResults /></div>
        </>
    )
}