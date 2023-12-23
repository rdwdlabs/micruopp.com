import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const photosDirectory = path.join(process.cwd(), 'src/data/photos');

export function getSortedPhotosData() {
  const fileNames = fs.readdirSync(photosDirectory);
  const allPhotosData = fileNames.map((filename) => {
    const id = filename.replace(/\.md$/, '');
  
    const fullPath = path.join(photosDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    const matterResult = matter(fileContents);
  
    return {
      id,
      ...matterResult.data
    };
  });

  return allPhotosData;
}

export function getAllPhotoIds() {
  const fileNames = fs.readdirSync(photosDirectory);
  
  return fileNames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPhotoData(id: string) {
  const fullPath = path.join(photosDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const matterResult = matter(fileContents);
  
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // const content = processedContent.toString();
  
  return {
    id,
    // content,
    ...matterResult.data
  };
}
