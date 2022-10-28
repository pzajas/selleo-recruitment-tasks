const input = document.querySelector("[search-input]")
const ul = document.querySelector("[search-list]")

const colors = ["yellow", "blue", "green", "pink", "red", "violet", "black", "white", "orange", "teal"]

const populateList = (array, element) => {
  array.forEach(item => {
    const listItem = document.createElement("li")
    listItem.classList.add("list-item")
    listItem.innerText = item

    listItem.addEventListener("click", () => {
      listItem.innerText.includes(input.value) && input.value.length > 1
        ? listItem.classList.toggle("text-green")
        : null
    })

    element.appendChild(listItem)
  })
}

populateList(colors, ul)

const filterColorsOrResetSearch = style => {
  let listItem = document.getElementsByClassName("list-item")
  let filter = input.value.toLowerCase()

  style === "" ? (input.value = "") : input.value

  const tabTitle = colors.find(element => element.includes(input.value))

  for (i = 0; i < listItem.length; i++) {
    listItem[i].innerText.includes(input.value) && input.value.length > 1
      ? (window.top.document.title = tabTitle)
      : null
  }

  for (i = 0; i < listItem.length; i++) {
    listItem[i].innerText.includes(filter) ? (listItem[i].style.display = "") : (listItem[i].style.display = style)
  }
}
