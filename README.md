# Let's roll one - application for online RPG sessions

## About LRO

LRO is an application that allows me to play RPG games online with my friends. I started working on it in 2021 and since then it has been continuously developed. The first version was created very quickly so that we could start playing. The second version was created to introduce significant changes to the UI, so to create it I switched from pure JavaScript to the React library. 
I started working on the latest version (you are currently on its repo) to improve the reusability and maintainability of the code, introduce changes suggested by users and introduce a better, more reliable backend.

## LRO versions

This repo containts the newest version which is currently in early developement state. Previous versions:

- https://github.com/kajetan-szczurowski/LRO-old-version (first version I used this for playing with friends for over a year before switching to newer project).
- https://github.com/kajetan-szczurowski/LRO-new-version (currently in use frontend made in React JS and Vite).
- https://github.com/kajetan-szczurowski/FabulaUltimaBackend (currently in use backend made in Node JS and Express).
- 
## Plans for this newest version

- Proper user auth made with Clerk;
- managing multiple sessions and campaings through one server;
- multiplayer game-like experience: lobby, joining sessions, private messages;
- creating and managing campaings through user interface;
- robust REST API for managing characters, campaings and user's preferences;
- interactive game map with layers and users drawings. 
 
## Tech Stack

- Vite;
- TypeScript;
- React;
- Clerk;
- MongoDB;
- Python;
- Flask.
