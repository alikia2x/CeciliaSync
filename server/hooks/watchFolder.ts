import watch from "node-watch";
import gitignoreList from "../api/utils/gitignoreList";
import path from "path";

export default function (dir: string) {
    watch(dir, {
        recursive: true,
        filter(filename, skip){
            let ig = gitignoreList(dir);
            if (ig?.test(path.relative(dir, filename)).ignored){
                return skip;
            }
            return true;
        }
    }, 
    function(event, name){
        console.log(`[${event}] ${name}`);
    });
}