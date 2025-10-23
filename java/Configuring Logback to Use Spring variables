1) You must rename `logback.xml` to `logback-spring.xml`
2) Now in your configuration file, you can define `springProperty`tag

``` xml
<?xml version="1.0" encoding="UTF-8" ?>
<configuration debug="false">

    <!-- Defined in the env and exposed in resources\application.yaml and image_resources\application.yaml -->
    <springProperty scope="context" name="HOST_NAME" source="host.name"/>

    <appender name="SECURITY_LOG" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!--
            Attempts to each location in order. By default, ${java.io.tmpdir} maps to
            Linux:   /tmp/
            Windows: C:\Users\<USERNAME>\AppData\Local\Temp\
        -->
        <file>${SECURITY_LOG_DIR:-${root.dir:-${java.io.tmpdir}}}/security.${HOST_NAME}.ndjson</file>
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <pattern>%msg%n</pattern>
        </encoder>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${SECURITY_LOG_STORAGE_DIR:-${root.dir:-${java.io.tmpdir}}}/security.${HOST_NAME}.%d{yyyy-MM-dd}.ndjson</fileNamePattern>
            <maxHistory>30</maxHistory>
            <totalSizeCap>3GB</totalSizeCap>
            <cleanHistoryOnStart>true</cleanHistoryOnStart>
        </rollingPolicy>
    </appender>

    <!-- Additivity needs to be set to "false" otherwise these logs will be propagated into CONSOLE -->
    <logger name="SecurityLogger" level="INFO" additivity="false">
        <appender-ref ref="SECURITY_LOG" />
    </logger>

</configuration>
```
