import { Sort } from "@models";

export const SORT_VALUES: Sort[] = [
    { 
        id: 1,
        name: 'Relevance',
        slug: ''
    },
    { 
        id: 2,
        name: 'Date added',
        slug: '-added'
    },
    { 
        id: 3,
        name: 'Name',
        slug: 'name',
    },
    { 
        id: 4,
        name: 'Release Date',
        slug: '-released'
    },
    { 
        id: 5,
        name: 'Popularity',
        slug: '-metacritic'
    },
    { 
        id: 6,
        name: 'Average Rating',
        slug: '-rating'
    }
]