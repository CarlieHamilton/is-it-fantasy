import React from 'react';

interface SearchResultProps {
    isFantasy: boolean | undefined;
}

export const SearchResults: React.FC<SearchResultProps> = ({isFantasy }: SearchResultProps) => {
    return (
        <>
            {isFantasy && <>YES</>}
            {!isFantasy && <>NO</>}
        </>
    )

}