import React, { Component } from 'react'

export class Search extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state={
            keyword : ''
        }
    }

    onChange(e){
        this.setState({
            keyword : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.searchUsers(this.state.keyword);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="container my-3">
                        <div className="input-group">
                            <input onChange={this.onChange} type="text" className="form-control" />
                            <div className="input-group-append">
                                <button className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search
