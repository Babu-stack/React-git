import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { span: 0 };
    this.imageRef = React.createRef();
  //  this.setSpan = this.setSpan.bind(this);
  }

  ComponenetDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpan);
    console.log(this.imageRef);
  }
  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    console.log("vj")
    const span = Math.ceil(height / 10);
    this.setState({span : span});
      
  };

  render(){
      //console.log(this.props.image)
    const {description,urls} = this.props.image;
    return (

        <div style={{gridRowEnd : `span ${this.state.span}`}}>
            <img  ref={this.imageRef} alt={description} src={urls.regular}/>
        </div>
    );
  };


}

export default ImageCard;
