import express from 'express';



export default [
    express.json(),
    express.urlencoded({extended: true}),
]