# Cardinal

This project is an informative webpage that allows the users to use it as a blog and to load events and challenges.

## Technologies

Cardinal uses Grails and React for the Backend and Frontend.

### Install Grails

To install grails please follow this instructions:

- https://grails.org/download.html

Currently we are using this version:

```
grails -version
| Grails Version: 3.2.9
| Groovy Version: 2.4.10
| JVM Version: 1.8.0_131
```

## Run Cardinal

To start using Cardinal use the following commands.

### Frontend

The command to run the Frontend is:

- `./gradlew client:bootRun`

This will start it on `localhost:3000`

### Backend

The command to run the Backend is:

- `./gradlew server:bootRun`

This will start your server on `localhost:8080`


### Run both environments

If you want to run both in parallel you can use:

- `./gradlew bootRun -parallel`
