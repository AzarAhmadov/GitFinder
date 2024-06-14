import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { ContainerType } from '../../types/type';

export interface SearchContextType {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const SearchProvider = ({ children }: ContainerType) => {

    const [search, setSearch] = useState<string>('azarahmadov');

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
};
