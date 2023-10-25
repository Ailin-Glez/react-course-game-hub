export interface GamesResponse {
    count: number;
    next: string;
    previous: string;
    results: Game[]
}

export interface Game {
    id: number;
    name: string;
    released: string;
    rating: number;
    plataforms: Plataform[]
}

interface Plataform {
    plataform: {
        id: number;
        slug: string;
        name: string
    }
}