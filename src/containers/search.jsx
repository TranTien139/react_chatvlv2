import React,{Component} from 'react'

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            text_search:''
        }
    }

    handleInput(e){
        let name = e.target.name;
        let value = e.target.value;
        console.log(value);
        this.setState({text_search:value});
    }


    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-3">
                            <div className="form-group">
                                <input className="form-control" value={this.state.text_search} onChange={this.handleInput.bind(this)} type="text" required placeholder="Nhập từ khóa tìm kiếm bài viết" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;