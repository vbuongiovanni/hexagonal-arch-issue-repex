# hexagonal-arch-issue-repex

## Context

I am working through NestJs's advanced architecture... Evidently, it it is a bit over my head. I am trying to implement a hexagonal architecture, but I am running into an issue where the controller is not receiving the request object, or any parameters.

## Issue Reproduction

Attempt to make a post request (with or without a parameter) and observe the console logs show that the alarms.controller reads both (as well as the request object) as undefined. This is despite the fact that both ARE defined, as shown in the middleware.

curl command for endpoint with parameter:

```
curl -X POST http://localhost:3000/alarms -H "Content-Type: application/json" -d '{"name": "Test Alarm", "severity": "high"}'
```

curl command for call without parameter:

```
curl -X POST http://localhost:3000/alarms/123 -H "Content-Type: application/json" -d '{"name": "Test Alarm", "severity": "high"}'
```

Including a screenshot of logs from the console for convenience.

Thank you in advance for any help or input you can provide.
