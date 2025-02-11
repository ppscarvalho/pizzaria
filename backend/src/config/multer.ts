import crypto from 'crypto';
import multer from 'multer';
import { resolve } from 'path';

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request, file, callback) => {
                    const hash = crypto.randomBytes(6).toString('hex');
                    const fileName = `${hash}-${file.originalname}`;
                    callback(null, fileName);
                }
            })
        }
    }
}