
# Introduction

A Responsive Result Website developed in ReactJS and ExpressJS with the help of Vite and Tailwind CSS along with the integration of MongoDB Database for fetching students' results.

Supports on the go Mark Sheet / Brochure generation on the frontend using reactPdf module. Easy to customize and supports Result Announcement beforehand.


## Quick Glance
![Supported Platforms](https://imgsaver.com/images/2024/05/02/RNG-GCR-ReadMe-Image.png)


## Deployment
### Local Edits
- Fork this repository first.
- Make a copy of backend/.env.example as .env
- Further Add required values into the .env file.
- Edit the backend/constants/constants.js with your MongoDB Database name and Collection name.
- ⚠ **Note:** In order to customize your PDF, Add all your PDF Images to `vite/src/assets/scoreCard/` and edit the `vite/src/components/pdf.jsx` according to your requirements. 

### Vercel Part
- Once your changes are commited, Load this repository into vercel and first deploy the backend in order to get the API up and running. Select `backend` folder and it will auto detect expressJS. Add the environment variables into vercel. This should be it for the backend part.
- To deploy the frontend load the `vite` folder into vercel and it will automatically detect ViteJS framework.

## Supported Features

- Beforehand Announcement.
- Customize Mark Sheet / Brochure Generation on Frontend.
- Quick Result Fetching.
- Responsive Frontend (Supports almost all Mobile Phones Screens).
- Easy to Deploy.
- Supports Multiple Exams Results.

## Demo

Live Website Demo - [Click Here](https://rngpit.vercel.app/)

## Authors

- [@chauhantirth](https://www.github.com/chauhantirth)

> Note: Give a star to this repository if you find this project interesting !!