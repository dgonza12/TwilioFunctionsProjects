#Twilio Functions Projects

These are solutions or just how to do somethings using twilio's API with functions and other projects.
Each child folder will be an individual solution but it's info will be in this READ.MD

## Configuration
(https://www.twilio.com/console/runtime/functions/configure)  
* Check in `Enable ACCOUNT_SID and AUTH_TOKEN`
### Environmental Variables
* `RUNTIME_DOMAIN` your runtime domain
* `TWILIO_WORKSPACE_SID` your workflow sid
* `CALL_FROM_NUMBER` twilio number you own that can make calls

## SIMPLE CALL SURVEY
Perform a call to do a survey

Sample URL: `https://<RuntimeDomain>/PerformSurvey?phone=<NumberToCall>&worker=danny`  
This has 2 Params:
* phone
* worker (just a name here, you can change to what you want based on how you will process).

Files:
* performSurvey
    * upload to functions and set path as `/PerformSurvey`
    * also change the url to be the one of the uploaded TWIML
* processSurvey
    * upload to functions and set path as `/ProcessSurvey`
    * update as needed to handle info
 * gatherInput
    * upload to twiml bins.
    * update the URL for action; replace runtime domain   
    