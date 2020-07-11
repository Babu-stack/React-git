import React from 'react';



class SearchBar extends React.Component{
state={term:''};
OnTermChange=(event) => {
    this.setState({term : event.target.value});
    //  console.log(event.target.value)

};
Onsubmit = (event)=>{

    event.preventDefault();
    this.props.onSubmit(this.state.term);
};
render(){
    return(
<div className="ui segment">
<form className="ui form" onSubmit={this.Onsubmit}>
    <div className="field">

        <input type="text"  value={this.state.term} onChange={this.OnTermChange}>
        </input>
    </div>
</form>
</div>
);

}
}

export default SearchBar;