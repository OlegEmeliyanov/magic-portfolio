import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

import { notFound } from 'next/navigation';

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
    if (!fs.existsSync(filePath)) {
        notFound();
    }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}

/**
 * Gets the most recent project based on publishedAt date
 * Used to automatically display the latest project in the featured section
 * @returns {Object|null} Object containing title, slug, and href of the most recent project, or null if no projects exist
 */
export function getMostRecentProject() {
  const projects = getPosts(["src", "app", "work", "projects"]);
  
  if (projects.length === 0) {
    return null;
  }

  // Sort projects by publishedAt date (most recent first)
  const sortedProjects = projects.sort((a, b) => {
    const dateA = a.metadata.publishedAt ? new Date(a.metadata.publishedAt).getTime() : 0;
    const dateB = b.metadata.publishedAt ? new Date(b.metadata.publishedAt).getTime() : 0;
    return dateB - dateA;
  });

  const mostRecent = sortedProjects[0];
  
  return {
    title: mostRecent.metadata.title,
    slug: mostRecent.slug,
    href: `/work/${mostRecent.slug}`,
  };
}
