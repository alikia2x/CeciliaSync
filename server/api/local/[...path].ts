import * as fs from 'fs';
import * as path from 'path';

export default defineEventHandler((event) => {
    if (!event.context.params || !event.context.params.path) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Path not provided.',
        });
    }

    const decodedPath: string = path.join("/", decodeURI(event.context.params.path));
    if (!fs.existsSync(decodedPath)) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Path not found.',
        });
    }

    try {
        if (fs.lstatSync(decodedPath).isDirectory()) {
            return fs.readdirSync(decodedPath);
        } else {
            return fs.statSync(decodedPath);
        }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error.',
            message: error.message
        });
    }
});
