import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import { router } from './routes';
import fileUpload from 'express-fileupload';

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 } //N máximo 50mb
}));

app.use(router);
app.use('/files', express.static(path.join(__dirname, '..', 'tmp')));

//Middleware para verificar se o token está presente no header Authorization.
//Middleware de erro global, para lidar com erros não tratados.
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        //Se for uma instancia do tipo Error
        res.status(400).json({
            error: err.message
        })
    }
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

//Inicia o server na porta 3333.
app.listen(3333, () => {
    console.log("Server started on port 3333!!!");
});
