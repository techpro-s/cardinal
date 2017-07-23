FROM mozart/grails:3
MAINTAINER Roberto Saldana <rob.salda@gmail.com>

# Copy App files
COPY . /app

# Run Grails dependency-report command to pre-download dependencies but not 
# create unnecessary build files or artifacts.
# RUN grails dependency-report
WORKDIR /app
# Set Default Behavior
ENTRYPOINT ["./gradlew"]
#CMD ["run"]
CMD ["bootRun", "-parallel"]
