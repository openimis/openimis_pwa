# openIMIS Project - BaselHack wish list

Offline insurance app.

**NOTE: This document is a suggestion for developments during the hackathon. Any other suggestions of functionalities you consider interesting for and in the context of openIMIS are welcomed. Please share your thoughts with us!** 

Our main objective at the BaselHack is to start the development of a new client application for openIMIS system that can be used on any screen type (mobile, tablet and desktop) and in any Internet connectivity conditions (online and offline). 

We would like to develop a Progressive Web Application that :

 - works on Mobile Devices (phone and tablets) and Web Browsers
   (Responsive design => library to be selected) 
 - Implements the JWT
 - token based authentication Implements authority and manage what is to
   be displayed and accessed (menu, pages, etc.) based on user roles
 - Include the management of the HTTP codes / responses (4XX, 3XX, 2XX,
   etc) 
 - Manages GET and POST requests when the device is OFFLINE 
 - Manages the Family entity (list all Families (number of insurees per family),
   view and edit a Family, delete a Family)

The server side new API (under development) to be used is accessible at https://baselhack.swisstph-mis.ch/RestApi and is documented through the Swagger template accessible at https://baselhack.swisstph-mis.ch/RestAPI/api-docs . 

If you want to see the openIMIS platform you can access the Web Application at https://baselhack.swisstph-mis.ch . This is also good to validate the successful execution of API calls. 

## User Interface

The openIMIS User Interface should work on any screen type like mobile, tablet and desktop computers. Since we don’t expect the UI to be fully finished over the weekend, we would like to aim for a basic interface that manages the 3 types of screens. We would like to have the screens to manage the Family entity that will help us to continue the work with other entities:

 - list all Families (GET /api/family)
 - view one Family with the list of Insuree (family members) (GET
   /api/family/{insureeId})
 - add one Family (POST /api/family)
 - edit one Family (PUT /api/family)
 - delete one Family (DELETE /api/family/{familyId})

Among the Family management screens, we would like to have the main layout showing the current user with a menu to access different functionalities, screens for login, user profile, and the associated CSS style to be used on future developments.

We expect to have a Responsive Design that adapts the screen on the device’s size. The selection of the framework (Bootstrap, Material Design, ...) is open for discussion. 

## Form validation

The server side API is managing the validation of the received data and returns error messages under the format “number:message”.  Ex. “1:The insuree number is already registered”. We wish to have a basic functionality in order to add the error messages to the respective inputs.

One issue will be the validation in case of offline use. Then, a basic validation of inputs would be nice to have. 

## JWT based authentication

The openIMIS REST API is using JWT base authentication. The JWT is retrieved through the LOGIN screen which calls POST /api/login with the body { "username": "string", "password": "string"}. The response to this call will be { "token": "string", "expires": "datetime"}. The token has to be stored into a permanent storage to be retrieved on every call until the expiry date is reached. 

Here is an example of a JWT: 

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiRW5yb2xsbWVudE9mZmljZXIiLCJNYW5hZ2VyIiwiQWNjb3VudGFudCIsIkNsZXJrIiwiTWVkaWNhbE9mZmljZXIiLCJTY2hlbWVBZG1pbiIsIklNSVNBZG1pbiIsIlJlY2VwdGlvbmlzdCIsIkNsYWltQWRtaW4iLCJDbGFpbUNvbnRyaWIiXSwiZXhwIjoxNTQzMDU3NDM0LCJpc3MiOiJodHRwOi8vb3BlbmltaXMub3JnIiwiYXVkIjoiaHR0cDovL29wZW5pbWlzLm9yZyJ9.RtVExJQpZUpbOxXZM3I4dGMzs4RIGT2PooLK8DfzSgs

Here is the payload of the decoded JWT example: 

    {
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": "Admin",
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": [
        "EnrollmentOfficer",
        "Manager",
        "Accountant",
        "Clerk",
        "MedicalOfficer",
        "SchemeAdmin",
        "IMISAdmin",
        "Receptionist",
        "ClaimAdmin",
        "ClaimContrib"
      ],
      "exp": 1543057434,
      "iss": "http://openimis.org",
      "aud": "http://openimis.org"
    }


Moreover, to facilitate the developments of new functionalities, we would like to have the functionality to intercept the HTTP.S requests in order to add the Authorization: Bearer <Token> header before transferring to the API. The login request does not require an authorization header. 

A LOGOUT functionality should be added to the application in order to delete the stored JWT and redirect the user to the login screen. 

## Implements authority based on user roles

From the decoded payload we can retrieve the username and the different openIMIS roles. We would like to have an example of using the roles to manage application access to different pages and/or hiding menus/buttons, etc. 

## Management of the 4xx/5xx responses
The application should manage error responses:
- 400 for request incomplete or wrong based on the response to show the error to the user
- 401 if the JWT is missing, is wrong or expired to send the user to the login page and to return to the previous page after success login 
- 500 internal error to show an error message: “An error occurred. Please try later.” 

## Manages GET, POST and PUT requests when the device is OFFLINE
One of the issues of using a Web Application is its usage when there is no Internet connectivity. openIMIS has been developed to be used in low and middle income countries where Internet connectivity is very unpredictable. This is the reason why we propose to implement a Progressive Web Application that integrates a Service Worker to manage the offline connectivity state of the application. 

Although PWAs are managing the GET requests by caching the previous requests into a permanent storage, the POST and PUT requests are not managed. As the openIMIS client will also be used to enrol new family directly in the field, we should be able to record POST/PUT requests into the permanent storage and to deal with them as soon as there is Internet connectivity. 

The DELETE requests will not be allowed when the application is offline. 

## Caching of pages and information 
The application is supposed to be used by Enrolment Officers in the field where Internet connectivity is unstable or missing. For each enrolment, implementation defined information is required in order to select the correct data (like Location, FamilyType, EducationLevel, etc.). This information can be retrieved though the API call GET /api/master. The storage of such information is required and should be dealth with on the first login for example in order to ensure the data is available later on when there is no connectivity. 

The same concern applies also to pages as an Officer could login when online but use the application only in the field when offline. 

## Accessing the device’s hardware
The registration of new insuree requires to take his/her picture. Although the registration of the picture is not yet implemented into the API, we wish to have the basic functionality that will allow us to choose a picture from the device storage or to take another picture and attach it to an insuree. 

Every insuree receives a card that has the insuree’s information along with a QR code containing the insuree’s number. We would like to include a library to manage QR code based on a picture taken with the device. It will be used when registering a new insuree (Family) by assigning his number directly from the future card to be given to the insuree (in the registration form, a button will be present that will allow to take the QR picture, decode it and adding the number to the insuree’s number field).

## Pushing notifications
openIMIS system is dealing with insurances that have expiry dates (usually 1 year of coverage). The renewals are not automatically and the Officers dealing with enrollments have to be notified when renewal dates approaches for them to take contact with the Insurees and propose them to renew their policies. 

This is where pushing notification came in to help us to easily get the Officers’ attention. We wish to have a basic implementation of such a service. 

## Standalone application 
One of the feature of PWA is to run as standalone application (even if it is executed through a browser). We wish to integrate a manifest file that will allow for easy installation on the device’s screen with the openIMIS name and icon (identity to get from https://openimis.atlassian.net/wiki/spaces/OP/pages/195756039/Corporate+Identity). 

## Further collaboration
We wish to attract your attention that your implication in openIMIS development may not be limited to the BaselHack. We will be glad to add you to the list of contributors of our open source solution and continue the collaboration even after the event. Please tell us if you wish to continue to work on openIMIS to bring the system to even higher levels.


## Annexes
### User logins

Admin user: admin / admin123

Enrolment officer: enrolment.officer / XBqR2WpIMUB

### Tools we use

Insomnia https://insomnia.rest  


