// this is an example selector
export const filterTodo = (people, searchKeyword) =>
  people.filter(person => person.name.toLowerCase().includes(searchKeyword.toLowerCase()))

// ...
