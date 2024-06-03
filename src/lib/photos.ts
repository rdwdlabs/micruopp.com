import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface Photo {
  id: string;
  filename: string;
  description: string;
  width: number;
  height: number;
  aspectRatio: number; // width / height
}

const photosDirectory = path.join(process.cwd(), 'src/data/photos');

export function getSortedPhotosData(): Photo[] {
  const fileNames = fs.readdirSync(photosDirectory);
  const allPhotosData = fileNames.map((filename) => {
    const id = filename.replace(/\.md$/, '');
  
    const fullPath = path.join(photosDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    const matterResult = matter(fileContents);
    const imageMetadata = matterResult.data;

    const aspectRatio = imageMetadata.width / imageMetadata.height;
  
    return {
      id,
      filename,
      ...matterResult.data,
      aspectRatio
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

export async function getPhotoData(id: string): Photo {
  const filename = `${id}.md`;
  const fullPath = path.join(photosDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const matterResult = matter(fileContents);
  const imageMetadata = matterResult.data;

  const aspectRatio = imageMetadata.width / imageMetadata.height;
  console.log(`${id} => ${aspectRatio}`);
  
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // const content = processedContent.toString();
  
  return {
    id,
    filename,
    // content,
    ...imageMetadata,
    aspectRatio
  };
}
