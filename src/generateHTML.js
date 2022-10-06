const generateEmployee = function (employee) {
    return `
    <div class="col-sm-6 col-md-4">
        <div class="card">
            <div class="card-header">
                <h2>${employee.name}</h2>
                <h5>Team Member</h5>
            </div>
            <div class="card-body">
                <p class="id">ID: ${employee.id}</p>
                <p class="email">Email:<a href="mailto:${employee.email}"> ${employee.email}</a></p>
            </div>
        </div>
    </div>
    `;
}

// Engineer Card
const generateEngineer = function (engineer) {
    return `
    <div class="col-sm-6 col-md-4">
        <div class="card">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h5>Team Member</h5>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email:<a href="mailto:${engineer.email}"> ${engineer.email}</a></p>
                <p class="github">GitHub: ${engineer.github}</p>
            </div>
        </div>
    </div>
    `;
}

// Intern Card
const generateIntern = function (intern) {
    return `
    <div class="col-sm-6 col-md-4">
        <div class="card">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h5>Team Member</h5>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}"> ${intern.email}</a></p>
                <p class="school">Email: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}


// Manager Card
const generateManager = function (manager) {
    return `
    <div class="col-sm-6 col-md-4">
        <div class="card">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h5>Team Member</h5>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email:<a href="mailto:${manager.email}"> ${manager.email}</a></p>
                <p class="officeNumber">Office Phone: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// push to the page - will need to be based of roles to differentiate from the different types of cards
   // push array to page 
generateHTML = (data) => {

    // array for cards 
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }

    }


        //keep all the cards together, and join them to create a page specific to each team
        const cards = pageArray.join('')

        const generateTeam = generateProfile(cards);
        return generateTeam;
    }


// generate the html 
    const generateProfile = function (cards) {
        return `
    
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
            <link rel ="stylesheet" href="./dist/stylesheet.css"></link>
        </head>
        <body>
            <header>
                <nav class ="navbar"> Our Team</nav>
            </header>

            <main>
                <div class ="container">
                    <div class ="row justify-content-center">
                    ${cards}
                    </div>
                </div>
            </main>
    
        </body>
        </html>
     `;
    }

//export
module.exports = generateHTML;