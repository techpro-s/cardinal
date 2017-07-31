FROM grails-base-centos
MAINTAINER Roberto Saldana <rob.salda@gmail.com>

# Copy App files
COPY app /app
WORKDIR /app

# Get app dependencies
RUN ./gradlew dependencies
RUN ./gradlew build

COPY start-app.sh /app
RUN chmod +x start-app.sh

# Add start command
CMD ["./start-app.sh"]
