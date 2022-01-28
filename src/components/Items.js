import Component from "./Component";

export default class Items extends Component {
  setup () {
    this.$state = { items: ['item1', 'item2'] };

  }
  
  template () {
    const { items } = this.$state;
    return `
    <p>메인 페이지</p>  
    <ul>
        ${items.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <button id = "btn2"  route = "/home" >작성</button> 
      <button id = "btn1">추가111</button>
    `
  }

  setEvent () {
    const {items} = this.$state;
    document.getElementById("btn1").addEventListener('click', () => {
    // this.$target.getElementById("btn1").addEventListener('click', () => {
    // this.$target.querySelector('button').addEventListener('click', () => {
    fetch("http://localhost:3001/get")
    .then((response) => response.json())
    .then((data) => this.setState({items:[...items,data.data]}));
    });

    document.getElementById("btn2").addEventListener('click', (e) => {
      console.log(e)
      });
  }
}

