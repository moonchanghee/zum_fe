import Component from "./Component";

export default class Items extends Component {
  setup () {
    this.$state = { items: ['item1', 'item2'] };

  }
  
  template () {
    const { items } = this.$state;
    return `
      <ul>
        ${items.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <button class = "btn1">추가</button>
    `
  }

  setEvent () {
    const {items} = this.$state;
    // this.$target.getElementById("btn1").addEventListener('click', () => {
    this.$target.querySelector('button').addEventListener('click', () => {
    fetch("http://localhost:3001/get")
    .then((response) => response.json())
    .then((data) => this.setState({items:[...items,data.data]}));
    });
  }
}