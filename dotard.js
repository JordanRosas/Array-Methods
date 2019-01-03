// Lightning Exercise: Add another section sibling to the current one and use object dot notation to 
// display each company's city. Use square bracket notation to display the state code. Use dynamic square
//  bracket notation to add the zip code.


/*=============================================================
TO SEE BELOW RESULTS COMMENT OUT LINE 31 THROUGH 56
======================================================================*/

//forEach() method
let outputElement = document.querySelector("#output")
outputElement.innerHTML += "<h1>Active Businesses</h1>"

businesses.forEach(business =>{
  let addressZip = "addressZipCode"
  outputElement.innerHTML += `
  <h2>${business.companyName}</h2>
  <section>
    ${business.addressFullStreet}
  </section>
  <section>
    ${business.addressCity} ${business["addressStateCode"]} ${business[addressZip]}
  </section>
  `
  outputElement.innerHMTL += "<hr/>"
})
/*=============================================================
TO SEE BELOW RESULTS COMMENT OUT LINE 7 THROUGH 21 
======================================================================*/
//USING FILTER
const newYorkBusinesses = businesses.filter(business =>{
  let inNewYork =  false;

  if(business.addressStateCode === "NY"){
    inNewYork = true
  }
  return inNewYork
});

const manufacrutingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing")

//get NY business on the page
outputElement.innerHTML = "<h1>Manufacturing Businesses</h1>"
manufacrutingBusinesses.forEach(business=>{
  let addressZip = "addressZipCode"
  outputElement.innerHTML += `
  <h1>${business.companyName}</h1>
  <section>
    ${business.addressFullStreet}
  </section>
  <section>
    ${business.addressCity} ${business["addressStateCode"]} ${business[addressZip]}
  </section>
  `
  outputElement.innerHTML += "<hr/>"
})




