import Component from "../../cors/Component";
export default class Main extends Component {
  

  setup () {
    this.$state =  {
      data : [{}],
    };
  }
  template () {
    const {data} = this.$state;
    return `
    <h1>메인 페이지</h1>  
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

  setEvent(){
    fetch("http://localhost:3001/")
     .then((response) => response.json())
     .then((data) => this.setState({
       data: data.data
   }))   
}


  setEvent2 () {
    const { historyRouter } = this.$props;
  //   this.$target.querySelector('.btn1').addEventListener('click', () => {
  //       fetch("http://localhost:3001/get")
  //   .then((response) => response.json())
  //   .then((data) => this.setState({items:[...items,data.data]}));
  //     console.log("btn1")
  // });

  //   this.$target.querySelector('.btn2').addEventListener('click', (e) => {
  //     const pathName = e.target.getAttribute("route")
  //     historyRouter(pathName,1)
  //     catchurl(window.location.pathname)
  //     console.log("btn2")
  //   })
    this.$target.querySelectorAll('.titleBtn').forEach((titleBtn) => 
    titleBtn.addEventListener('click', (e) => {
      const pk = e.target.getAttribute("index")
      let url = '/detail?id=' + pk
      historyRouter(null,null,url)
    })
    )
  }

}


