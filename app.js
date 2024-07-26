






const BASEURL = "https://latest.currency-api.pages.dev/v1/currencies/eur.json"

const dropDowns = document.querySelectorAll(".dropdown select");




for (select of dropDowns) {
    for (currCode in countryList){
        let newOption = document.createElement("option")
        newOption.innerText = currCode
        newOption.value = currCode
        if(select.name === "from" && currCode === "USD") {
                newOption.selected = "selected"
        }
        select.append(newOption)
        
    }
}


