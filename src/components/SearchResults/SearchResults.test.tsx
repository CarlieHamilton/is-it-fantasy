import React from 'react';
import { cleanup } from '@testing-library/react';
import { SearchResults } from './SearchResults';
import { render, screen } from '@testing-library/react';

afterEach(cleanup);

describe('testing search results', () => {
    it('renders YES', () => {
        render(<SearchResults isFantasy={true} loading={false} />);
        const positive = screen.getByText(/YES/i);
        expect(positive).toBeInTheDocument();
    })

        it('renders NO', () => {
        render(<SearchResults isFantasy={false} loading={false} />);
        const negative = screen.getByText(/NO/i);
        expect(negative).toBeInTheDocument();
    })

        it('renders LOADING with fantasy true', () => {
        render(<SearchResults isFantasy={true} loading={true} />);
        const loading = screen.getByText(/loading spinner here/i);
        expect(loading).toBeInTheDocument();
    })

        it('renders LOADING with fantasy false', () => {
        render(<SearchResults isFantasy={false} loading={true} />);
        const loading = screen.getByText(/loading spinner here/i);
        expect(loading).toBeInTheDocument();
    })
})