import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (_parent, args, _context) => {
            return db.products.find(product => product.id === args.id);
        },
        categories: () => db.categories,
        category: (_parent, args, _context) => {
            return db.categories.find(category => category.id === args.id);
        }
    },
    Product: {
        category: (parent, _args, _context) => {
            return db.categories.find(category => category.id === parent.categoryId);
        },
        reviews: (parent, _args, _context) => {
            return db.reviews.filter(review => review.productId === parent.id);
        }
    },
    Category: {
        products: (parent, _args, _context) => {
            return db.products.filter(product => product.categoryId === parent.id);
        }
    }
};
