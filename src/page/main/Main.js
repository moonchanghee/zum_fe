import Component from "../../cors/Component";
export default class Main extends Component {
  

  setup () {
    this.$state =  {
      data : [{}],
      currentP : 1,
      countBtn : 5,

    };
  }
  template () {
    let lastPageNum = this.$state.currentP * this.$state.countBtn
    let firstPageNum = lastPageNum - this.$state.countBtn
    let tableDatas = this.$state.data.slice(firstPageNum,lastPageNum)
    let total = Math.ceil((this.$state.data.length)/this.$state.countBtn)
    let count = Array.from({length : total}, (a,b) => b+1)

    return `
    <h1>메인 페이지</h1> 
    <input type="text" class = "search" value="" placeholder = "게시물 검색"/> 
    <button class = "searchBtn">검색</button>
    <input type="number"  class ="showNum" value="" placeholder = "게시물 갯수 입력"/> 
    <button class = "check">확인</button>
    <table border="1">
    <th>글번호</th>
    <th>제목</th>
    <th>작성자</th>
    <th>작성일<button class = "down">내림</button><button class = "up">올림</button></th>
    ${tableDatas.map((e) => 
      `<tr><td>${e.id}</td>
      <td><button class = "titleBtn" index = "${e.id}" >${e.title}</button></td>
      <td>${e.writer}</td>
      <td>${e.date}</td></tr>`
    ).join("")}
    </table></br>
      ${count.map(e => 
        `<button class = "pageBtn" index = "${e}" > ${e}</button>`
      ).join("") }
      <button class = "writeBtn">작성</button>
      <button class = "initBtn">초기화</button>
      <button class = "resetBtn">새로고침</button>
      </br>
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
    this.$target.querySelectorAll('.titleBtn').forEach((titleBtn) => 
    titleBtn.addEventListener('click', (e) => {
      const pk = e.target.getAttribute("index")
      let url = '/detail?id=' + pk
      historyRouter(null,null,url)
    })
    )
    this.$target.querySelector('.writeBtn').addEventListener('click' , () => {
      console.log("작성")
      historyRouter(null,null,"/write")

     })
     this.$target.querySelector('.initBtn').addEventListener('click' , () => {
      console.log("초기화")
     })
     this.$target.querySelector('.searchBtn').addEventListener('click' , () => {
    console.log("검색")
    console.log(this.$target.querySelector('.search').value) 
    let data = this.$target.querySelector('.search').value
    let searchData = []
    // this.$state.data.map((e) => {
    //   if(e.title.includes(data)){
    //     console.log(e)
    //     searchData.push(e)
    //   }
    // })
    // this.setState({data : searchData} )
    })
     
     this.$target.querySelector('.resetBtn').addEventListener('click' , () => {
      location.reload()
     })
     this.$target.querySelector('.check').addEventListener('click' , () => {
      this.setState({countBtn : this.$target.querySelector('.showNum').value})
      
     })
     this.$target.querySelector('.up').addEventListener('click' , () => {
      this.setState({data : this.$state.data.sort((a, b) => new Date(a.date) - new Date(b.date) )} )
     })
     this.$target.querySelector('.down').addEventListener('click' , () => {
      this.setState({data : this.$state.data.sort((a, b) =>  new Date(b.date) - new Date(a.date))} )
     })

     this.$target.querySelectorAll('.pageBtn').forEach((pageBtn) => 
       pageBtn.addEventListener('click', (e) => {
       this.setState({currentP : e.target.getAttribute("index")})
     })
     )

  }

}


