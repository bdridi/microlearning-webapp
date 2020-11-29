# Workcale Microlearning webapp

Microlearning webapp is the webapp microservice which is a part of the workcale microlearning project.

## Service overview

- Call the microlearning api and list the random wiki pages in home page.
  
### Build docker image

`yarn build`<br>
`docker build -t microlearning-webapp .`

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br />

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!