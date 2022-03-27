import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'
dotenv.config();


connectDB();

const app=express();

app.use((req,res,next)=>{
    console.log('HELLO');
    console.log(req.originalUrl);
    next()
})
app.get('/',(req,res)=>{
    res.send('API is running')
})
app.use('/api/products', productRoutes)
// app.get('/api/products',(req,res)=>{
//     res.json(products)
// })
// app.get('/api/products/:id',(req,res)=>{
//     const product=products.find(product=> product._id===req.params.id)
//     res.json(product)
// })

//////import vào middlerware
// app.use((req,res,next)=>{
//     const error = new Error(`Not Found- ${req.originalUrl}`)
//     res.status(404);
//     next(error);
// })

app.use(notFound);

// app.use((err, req, res,next)=>{
//     const statusCode=res.statusCode === 200?500:res.statusCode
//     res.status(statusCode);
//     res.json({
//         message: err.message,
//         stack: process.env.NODE_ENV==="production"?null:err.stack
//     })
// })
app.use(errorHandler);

const PORT= process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));