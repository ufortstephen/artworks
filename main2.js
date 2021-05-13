async function showDetails(id) {
    const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
    const { data } = await res.json();


    // creating main div element that houses other contents
    var div = document.createElement('div');

    // Adding a Classs to main div 
    div.classList.add('detailed-div', 'container')

    // Creating First Section with a class of Row
    var sectionOne = document.createElement('section');
    sectionOne.classList.add('row');

    // Creating Col-md-8 column for sectionOne
    var colOne = document.createElement('div');
    colOne.classList.add('col-md-5');

    //Adding image to ColOne
    colOne.innerHTML = `  
     <img src= '${data.thumbnail.lqip}' style={width:2px}/>

    `

    // Col Two
    var colTwo = document.createElement('div');
    colTwo.classList.add('col-md-5');

    // Adding Content to ColTwo
    colTwo.innerHTML = `
        <p class="text-uppercase "> TITLE: ${data.title} </p>
        <p class="text-uppercase "> LOCATION: ${data.date_display} ${data.artist_display} </p>
        <p class="text-uppercase "> DIMENSION: ${data.dimensions} </p>
        <p class="text-uppercase "> Materials: ${data.medium_display} </p>
        <p class="text-uppercase "> By: ${data.credit_line} </p>
        <p class="text-uppercase "> By: ${data.image_id} </p>
        
    `;

    // Appending the column to the row class
    sectionOne.appendChild(colOne);
    sectionOne.appendChild(colTwo);

    // Creating SectionTwo
    var sectionTwo = document.createElement('div');
    sectionTwo.innerHTML = `
    <p class="text-uppercase pl-3 mt-5"> By: ${data.publication_history} </p>
    <p class="text-uppercase pl-3"> By: ${data.provenance_text} </p>
    `;

    // Creating DeleteButton
    var delBtnDiv = document.createElement('div');
    // delBtnDiv.classList.add('delete-button')
    delBtnDiv.innerHTML = `
        <button class="delete-button" onclick="deleteDetails(this)">CLOSE</button>
    `



    //Appending other elements to the main div container
    div.appendChild(sectionOne)
    div.appendChild(sectionTwo)
    div.appendChild(delBtnDiv)

    // Appending Main Div to Body 
    document.body.appendChild(div);





};

function deleteDetails(it) {
    it.parentElement.parentElement.classList.add('bounceOutRight')
}