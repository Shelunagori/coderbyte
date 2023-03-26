# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. We need to create custom id for agents in the Facilities table.
   Criteria:
   i) Create new filed in called "custom_id" in Facilities table.
   ii) From Facilities UI we can save and update custom ids for each agent.
   iii) In case we need to import custom ids in bulk we can add upload CSV option also for multiple agents at once.
   iv) We need to validate data and display any errors to the user.

   Implementation Details:
   i) Create new filed in Facilities table call "custom_id".
   ii) We need to add new input (textbox) field on Facility's UI to add custom id.
   iii) In case of bulk upload we need to add new UI for upload CSV file. Containing custom ids For Agents and Also allow user to download sample file for bulk upload.
   iv) If we have any error. It should be displayed to the user. Also In case of bulk upload it should fail.
   v) Validation like: required, unique, custom id already exists etc.
   vi) In valid case data should be inserted into the Facilities table.

   Effort/Time Estimate: 8 hours

2. Update shift table for storing custom ids for agent.
   Criteria:
   i) Create new filed called facility_custom_id in Shifts table.
   ii) Whenever we create any shift. The facility_custom_id of the Agent. Assigned to the Shift is set to the custom id of the Facility's Agent.

   Implementation Details:
   i) Create facility_custom_id filed in Shifts table.
   ii) Whenever we create any Shift, we need to update the facility_custom_id of the assigned Agent to the custom id of the Facility's Agent.

   Effort/Time Estimate: 4 hours

3. Modify getShiftsByFacility function to include facility_custom_id in returned
   Criteria:
   i) getShiftsByFacility function now returns the facility_custom_id for Agent assigned to a Shift.

   Implementation Details:
   i) We only need to update SELECT query to include facility_custom_id field.
   ii) Add facility_custom_id in return variable.

   Effort/Time Estimate: 1 hours

4. Update generateReport function to use facility_custom_id.
   Criteria:
   i) Now we can use facility_custom_id instead of the database id in generateReport function.

   Implementation Details:
   i) We only need to update SELECT query to include facility_custom_id field.
   ii) generateReport function should be updated to use the facility_custom_id field.

   Effort/Time Estimate: 1 hours
