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

    const width = imageMetadata.width;
    const height = imageMetadata.height;
    const aspectRatio = width / height;

    const description = imageMetadata.description;
  
    return {
      id,
      filename,
      aspectRatio,
      width,
      height,
      description
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

export async function getPhotoData(id: string): Promise<Photo> {
  const filename = `${id}.md`;
  const fullPath = path.join(photosDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const matterResult = matter(fileContents);
  const imageMetadata = matterResult.data;

  const width = imageMetadata.width;
  const height = imageMetadata.height;
  const aspectRatio = width / height;

  const description = imageMetadata.description;
  
  return {
    id,
    filename,
    aspectRatio,
    width,
    height,
    description
  };
}
