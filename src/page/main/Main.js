import Component from "../../cors/Component";
import './main.css'
export default class Items extends Component {
  setup () {
    this.$state = { items: ['item1', 'item2'] };
  }
  
  template () {
    const { items } = this.$state;
    const {data} = this.$props;
    return `
    <p>메인 페이지</p>  
    <ul>
        ${items.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <button id = "btn2"  route = "/home" >작성</button> 
      <button id = "btn1">추가111</button>

      <table border="1">
	    <th>글번호</th>
	    <th>제목</th>
      <th>작성자</th>
      <th>작성일</th>
	    <tr><!-- 첫번째 줄 시작 -->
	    <td>1</td>
	    <td>안녕</td>
      <td>문창희</td>
      <td>2022.01.29</td>
	    </tr><!-- 첫번째 줄 끝 -->
    </table>
    ${data}
    `
  }

  setEvent () {
    const {items} = this.$state;
    const { catchurl } = this.$props;
    this.$target.querySelector('#btn1').addEventListener('click', () => {
    fetch("http://localhost:3001/get")
    .then((response) => response.json())
    .then((data) => this.setState({items:[...items,data.data]}));
    });

    this.$target.querySelector('#btn2').addEventListener('click', (e) => {
      const pathName = e.target.getAttribute("route")
      historyRouter(pathName,1)
      catchurl(window.location.pathname)
    })
  }
}
const historyRouter = (pathName , element) => {
  window.history.pushState({} , pathName , window.location.origin + pathName ) 
}

