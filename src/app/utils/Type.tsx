
// products data types

export interface iProducts {
    id: number;
    name: string;
    title: string;
    description: string;
    price: string;
    oldPrice?: string;
    discount?: string;
    rating: number;
    score: string;
    imageUrl: string;
    link: string;
    size: string[];  
    color: string[];
    qty: number;
}




// cart data types
export interface cart {
    id: number;
    name: string;
    title: string;
    description: string;
    price: string;
    oldPrice?: string;
    discount?: string;
    rating: number;
    score: string;
    imageUrl: string;
    link: string;
}