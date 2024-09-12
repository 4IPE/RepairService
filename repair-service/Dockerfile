FROM amazoncorretto:21-alpine-jdk
VOLUME /tmp
COPY target/repair-service-0.0.1-SNAPSHOT.jar repair-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "/repair-service-0.0.1-SNAPSHOT.jar"]
