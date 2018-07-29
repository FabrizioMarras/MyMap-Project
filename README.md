/* ---------------------------------------------------------------------------------------------------------------------------------------
MAPP - a map application by Fabrizio Marras and Alessandro Vozza. 
--------------------------------------------------------------------------------------------------------------------------------------- */

Searching users globally - Input in the search field any text or number and a list of users will be returned and their location will appear on a world map.

    /* USER LIST - JSON FILE 
    ------------------------ */
    
    The list of users needs to be in a .json file.
    Each user will contain at least these keys:

       [
         {
          "name" : "Name lastName",
          "shortname" : "Name_LastName",
          "postCode" : "number"
          "city" : "cityName",
          "country": "name of the country"
          "department" : "jobDepartment",
          "job" : "Position",
          "description" : "Job Description",
          "contact" : "email@email.com"
          }
        ]
        
        Example: 
        
        [
         {
          "name" : "Fabrizio Marras",
          "shortname" : "Fabrizio_Marras",
          "postCode" : "1234AB"
          "city" : "Amsterdam",
          "country": "Netherlands"
          "department" : "Design & Development",
          "job" : "Fronend Developer",
          "description" : "Develop and Design of website, 2D and 3D animation videos.",
          "contact" : "fabrizioi@marras.com"
          }
        ]
        
**NOTE: The "shortname" key will turn useful in case we need to link images to each user and we  give names to the images such as: name_lastname_tn.jpg or Name_lastname.jpg for thumbnail and normal images respectively */

STEP 00: Create an input section where the users can register to the list...Check how to create a JSON file from a web-form.

STEP 01: Build a search app to search the users.

STEP 02: The postcode address of the returned users is shown.

STEP 03: The location of the users associated with the returned postcodes is displayed on the map.

**NOTE: The project will start from an alrerady existing JSON file therefore the STEP 00 will be the last one on the list.
