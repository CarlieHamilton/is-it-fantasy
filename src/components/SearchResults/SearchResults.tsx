import React from 'react';

interface SearchResultProps {
    isFantasy: boolean | undefined;
    loading: boolean;
}

export const SearchResults: React.FC<SearchResultProps> = ({ isFantasy, loading }: SearchResultProps) => {
    if (loading) return (
        <>
            loading spinner here
        </>
    )

    if (isFantasy === undefined) return (
        <></>
    )

    return (
        <>
            {isFantasy && <>YES</>}
            {!isFantasy && <>NO</>}
        </>
    )

}