import Component from "../../cors/Component";
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
      <button class = "btn2"  route = "/home" >작성작성</button> 
      <button class = "btn1">추가111</button>

      <table border="1">
	    <th>글번호</th>
	    <th>제목</th>
      <th>작성자</th>
      <th>작성일</th>
      ${data.map((e) => 
        `<tr><td>${e.id}</td>
        <td><button class = "titleBtn" index = "${e.id}" >${e.title}</button></td>
        <td>${e.writer}</td>
        <td>${e.date}</td></tr>`
      )}
      </table>
    `
  }

  setEvent2 () {
    const {items} = this.$state;
    const { historyRouter } = this.$props;
    this.$target.querySelector('.btn1').addEventListener('click', () => {
    //     fetch("http://localhost:3001/get")
    // .then((response) => response.json())
    // .then((data) => this.setState({items:[...items,data.data]}));
      console.log("btn1")
  });

    this.$target.querySelector('.btn2').addEventListener('click', (e) => {
      // const pathName = e.target.getAttribute("route")
      // historyRouter(pathName,1)
      // catchurl(window.location.pathname)
      console.log("btn2")
    })
    this.$target.querySelectorAll('.titleBtn').forEach((titleBtn) => 
    titleBtn.addEventListener('click', (e) => {
      const pk = e.target.getAttribute("index")
      console.log(pk)
      let state = {id : pk}
      let url = '/detail?id=' + pk
      historyRouter(state,null,url)
    })
    )
  }

}


