import * as fs from 'fs';

export default function (dir: string) {
    fs.watch(dir, { recursive: true }, function (event, filename) {
        console.log('event is: ' + event);
        if (filename) {
            console.log('filename provided: ' + filename);
        } else {
            console.log('filename not provided');
        }
    });
}