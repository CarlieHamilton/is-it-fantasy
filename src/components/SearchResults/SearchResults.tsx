import React from 'react';
import { SearchResultProps } from '../../models/models';


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