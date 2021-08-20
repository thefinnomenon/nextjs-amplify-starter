/* TODO:
 * I want to replace the static declaration of the locale object by this method that
 * generates it by scanning the locales directory. Unfortunately, `fs` isn't available
 * from `_app.tsx` unless I use getStaticProps which will mess up some optimizations.
 */
import fs from 'fs';
import path, { join } from 'path';

const LOCALES_DIR = join(process.cwd(), 'locales');

// Return an array of the locales and their respective paths - [{ locale: <path> }]
export function getLocalesList(): { [key: string]: string }[] {
  let paths;
  paths = findInDir(LOCALES_DIR, /.json$/);
  console.log(paths);
  return [{ en: '../../locales/en.json' }];
}

// Recurse through directory and return files that match filter
function findInDir(dir: string, filter: RegExp, fileList: string[] = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const fileStat = fs.lstatSync(filePath);

    if (fileStat.isDirectory()) {
      findInDir(filePath, filter, fileList);
    } else if (filter.test(filePath)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}
