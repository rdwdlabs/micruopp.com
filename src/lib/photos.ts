import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface Photo {
  id: string;
  filename: string;
  date_taken: string;
  description: string;
  width: number;
  height: number;
  aspectRatio: number; // width / height
}

const photosDirectory = path.join(process.cwd(), 'src/data/photos');

export function getSortedPhotosData(): Photo[] {
  const imageMetadataFilenames = fs.readdirSync(photosDirectory);
  const allPhotosData = imageMetadataFilenames.map((imageMetadataFilename) => {
    const id = imageMetadataFilename.replace(/\.md$/, '');
  
    const fullPath = path.join(photosDirectory, imageMetadataFilename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    const matterResult = matter(fileContents);
    const imageMetadata = matterResult.data;

    const width = imageMetadata.width;
    const height = imageMetadata.height;
    const aspectRatio = width / height;

    const filename = imageMetadata.filename;
    const date_taken = imageMetadata.date_taken;
    const description = imageMetadata.description;
  
    return {
      id,
      filename,
      date_taken,
      aspectRatio,
      width,
      height,
      description
    };
  });

  return allPhotosData.sort((a, b) => {
    if (a && b && a.date_taken > b.date_taken) {
      return -1;
    } else {
      return 1;
    }
  });
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

export function getPhotoData(id: string): Photo {
  const imageMetadataFilename = `${id}.md`;
  const fullPath = path.join(photosDirectory, imageMetadataFilename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const matterResult = matter(fileContents);
  const imageMetadata = matterResult.data;

  const width = imageMetadata.width;
  const height = imageMetadata.height;
  const aspectRatio = width / height;

  const filename = imageMetadata.filename;
  const date_taken = imageMetadata.date_taken;
  const description = imageMetadata.description;
  
  return {
    id,
    filename,
    date_taken,
    aspectRatio,
    width,
    height,
    description
  };
}
