import Katie from "../images/katie.png"
import Wed from "../images/wedding-photography.png"
import Bike from "../images/mountain-bike.png"

export default [
    {
        id: 1,
        title: "Life Lession with Katie",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike . (Bike provided)",
        price: 136,
        cover: {Katie},
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "USA",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photograpers alike, join us in learning techniques required to leave the hapy couple with memories that'll last a lifetime.",
        price: 125,
        cover: {Wed},
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Binking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike . (Bike provided)",
        price: 50,
        cover: {Bike},
        stats: {
            rating: 4.8,
            reviewCount: 35
        },
        location: "Norway",
        openSpots: 22,
    }
]