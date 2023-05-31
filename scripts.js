const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const cardField = document.getElementsByClassName("cards")[0]

btn2.style.color = "#74747c"

do{
  function fetchAllPromotions() {
    cardField.innerHTML = ''
    fetch("http://www.mocky.io/v2/5bc3b9cc30000012007586b7")
      .then(response => response.json())
      .then(response => response.map(item => {

        const card = document.createElement("div")
        const titleParagraph = document.createElement("div")
        const buttons = document.createElement("div")

        const image = document.createElement("img")
        const title = document.createElement("h2")
        const description = document.createElement("p")
        const btnTerms = document.createElement("button")
        const joinNow = document.createElement("button")
        

        titleParagraph.appendChild(title)
        titleParagraph.appendChild(description)
        buttons.appendChild(btnTerms)
        buttons.appendChild(joinNow)

        joinNow.classList.add("joinNow")
        card.classList.add("card")
        titleParagraph.classList.add("titleParagraph")
        buttons.classList.add("buttons")
        
        image.setAttribute("src", item.heroImageUrl)
        title.textContent = item.name
        description.textContent = item.description
        btnTerms.textContent = item.termsAndConditionsButtonText
        joinNow.textContent = item.joinNowButtonText
        
        card.appendChild(image)
        card.appendChild(titleParagraph)
        card.appendChild(buttons)
      

        return cardField.appendChild(card)
      }))
  }
}while(btn1.getAttribute("allPromotions"))

do{
   function fetchOnlyNewPromotions() {
    cardField.innerHTML = ''
   fetch("http://www.mocky.io/v2/5bc3b9cc30000012007586b7")
      .then(response => response.json())
      .then(response => response.map(item => {
        if(item.onlyNewCustomers === true) {
      
        const card = document.createElement("div")
        const titleParagraph = document.createElement("div")
        const buttons = document.createElement("div")

        const image = document.createElement("img")
        const title = document.createElement("h2")
        const description = document.createElement("p")
        const btnTerms = document.createElement("button")
        const joinNow = document.createElement("button")

        titleParagraph.appendChild(title)
        titleParagraph.appendChild(description)
        buttons.appendChild(btnTerms)
        buttons.appendChild(joinNow)    
        
        joinNow.classList.add("joinNow")
        card.classList.add("card")
        titleParagraph.classList.add("titleParagraph")
        buttons.classList.add("buttons")
        
        image.setAttribute("src", item.heroImageUrl)
        title.textContent = item.name
        description.textContent = item.description
        btnTerms.textContent = item.termsAndConditionsButtonText
        joinNow.textContent = item.joinNowButtonText
        
        card.appendChild(image)
        card.appendChild(titleParagraph)
        card.appendChild(buttons)

        return cardField.appendChild(card)
        }
     }))
    }
}while(btn2.getAttribute("onlyNewPromotions"))

function changeBtn1Class() {
  fetchAllPromotions()
  btn1.classList.add("allPromotions")
  btn2.classList.remove("onlyNewPromotions")
  btn2.style.color = "#74747c"
  btn1.style.color = "#fff"
}

function changeBtn2Class() {
  fetchOnlyNewPromotions()
  btn2.classList.add("onlyNewPromotions")
  btn1.classList.remove("allPromotions")
  btn1.style.color = "#74747c"
  btn2.style.color = "#fff"
}

fetchAllPromotions()