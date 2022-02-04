import Component from "../../cors/Component";
export default class Main extends Component {
  

  setup () {
    this.$state =  {
      data : [{}],
      currentP : 1,
      countBtn : 5,
      searchData : [{}] ,
      searchBool : false
    };
  }
  template () {
    let lastPageNum = this.$state.currentP * this.$state.countBtn
    let firstPageNum = lastPageNum - this.$state.countBtn
    var tableDatas = this.$state.data.slice(firstPageNum,lastPageNum)
    var total = Math.ceil((this.$state.data.length)/this.$state.countBtn)
    console.log("searchdata" , this.$state.searchData)
  if(this.$state.searchBool){
    tableDatas = this.$state.searchData.slice(firstPageNum,lastPageNum)
    total = Math.ceil((this.$state.searchData.length)/this.$state.countBtn)
  }
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
      <td><button class = "writerBtn" index = "${e.writer}" >${e.writer}</button></td>
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

    this.$target.querySelector('.searchBtn').addEventListener('click' , () => {
      console.log("검색")
      let data = this.$target.querySelector('.search').value
      let search = []
      this.$state.data.map((e) => {
        if(e.title.includes(data)){
          search.push(e)
        }
      })
      this.setState({searchData : search , searchBool : true ,currentP : 1})
      })

    this.$target.querySelectorAll('.writerBtn').forEach((writerBtn) => 
      writerBtn.addEventListener('click', (e) => {
      let data = e.target.getAttribute("index")
      let search = []
      this.$state.data.map((e) => {
        if(e.writer == data){
          search.push(e)
        }
      })
      this.setState({searchData : search , searchBool : true ,currentP : 1})
    })
    )



    this.$target.querySelector('.writeBtn').addEventListener('click' , () => {
      console.log("작성")
      historyRouter(null,null,"/write")

     })
     this.$target.querySelector('.initBtn').addEventListener('click' , () => {
      this.setState({searchBool : false ,countBtn : 5})
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



