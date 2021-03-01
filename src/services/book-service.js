export default class BookstoreService {

  data = [
  {
    id: 1,
    title: "The Blade Itself",
    author: "Joe Abercrombie",
    price: 25,
    cover:
      "https://i1.wp.com/joeabercrombie.com/wp-content/uploads/2014/03/uk-orig-the-blade-itself.jpg?resize=424%2C650&ssl=1",
  },
  {
    id: 2,
    title: "Before They Are Hanged",
    author: "Joe Abercrombie",
    price: 40,
    cover:
      "https://i0.wp.com/joeabercrombie.com/wp-content/uploads/2014/03/uk-orig-before-they-are-hanged.jpg?resize=423%2C650&ssl=1",
  },
  {
    id: 3,
    title: "Last Argument of Kings",
    author: "Joe Abercrombie",
    price: 32,
    cover:
      "https://i1.wp.com/joeabercrombie.com/wp-content/uploads/2014/03/uk-orig-last-argument-of-kings.jpg?resize=424%2C650&ssl=1",
  },
];

  getBooks() {
    return new Promise ((resolve, reject) => {
setTimeout(() => {
  resolve(this.data);
  reject(new Error("Oshibka!"))
}, 700)
    })
  }
}
