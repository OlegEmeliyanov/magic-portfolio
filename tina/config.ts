import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/app/blog/posts",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "summary", label: "Summary" },
          { type: "datetime", name: "publishedAt", label: "Published At" },
          { type: "string", name: "tag", label: "Tag" },
          { type: "string", name: "image", label: "Image" },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
      },
      {
        name: "work",
        label: "Work Projects",
        path: "src/app/work/projects",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "datetime", name: "publishedAt", label: "Published At" },
          { type: "string", name: "summary", label: "Summary" },
          { type: "string", name: "link", label: "Link" },
          { type: "string", name: "images", label: "Images", list: true },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          { type: "object", name: "team", label: "Team", list: true, fields: [
            { type: "string", name: "name", label: "Name" },
            { type: "string", name: "role", label: "Role" },
            { type: "string", name: "avatar", label: "Avatar" },
            { type: "string", name: "linkedIn", label: "LinkedIn" },
          ] },
        ],
        ui: {
          router: ({ document }) => `/work/${document._sys.filename}`,
        },
      },
    ],
  },
});
