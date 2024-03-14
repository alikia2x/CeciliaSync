import path from "path";
import fs from "fs";
import ignore from "ignore";

export default function(dir: string){
    // Read .gitignore if exists
    const gitIgnorePath = path.join(dir, ".gitignore");
    if (fs.existsSync(gitIgnorePath)) {
        const gitIgnoreContent = fs.readFileSync(gitIgnorePath, "utf-8");
        let gitIgnorePatterns: string[] = [];
        gitIgnorePatterns = gitIgnoreContent
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line !== "" && !line.startsWith("#"));
        let ig = ignore().add(gitIgnorePatterns);
        return ig;
    }
    else{
        console.warn(".gitignore not found in " + dir);
        return null;
    }
}