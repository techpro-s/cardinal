FROM grails-dependencies
MAINTAINER Roberto Saldana <rob.salda@gmail.com>

RUN rm -fr /app

# Copy App files
COPY app /app

ENV GRADLE_OPTS="-Xmx64m -Dorg.gradle.jvmargs='-Xmx256m -XX:MaxPermSize=64m'"

# Add start command
CMD ["./gradlew", "-Dgrails.env=prod", "bootRun", "-parallel"]
