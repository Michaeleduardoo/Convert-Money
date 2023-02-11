const button = document.querySelector("button")
const realValue = document.getElementById("value-real")
const money = document.getElementById("value-Money")
const select = document.getElementById("choose")
const text = document.getElementById("span-Two")
const img = document.querySelector(".img-dinherio")


const dolar = 5.2
const euro = 5.5
const biti = 0.84


const country = () => {

    const inputReal = document.getElementById("input-value").value

    realValue.innerHTML = new Intl.NumberFormat("pt-BR",
        { style: "currency", currency: "BRL" }
    ).format(inputReal);

    if (select.value === "US$ Dólar americano") {

        money.innerHTML = new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD" }
        ).format(inputReal / dolar);

    }

    if (select.value === "€ Euro") {

        money.innerHTML = new Intl.NumberFormat("de-DE",
            { style: "currency", currency: "EUR" }
        ).format(inputReal / euro);
        
    }

    if (select.value === "₿ Bitcoin") {

        money.innerHTML = (inputReal / biti).toFixed(1)
    }


}

button.addEventListener("click", country)


select.addEventListener("change", () => {

    if (select.value === "€ Euro") {

        text.innerHTML = "Euro"
        img.src = "./img/euro.png"

    } else if (select.value === "US$ Dólar americano") {

        text.innerHTML = "Dólar Americano"
        img.src = "./img/estados-unidos.png"

    } else {

        text.innerHTML = "Bitcoin"
        img.src = "./img/biti.png"

    }

})