# Netflix GPT
- Create React App
- Configured TailwindCSS
- Setup routing (npm i -D react-router-dom)
- Header
- Routing of App
- Build Login form
- Build Sign Up form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying the app to prod
- Create SignUp User account
- Implement Sign In user Api
- Once the user Sign In or Sign Up, add the user to Redux store
- Create redux store with userSlice
   - Create a store
   - Create a slice
   - Add the slice reducer into the store
   - Provide the store in App.js

#Features
- Login/Sign Up
    - Sign In / Sign Up Form
    - Redirect to Browse Page
- Browse Page (Comes only after Authentication)
    - Header
    - Main Movie
        - Trailer in background
        - Title & Desc
        - Movies suggestions
            - Movie Lists

- NetflixGPT
    - Search Bar
    - Movie Suggestions


- Firebase Commands
    1. `npm install firebase`
    2. Install firebase CLI - `npm install -g firebase-tools`
    3. Firebase login - `firebase login`
    4. Initialize Firebase - `firebase init` then select : 
        ✔ Are you ready to proceed? Yes
        ✔ Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your 
        choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
        ✔ Please select an option: Use an existing project
        ✔ Select a default Firebase project for this directory: movieverse-1e3e2 (Movieverse)
        Hosting Setup
        ✔ What do you want to use as your public directory? build
        ✔ Configure as a single-page app (rewrite all urls to /index.html)? No
        ✔ Set up automatic builds and deploys with GitHub? No
    5. Run firebase - `npm run build`
    6. Deploy command - `firebase deploy`

- Redux setup
  1. `npm i -D @reduxjs/toolkit`
  2. `npm i react-redux`