FROM eclipse-temurin:21-jre-jammy

WORKDIR /usr/src/app
# Copy the WAR from the build stage
COPY  /build/libs/demo-0.0.1.war app.war

CMD ["java", "-jar", "app.war"]

EXPOSE 8080
