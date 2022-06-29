let customers = [
    {
        "id": "12345",
        "name": "noor"
    },
    {
        "id": "12765",
        "name": "aya"
    },
    {
        "id": "23345",
        "name": "alaa"
    },
    {
        "id": "12334",
        "name": "ehab"
    }
]

function buildTable(customers) {
     const table = document.getElementById("customerTable"); 
   for (let i in customers) {
        let row = `<tr>  
                    <td>${customers[i].id}</td>
                    <td>${customers[i].name}</td>
                </tr>`
        table.innerHTML += row;
    }
}
buildTable(customers);

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    customers.push( value );
    console.log(customers);

writeFile('customers.json', value, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});

  }

  const form = document.querySelector("#add-customer");
  form.addEventListener("submit", handleSubmit);

