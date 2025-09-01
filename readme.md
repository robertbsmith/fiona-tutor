# Fiona Hennessy's Geography Tutoring Blog

This repository contains the source code for Fiona Hennessy's Geography Tutoring blog, hosted on GitHub Pages and built with Jekyll.

## Table of Contents
- [Fiona Hennessy's Geography Tutoring Blog](#fiona-hennessys-geography-tutoring-blog)
  - [Table of Contents](#table-of-contents)
  - [Creating New Blog Posts](#creating-new-blog-posts)
  - [Local Development](#local-development)
  - [Deployment](#deployment)
  - [Preventing Jekyll Processing](#preventing-jekyll-processing)

## Creating New Blog Posts

1. Create a new Markdown file in the `_posts` directory.
2. Name the file following this format: `YYYY-MM-DD-Title-Of-Your-Post.md`
3. Add the following front matter at the top of the file:

   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   description: "A brief description of your post"
   date: YYYY-MM-DD
   author: Fiona Hennessy
   ---
   ```

4. Write your blog post content in Markdown below the front matter.

## Local Development

To run the site locally:

1. Open the devcontainer in Visual Studio Code.
2. In the terminal, run:
   ```
   jekyll serve
   ```
3. Open a browser and go to `http://localhost:4000`

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. Ensure all changes are committed and pushed to deploy updates.

## Preventing Jekyll Processing

To prevent Jekyll from processing this README file:

1. Create a file named `.nojekyll` in the root of your repository if it doesn't already exist.
2. In your `_config.yml` file, add the following line:

   ```yaml
   exclude: ["README.md"]
   ```

This will ensure that Jekyll ignores the README.md file during the build process, while still displaying it on GitHub.
