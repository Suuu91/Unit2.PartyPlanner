// create function
const findEvent = async() =>{
  // call the api using base url + endpoint https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events
  const response = await fetch (`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events`)
  const partyData = await response.json();
  // grab the ol
  const ol = document.querySelector(`ol`)
  //use foreach to go through every object inside the array to gather information
  partyData.data.forEach((item) => {
    // create new LI
    const partyLI = document.createElement(`li`)
    // put the information of called object in the LI
    partyLI.innerHTML =  `
    <h3>Party ID: ${item.id}</h3>
    <h3>Party Name: ${item.name} </h3>
    <h3>Party Location: ${item.location} </h3>
    <h3>Party Date: ${item.date} </h3>
    <h3>Party Description: ${item.description} </h3>
    <br>
    `
    // attach the LI to ol
    ol.append(partyLI)
  })
}
//invoke the function
findEvent()