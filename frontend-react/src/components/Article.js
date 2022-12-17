import React from "react";
import ArticleList from "./ArticleList";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      article: {
        id: "",
        title: "",
        content: "",
        
      },
      newArticle:{},
      isDisplay:false
      
    };
  }

  onIdChange(e) {
    console.log(e.target.value);
    this.setState({ article: { ...this.state.article, id: e.target.value } });
  }

  onTitleChange(e) {
    console.log(e.target.value);
    this.setState({
      article: { ...this.state.article, title: e.target.value },
    });
  }
  onContentChange(e) {
    console.log(e.target.value);
    this.setState({
      article: { ...this.state.article, content: e.target.value },
    });
  }

  handleUser(e){
    this.setState({article:{...this.state.article,user:e.target.value,}})
  }

  saveData(e) {
    e.preventDefault();
    let article = this.state.article;
    let tempArticles = this.state.articles;
    tempArticles.push(article);
    this.setState({ articles: tempArticles,article:{...article,id:"",title:"",content:""},isDisplay:true,newArticle:{...article} });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          Create Article
          <form onSubmit={(e) => this.saveData(e)}>
            <div className="mb-3 row">
              <label for="id" className="col-sm-2 col-form-label">
                ID
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readonly
                  className="form-control"
                  id="id"
                  value={this.state.article.id}
                  onChange={(e) => this.onIdChange(e)}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="title" className="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={this.state.article.title}
                  onChange={(e) => this.onTitleChange(e)}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="content" className="col-sm-2 col-form-label">
                Content
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="content"
                  value={this.state.article.content}
                  onChange={(e) => this.onContentChange(e)}
                />
              </div>
            </div>
            <label>User Name</label>
            <input type="text" value={this.state.article.user} onChange={(e)=>this.handleUser(e)}/>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
         
        </div>
        {this.state.isDisplay && <div className="row">
          <h1>Article data</h1>
          <h1>Article id: {this.state.newArticle.id}</h1>
          <h1>Article title: {this.state.newArticle.title}</h1>
          <h1>Article content: {this.state.newArticle.content}</h1>
          <h1>Article user: {this.state.newArticle.user}</h1>
        {/* <ArticleList articles={this.state.articles}/> */}
        </div>}
      </div>
    );
  }
}

export default Article;
