// import express from 'express'
// // import { Book } from '../models/Book.js';
// const router = express.Router();
// import { verifyAdmin, verifyUser } from './auth.js';

// router.post('/add',verifyUser, async (req, res) => {
//     try {
//         const {name, author, category, imageUrl} = req.body;
//         const newbook = new Book({
//             name,
//             author,
//             category,
//             imageUrl
//         })
//         await newbook.save()
//         return res.json({added: true})
//     } catch(err) {
//         return res.json({message: "Error in adding book"})
//     }
// })

// router.get('/books', async (req, res) => {
//     try {
//         const books = await Book.find()
//         return res.json(books)
//     }catch(err) {
//         return res.json(err)
//     }
// })

// router.get('/book/:id', verifyUser, async (req, res) => {
//     try {
//         const id = req.params.id;
//         const book = await Book.findById({_id: id})
//         return res.json(book)
//     }catch(err) {
//         return res.json(err)
//     }
// })
// router.put('/book/:id', verifyUser, async (req, res) => {
//     try {
//         const id = req.params.id;
//         const book = await Book.findByIdAndUpdate({_id: id}, req.body)
//         return res.json({updated: true, book})
//     }catch(err) {
//         return res.json(err)
//     }
// })

// router.delete('/book/:id', verifyUser, async (req, res) => {
//     try {
//         const id = req.params.id;
//         const book = await Book.findByIdAndDelete({_id: id})
//         return res.json({deleted: true, book})
//     }catch(err) {
//         return res.json(err)
//     }
// })

// export {router as bookRouter}



import express from 'express';
import { PrismaClient } from '@prisma/client';
import { verifyAdmin, verifyUser } from './auth.js';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/add', verifyUser, async (req, res) => {
    try {
        const { name, author, category, imageUrl } = req.body;
        const newBook = await prisma.book.create({
            data: {
                name,
                author,
                category,
                imageUrl
            }
        });
        return res.json({ added: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error in adding book" });
    }
});

router.get('/books', async (req, res) => {
    try {
        const books = await prisma.book.findMany();
        return res.json(books);
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
});

router.get('/book/:id', verifyUser, async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const book = await prisma.book.findUnique({
            where: {
                id: id
            }
        });
        return res.json(book);
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
});

router.put('/book/:id', verifyUser, async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const book = await prisma.book.update({
            where: {
                id: id
            },
            data: req.body
        });
        return res.json({ updated: true, book });
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
});

router.delete('/book/:id', verifyUser, async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const book = await prisma.book.delete({
            where: {
                id: id
            }
        });
        return res.json({ deleted: true, book });
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
});

export { router as bookRouter };
