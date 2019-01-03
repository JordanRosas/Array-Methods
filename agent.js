let outEl = document.querySelector("#output")
outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
  //need to create the example data structure for each agent
    let agentsInformation = {
      fullName:`${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
      company:`${business.companyName}`,
      phoneNumber:`${business.phoneWork}`
    }
    //returning the agent information object
    return agentsInformation
})
//console.table to ensure code is working
console.table(agents)

//for each agent create the data structre in the DOM
agents.forEach(agent => {
  outEl.innerHTML += `<h2>${agent.fullName}</h2>
                      <p>${agent.company}</p>
                      <p>${agent.phoneNumber}</p>`
  outEl.innerHTML += "<hr/>";
});
