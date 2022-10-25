//SELECTORS

const userInput = document.querySelector(".blog-textarea")
const submitButton = document.querySelector(".submit-button")
const blogPostList = document.querySelector(".blogpost-list")
const counter = document.querySelector(".blogpost-counter")

let count = 0
const selectOptions = ["Rate", 1, 2, 3, 4, 5]

updateDisplay()

// FUNCTIONS

const handleAddPost = e => {
  e.preventDefault()

  // CONSTS AND LETS

  let rating = 0

  //ADD A NEW POST
  const postContainer = document.createElement("div")
  postContainer.classList.add("post-container")

  const post = document.createElement("li")

  post.innerText = userInput.value ? userInput.value : "initial text"
  post.classList.add("post")

  //CREATE SELECT

  const postRate = document.createElement("select")
  const rateValue = document.createElement("div")
  postRate.id = "post-rate"
  postRate.label = "Rate the Post"

  postContainer.appendChild(postRate)
  postRate.addEventListener("click", e => {
    postContainer.removeChild(e.target.value > 0 ? postRate : null)
    postContainer.appendChild(rateValue)
    rateValue.innerHTML = `The post rating is: ${e.target.value}`
  })

  for (var i = 0; i < selectOptions.length; i++) {
    let option = document.createElement("option")
    option.value = selectOptions[i]
    option.id = selectOptions[i]
    option.text = selectOptions[i]

    postRate.appendChild(option)
  }

  postContainer.appendChild(post)

  count++
  updateDisplay()

  //DELETE BUTTON OFC
  const deletePostButton = document.createElement("button")

  deletePostButton.classList.add("delete-button")
  deletePostButton.innerText = "Delete"

  postContainer.appendChild(deletePostButton)

  //APPEND TO THE LIST

  blogPostList.appendChild(postContainer)
  userInput.value = ""
}

const handleDeletePost = e => {
  const button = e.target
  const post = button.parentElement

  if (button.classList[0] === "delete-button") {
    post.remove()
    count--
    updateDisplay()
  }
}

function updateDisplay() {
  counter.innerHTML = `You have ${count} ${count === 1 ? "post" : "posts"} on your list!`
}

window.onload = function (e) {
  for (let i = 0; i > 5; i++) {
    handleAddPost(e)
  }
}
//EVENTS

submitButton.addEventListener("click", handleAddPost)
blogPostList.addEventListener("click", handleDeletePost)
