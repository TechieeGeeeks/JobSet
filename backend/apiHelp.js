const jsonForCreateJob = {
        "title": "Front End Developer",
        "description": "A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. They are usually supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developers do.",
        "salary": "30000",
        "location": "Mumbai",
        "company": "Rizzling Devs",
        "contact": 9967490617,
        "website": "https://jobset.onrender.com",
        "jobType": "64ac54feda23f13808f3606b"
}

const jsonForSignUpAsUser = {
    "firstName": "Swayam",
    "middleName": "Rajkumar",
    "lastName": "Karle",
    "email":"swayamkarle28@gmail.com",
    "password": "SwAyAm",
    "role":0,
    "gender":"Male",
    "city":"Thane",
    "state":"Maharashtra",
    "dateOfBirth":"2002-08-28",
    "contact":"9967490887"
}

const jsonForSignUpAsAdmin = {
    "firstName": "Swayam",
    "middleName": "Rajkumar",
    "lastName": "Karle",
    "email":"swayamkarle28@gmail.com",
    "password": "SwAyAm",
    "role":1,
    "gender":"Male",
    "city":"Thane",
    "state":"Maharashtra",
    "dateOfBirth":"2002-08-28",
    "contact":"9967490887"
}

const jsonForSignInAsBoth={
    "email":"swayamkarle2@gmail.com",
    "password": "SwAyAm"
}

const jsonForCreateJobType = {
    "jobTypeName": "Web3 Researcher",
    "requirements": "Dimag Hona Chahiye"
}

const jsonForeditUser = /*Only Include Fields you wanna change dont need to edit whole profile*/ {
        "firstName": "Sam",
        "lastName": "Karan"
}

const allApis = {
    AUNTHENTICATION: { 
        signup: "POST" + "http://localhost:8000/api/signup"  ,
        signin : "POST" + "http://localhost:8000/api/signin" ,
        logout : "GET" + "http://localhost:8000/api/logout",
    },
    USER_OPS: {
        getuserprofile: "GET" + "http://localhost:8000/api/me",
        getsingleuser: "GET" + "http://localhost:8000/api/user/64a493828c10123518441735",
        edituser: "PUT" + "http://localhost:8000/api/user/edit/64a493828c10123518441735",
        jobHistory: "POST" + "http://localhost:8000/api/user/jobhistory"
    },
    ADMIN:{
        allusers: "GET" + "http://localhost:8000/api/allusers",
        deleteuser: "DELETE" + "http://localhost:8000/api/user/delete/64a541915434422cc4ab111e",
        alladmins: "GET"+ "http://localhost:8000/api/alladmins" 
    },
    HR:"Not Even Decided What to include and what not to",
    JOBOPS:{
        createjobtype: "POST" + "http://localhost:8000/api/type/create/",
        updateJobtype: "PUT" + "http://localhost:8000/api/type/update/64ac54feda23f13808f3606b",
        getalljobtypes: "GET" + "http://localhost:8000/api/type/jobs/",
        deleteJobType: "DELETE" + "http://localhost:8000/api/type/delete/64add11fae5db20780753d80",
        createjob: "POST" + "http://localhost:8000/api/job/create",
        getalljobs: "GET" + "http://localhost:8000/api/jobs/show?pageNumber=1&keyword=&cat=&location=",
        singleJob: "GET" + "http://localhost:8000/api/jobs?pageNumber=1&keyword=&cat=&location=",
        updateJob: "PUT" + "http://localhost:8000/api/job/update/64ac68db2457e11d186b0903",
        deleteJob: "DELETE" + "http://localhost:8000/api/job/delete/64adb47210aaa507d4d54a6b"
    }


}

// USER CAN DELETE HIS OWN PROFILE {Do We Really Need THis?} 