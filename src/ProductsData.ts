export interface Products {
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

export const products: Products[] = [
    {
        id: 1,
        name:"Gradienttt Graphic T-shirt",
        title: "Product 1",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: "$260",
        oldPrice: " $300 ",
         discount: "-40%",
        rating: 5,
        score: "4.5/5",
        imageUrl: "/image 8.png",
        link: "/product/product1",
        size: ["S", "M", "L", "XL"],
       color: ["red", "blue", "black"],
       qty: 1,
    },
    {
        id: 2,
        name:"Polo with Tipping",
        title: "Product 2",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: "$90",
        oldPrice: " $300 ",
        discount: "-40%",
        rating: 4,
        score: "4.5/5",
        imageUrl: "/Frame 34 (2).png",
        link: "/product/product2",
        size: ["S", "M", "L", "XL"],
       color: ["red", "blue", "black"],
       qty: 1,
    },
    {
        id: 3,
        name:"Black Striped T-shirt",
        title: "Product 3",
        description: "Black Striped T-shirt",
        price: "$85",
       
        oldPrice: "$150",
        discount: "-30%",
        rating: 3,
        score: "4.5/5",
        imageUrl: "/Frame 38 (1).png",
        link: "/product/product3",
        size: ["S", "M", "L", "XL"],
       color: ["red", "blue", "black"],
       qty: 1,
        
    },
    {
        id: 4,
        name:"SKINNY FIT JEANS",
        title: "Product 4",
        description: "SKINNY FIT JEANS",
        price: "$55",
        oldPrice: "$150",
        discount: "-30%",
        rating: 5,
        score: "4.5/5",
        imageUrl: "/arrivals/Frame33.png",
        link: "/product/product4",
        size: ["S", "M", "L", "XL"],
       color: ["red", "blue", "black"],
       qty: 1,
    },
    {
        id: 5,
        name:"CHECKERED SHIRT",
        title: "Product 5",
        description: "CHECKERED SHIRT",
        price: "$120",
        oldPrice: " $300 ",
        discount: "-40%",
        rating: 4,
        score: "4.8/5",
        imageUrl: "/arrivals/Frame 34.png",
        link: "/product/product5",
        size: ["S", "M", "L", "XL"],
       color: ["red", "blue", "black"],
       qty: 1,
    },
    {
        id: 6,
        name:"SLEEVE STRIPED T-SHIRT",
        title: "Product 6",
        description: "SLEEVE STRIPED T-SHIRT",
        price: "$200",
        oldPrice: "$150",
        discount: "-30%",
        rating: 5,
        score: "4.9/5",
        imageUrl: "/arrivals/Frame 38.png",
        link: "/product/product6",
        size: ["S", "M", "L", "XL"],
       color: ["red", "blue", "black"],
       qty: 1,
    },
    {
        id: 7,
        name:"VERTICAL STRIPED SHIRT",
        title: "Product 7",
        description: "VERTICAL STRIPED SHIRT",
        price: "$50",
        oldPrice: "$150",
        discount: "-30%",
        rating: 5,
        score: "4.7/5",
        imageUrl: "/top/Frame 32.png",
        link: "/product/product7",
        size: ["S", "M", "L", "XL"],
       color: ["red", "blue", "black"],
       qty: 1,
    },
    {
        id: 8,
        name:"COURAGE GRAPHIC T-SHIRT",
        title: "Product 8",
        description: "COURAGE GRAPHIC T-SHIRT",
        price: "$150",
        oldPrice: " $300 ",
        discount: "-40%",
        rating: 4,
        score: "4.6/5",
        imageUrl: "/top/Frame 33.png",
        link: "/product/product8",
        size: ["S", "M", "L", "XL"],
       color: ["red", "blue", "black"],
       qty: 1,
    },
    {
        id: 9,
        name:"LOOSE FIT BERMUDA SHORTS",
        title: "Product 9",
        description: "LOOSE FIT BERMUDA SHORTS",
        price: "$300",
        oldPrice: " $300 ",
        discount: "-40%",
        rating: 5,
        score: "5/5",
        imageUrl: "/top/Frame 34.png",
        link: "/product/product9",
        size: ["S", "M", "L", "XL"],
       color: ["red", "blue", "black"],
       qty: 1,
    },
];



// const products = useSelector((state:any)=>state.ecoProducts)
