import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/data/posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((filename) => {
    const id = filename.replace(/\.md$/, '');
  
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    const matterResult = matter(fileContents);
    console.log(matterResult.data);
    
    let article = undefined;
    const isPublished = matterResult.data['Published'];
    const date = matterResult.data['CreatedAt'];
    if (isPublished) {
      article = {
        id,
        date,
        ...matterResult.data,
      };
    }    

    return article;
  })
  .filter(
    (article => article !== undefined)
  );

  return allPostsData.sort((a, b) => {
    if (a && b && a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const matterResult = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const content = processedContent.toString();
  
  return {
    id,
    content,
    ...matterResult.data,
  };
}
