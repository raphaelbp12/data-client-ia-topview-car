# dotnet-core-flicker-project-client

This project consists in a small App written in ReactJS that consumes a [Proxy API](https://github.com/raphaelbp12/dotnet-core-flicker-project-server) of [Flickr Feed](https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=nature,space).

Due the time limitation, this app has the components being constructed in `App.tsx` file. If the project grows, it would have a router there, organizing it better.

# API Port
The **API BASE URL** is hardcoded inside `FeedService.ts`.

# TypeScript
The TypeScript is important to a JS project in order to give more robustness to the codebase when the project grows.

# Running the App (dev mode)

First, run `npm i` and then `npm start` to run the app in the dev mode.
It will open [http://localhost:3000](http://localhost:3000).

# Running the Docker
Run these commands at the root project folder:
### building the image
`docker build --pull --rm -f "dockerfile" -t dotnetcoreflickerprojectclient:latest "."`
### running the image
`docker run --rm -it  -p 80:80/tcp dotnetcoreflickerprojectclient:latest`

# Future Work

* **Config Files** - this app has the API URL hardcoded inside the service. It is mandatory to have this kind of variable set in Environment Variables.
* **e2e Tests**
* **Unit tests**
* **Picture Modal** - when the user clicks on an image, it should open a modal showing the entire image and the post info.
* **Improve User Feedback** - it is important to show errors feedback and an empty page alert to the user.