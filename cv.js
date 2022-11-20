



const getInfo = async () => {
    const request = new Request("cv.json");
    //fetch() starts a request and returns a promise. When the request completes, the promise is resolved with the Response object.
    //If the request fails due to some network problems, the promise is rejected.
    const response = await fetch(request);
    // await fetch(‘/cvjson’) starts an HTTP request to ‘/movies’ URL. Because the await keyword is present,
    //the asynchronous function is paused until the request completes.
    const cvObj = await response.json();
    //response.json() is a method on the Response object that lets you extract a JSON object from the response.
    //The method returns a promise, so you have to wait for the JSON: await response.json().
    console.log(cvObj)
    return cvObj;
}
const populateCv = (cvObj) => {
    let personalHtml = ``;
    cvObj.personal.forEach(element => { // for every part of personal
        //make a list with ...
        console.log(element)
        const listItem = `
        <li>
        <h4>${element.name}</h4>
        <p>
            <span class=“personal-label”>${element.label}</span><br>
            <span class=“personal-email”>${element.email}</span><br>
            <span class=“personal-phone”>${element.phone}</span><br>
            <span class=“personal-address”>${element.address}</span><br>
            <span class=“personal-postalCode”>${element.postalCode}</span><br>
            <span class=“personal-city”>${element.city}</span><br>
            <span class=“personal-country”>${element.country}</span><br>
        </p>
        </li>`;
        personalHtml += listItem;
        console.log("personalHTML", personalHtml)
        console.log(cvObj.personal);
    });
     document.getElementById('personalList').innerHTML = personalHtml;

    //const populateCv = (cvObj) => {
        let educationHtml = ``;
        cvObj.education.forEach(element => { // for every part of education
            //make a list with ...
            console.log(element)//
            const listItem = `
            <li>
            <p>
                <span class=“education-year”>${element.year}</span><br>
                <span class=“education-subject”>${element.subject}</span><br>
                <span class=“education-university”>${element.university}</span><br>
                
            </p>
            </li>`;
            educationHtml += listItem;
            console.log("educationHTML", educationHtml)
            console.log(cvObj.education);
        });
     document.getElementById('educationList').innerHTML = educationHtml;

    //const populateCv = (cvObj) => {
        let employmentHtml = ``;
        cvObj.employment.forEach(element => { // for every part of employment
            //make a list with ...
            const listItem = `
        <li>
            <p>
                <span class=“employment-time”>${element.time}</span><br>
                <span class=“employment-jobTitle”>${element.jobTitle}</span><br>
                <span class=“employment-organisationName”>${element.organisationName}</span><br>
            
            </p>
        </li>`;
            employmentHtml += listItem;
            console.log("employmentHTML", employmentHtml)
            console.log(cvObj.employment);
        });
        document.getElementById('employmentList').innerHTML = employmentHtml;

        //const populateCv = (cvObj) => {
            let languagesHtml = ``;
            cvObj.languages.forEach(element => { // for every part of languages
                //make a list with ...
                const listItem = `
            <li>
                <p>
                    <span class=“languages-motherTongue”>${element.motherTongue}</span><br>
                    <span class=“languages-fluency”>${element.fluency}</span><br>
                    <span class=“languages-veryGood”>${element.veryGood}</span><br>
                
                </p>
            </li>`;
            languagesHtml += listItem;
                console.log("languagesHTML", languagesHtml)
                console.log(cvObj.languages);
            });
            document.getElementById('languagesList').innerHTML = languagesHtml;
    }
const cvObj = await getInfo();
populateCv(cvObj);


