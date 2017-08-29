FROM grails-dependencies
MAINTAINER Roberto Saldana <rob.salda@gmail.com>

RUN rm -fr /app

# Copy App files
COPY app /app

# Add start command
CMD ["./gradlew", "-Dgrails.env=prod", "bootRun", "-parallel"]
