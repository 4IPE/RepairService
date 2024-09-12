FROM amazoncorretto:21-alpine-jdk
VOLUME /tmp
COPY target/repair-gateway-0.0.1-SNAPSHOT.jar repair-gateway-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "repair-gateway-0.0.1-SNAPSHOT.jar"]
