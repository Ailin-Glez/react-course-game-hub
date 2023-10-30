export interface Game {
    id: number;
    name: string;
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