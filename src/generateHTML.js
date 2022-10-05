// Employee Card - just in case an employee doesn't fall into any of the other roles
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
                <p class="email">Email: ${employee.email}</p>
            </div>
        </div>
    </div>
    `;
}

// Engineer Card
const generateEngineer = function (engineer) {
    return `
    <div>
        <div>
            <div>
            </div>
            <div>
            </div>
        </div>
    </div>
    `;
}

// Intern Card
const generateIntern = function (intern) {
    return `
    <div>
        <div>
            <div>
            </div>
            <div>
            </div>
        </div>
    </div>
    `;
}


// Manager Card
const generateManager = function (manager) {
    return `
    <div>
        <div>
            <div>
            </div>
            <div>
            </div>
        </div>
    </div>
    `;
}


// push to the page


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