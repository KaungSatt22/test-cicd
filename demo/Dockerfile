# Stage 1: Build the WAR
FROM eclipse-temurin:21-jdk-jammy AS build

WORKDIR /usr/src/app
COPY . .

# Make gradlew executable
RUN chmod +x ./gradlew

# Build WAR
RUN ./gradlew clean build

# Stage 2: Runtime
FROM eclipse-temurin:21-jre-jammy
WORKDIR /usr/src/app

# Copy the WAR from the build stage
COPY --from=build /usr/src/app/build/libs/*.war app.war

CMD ["java", "-jar", "app.war"]

EXPOSE 8080
