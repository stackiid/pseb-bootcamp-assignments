# PSEB Bootcamp Assignments

Coursework from the PSEB Bootcamp: a collection of static web pages built with HTML5 and CSS3, organized as numbered activity folders. Every project is a standalone page that opens directly in a browser with no build step.

## Table of Contents

- [Projects](#projects)
- [Repository Structure](#repository-structure)
- [Technology Overview](#technology-overview)
- [Working With Individual Projects](#working-with-individual-projects)
- [About](#about)

## Projects

The repository currently contains 5 projects across 4 numbered activity folders. `activity_4` holds two separate webpages. Only the two projects in `activity_4` include their own `README.md`; the others are documented here.

| Activity | Project                                                                    | Description                                                                                                                                                                                      | Styling      | Links                                                                                                                                                                                                                                                     |
| -------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | [Developer Portfolio](./activity_1/)                                       | Single-page personal portfolio with about, skills, education, projects, interests, and contact sections, using lists, a table, an image, and a contact form.                                     | Internal CSS | [index.html](./activity_1/index.html) / [Preview](./activity_1/OUTPUT.png)                                                                                                                                                                                |
| 2        | [Developer Portfolio with Multimedia](./activity_2/)                       | Extension of the activity 1 portfolio that adds a Multimedia section with embedded video and audio players and a matching navigation link.                                                       | Internal CSS | [index.html](./activity_2/index.html) / [Preview](./activity_2/OUTPUT.png)                                                                                                                                                                                |
| 3        | [BISE Peshawar Result Transcript](./activity_3/)                           | Static layout of an intermediate result transcript with candidate information, a subject-wise marks table with grouped headers, a result summary, a verification form, and an instructions list. | Internal CSS | [index.html](./activity_3/index.html) / [Preview](./activity_3/OUTPUT.png)                                                                                                                                                                                |
| 4        | [Forge Fitness](./activity_4/Webpage%201%20-%20Forge%20Fitness/)           | Responsive gym landing page with hero, training programs, facility feature, opening schedule, and contact call to action.                                                                        | External CSS | [README](./activity_4/Webpage%201%20-%20Forge%20Fitness/README.md) / [Notes](./activity_4/Webpage%201%20-%20Forge%20Fitness/ASSIGNMENT-NOTES.txt) / [Preview](./activity_4/Webpage%201%20-%20Forge%20Fitness/Forge%20Fitness.png)                         |
| 4        | [Little Lemon Cafe](./activity_4/Webpage%202%20-%20Little%20Lemon%20Cafe/) | Responsive cafe landing page with hero, brand story, menu highlights, quote feature, and visit details.                                                                                          | External CSS | [README](./activity_4/Webpage%202%20-%20Little%20Lemon%20Cafe/README.md) / [Notes](./activity_4/Webpage%202%20-%20Little%20Lemon%20Cafe/ASSIGNMENT-NOTES.txt) / [Preview](./activity_4/Webpage%202%20-%20Little%20Lemon%20Cafe/Little%20Lemon%20Cafe.png) |

The activity folders are numbered in order, and new activities are added as additional folders in the repository root.

## Repository Structure

```text
PSEB-Bootcamp-Assignments/
├── activity_1/
│   ├── index.html
│   ├── OUTPUT.png
│   └── random-boy.jpg
├── activity_2/
│   ├── index.html
│   ├── OUTPUT.png
│   └── random-boy.jpg
├── activity_3/
│   ├── index.html
│   ├── OUTPUT.png
│   └── muhammad-ahmad-portrait.jpg
├── activity_4/
│   ├── Webpage 1 - Forge Fitness/
│   │   ├── styles/style.css
│   │   ├── ASSIGNMENT-NOTES.txt
│   │   ├── OUTPUT.png
│   │   ├── index.html
│   │   └── README.md
│   └── Webpage 2 - Little Lemon Cafe/
│       ├── styles/style.css
│       ├── ASSIGNMENT-NOTES.txt
│       ├── OUTPUT.png
│       ├── index.html
│       └── README.md
└── README.md
```

## Technology Overview

- Languages: HTML5 and CSS3. No JavaScript, package manifests, or build tooling are present.
- Styling approach: activities 1 to 3 use internal CSS in a `<style>` element. Activity 4 uses external stylesheets linked from `styles/style.css`.
- External services: activity 4 loads Google Fonts and Pexels photography, and activity 2 embeds a video from `youtube-nocookie.com`. These pages need an internet connection to render fully.
- Workflow: Git and GitHub.

## Working With Individual Projects

There is no root-level installation or build command. Each project is independent.

1. Pick a project from the [Projects](#projects) table.
2. Open its folder.
3. Open `index.html` in a modern browser.
4. For activity 4, read the project's `README.md` and `ASSIGNMENT-NOTES.txt` for design notes, CSS method comparisons, and image sources.

## About

Ubaid Ahmad

- GitHub: [@stackiid](https://github.com/stackiid)
- Portfolio: [stackiid.github.io/portfolio](https://stackiid.github.io/portfolio/)
