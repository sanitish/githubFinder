import React, { Component } from 'react'

export class RepoItem extends Component {
    render() {
        return (
            <div>
               <a href ={this.props.repo.html_url}> {this.props.repo.name}</a>
            </div>
        )
    }
}

export default RepoItem
