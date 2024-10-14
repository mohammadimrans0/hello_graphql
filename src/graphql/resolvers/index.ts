import { db } from "../../db.js";

export const resolvers = {
    Query: {
      products: () => db.products,
      product: (_parent: any, args: { id: string }, _context: any) => {
          return db.products.find(product => product.id === args.id)
      },
      categories: () => db.categories,
      category: (_parent: any, args: { id: string }, _context: any) => {
        return db.categories.find(category => category.id === args.id)
      }
    },
    Product: {
        category: (parent: any, _args: any, _context: any) => {
            return db.categories.find(category => category.id === parent.categoryId)
        },
        reviews: (parent: any, _args: any, _context: any) => {
            return db.reviews.filter(review => review.productId === parent.id)
        }
    },
    Category: {
        products: (parent: any, _args: any, _context: any) => {
            return db.products.filter(product => product.categoryId === parent.id)
        }
    } 
  };