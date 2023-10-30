export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    released: string;
    rating: number;
    parent_platforms: { platform: Platform }[]
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

export interface Platform {
    id: number;
    slug: string;
    name: string
}