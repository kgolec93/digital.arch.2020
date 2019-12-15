import React, { Component } from 'react'

const items = [
    'dupa', 'cycki', 'cycki', 'dupa', 'dupa',
    'dupa', 'cycki', 'cycki', 'cycki', 'dupa',
    'dupa', 'cycki', 'cycki', 'dupa', 'dupa',
    'dupa', 'cycki', 'cycki', 'dupa', 'dupa',
    'dupa', 'cycki', 'cycki', 'dupa', 'dupa',
    'dupa', 'cycki', 'cycki', 'dupa', 'dupa',
]


export class TEST_COMPONENT extends Component {
    constructor(){
        super();
        this.state = {
            filter: ''
        }
    }
    render() {
        return (
            <div className='test'>
                <button onClick={()=>{this.state.filter === '' ? this.setState({filter:'cycki'}) : this.setState({filter:''})}}>FILTER</button>
                {items.map(item=>{
                    return(
                        <div className={this.state.filter === item ? 'item hidden' : 'item'}>
                            {item}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TEST_COMPONENT
