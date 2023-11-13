export interface Game {
    id: number;
    name: string;
    genres: Genre[]
    background_image: string;
    metacritic: number;
    released: string;
    rating: number;
    parent_platforms: { platform: Platform }[]
}

export interface Platform {
    id: number;
    slug: string;
    name: string
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
} 

export interface Sort {
    id: number;
    name: string;
    slug: string;
}

export interface GameQuery {
    game: string | null;
    genre: Genre | null;
    platform: Platform | null,
    sort: Sort | undefined
}