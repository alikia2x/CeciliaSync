import * as fs from 'fs';
import * as path from 'path';
import ignore from 'ignore';

function getFilesRecursive(pathToDir: string, ig: any): string[] {
  const allFiles: string[] = [];

  // Get all files in the directory
  const files = fs.readdirSync(pathToDir);

  files.forEach(file => {
    const filePath = path.join(pathToDir, file);

    // Check if the file/directory is excluded
    if (!ig.ignores(path.relative(process.cwd(), filePath))) {
      const stat = fs.statSync(filePath);

      // If it's a directory, recursively scan it
      if (stat.isDirectory()) {
        const nestedFiles = getFilesRecursive(filePath, ig);
        allFiles.push(...nestedFiles);
      } else {
        allFiles.push(filePath);
      }
    }
  });

  return allFiles;
}

export default function (pathToDir: string): string[] {
  // Read .gitignore file if it exists
  const gitIgnorePath = path.join(pathToDir, '.gitignore');
  let ig = ignore();

  if (fs.existsSync(gitIgnorePath)) {
    const gitIgnoreContent = fs.readFileSync(gitIgnorePath, 'utf-8');
    let gitIgnorePatterns: string[] = [];
    gitIgnorePatterns = gitIgnoreContent
      .split('\n')
      .map(line => line.trim())
      .filter(line => line !== '' && !line.startsWith('#'));
    gitIgnorePatterns.push('.git')
    ig = ignore().add(gitIgnorePatterns);
  }

  // Get all files recursively in the directory
  const allFiles = getFilesRecursive(pathToDir, ig);

  return allFiles;
}