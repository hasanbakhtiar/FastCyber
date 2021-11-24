import React, { Component } from 'react'

export default class BlogForm extends Component {
        constructor(props){
            super(props);
            this.onSubmit = this.onSubmit.bind(this);
            this.onTitleChange = this.onTitleChange.bind(this);
            this.onDescriptionChange = this.onDescriptionChange.bind(this);
            this.state = {
                title : props.blog ? props.blog.title : "",
                description: props.blog ? props.blog.description : "",
                error: ''
            }

        }

        onTitleChange = (e)=>{
                const title = e.target.value;
                this.setState(()=>({title}));
        }

        onDescriptionChange = (e)=>{
            const description = e.target.value;
            this.setState(()=>({description}));
    }

        onSubmit = (e)=>{
                e.preventDefault();

                if (!this.state.title || !this.state.description) {
                    this.setState({error: "xanalari doldurun"})
                    
                }else{
                this.setState({error: ""});
                this.props.onSubmit({
                    title: this.state.title,
                    description:this.state.description,
                    dataAdded: Date().toLocaleString()
                });

                }

        }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>

                    <div>
                        <input type="text" onChange={this.onTitleChange} placeholder="enter title"
                        
                        />
                    </div>
                    <div>
                        <textarea  onChange={this.onDescriptionChange}></textarea>
                    </div>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}
