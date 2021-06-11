import React from 'react';

class ImageCard extends React.Component{

    constructor(props){
        super(props);

        this.state = {spans : 0};
        
        this.imageRef = React.createRef();
    }
    
     
    componentDidMount(){
        //console.log(this.imageRef.current);
        //console.log(this.imageRef.current.clientHeight);

        // if hright not show then
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans = () => {
       // console.log(this.imageRef.current.clientHeight);
       const height = this.imageRef.current.clientHeight;
       
       const spans = Math.ceil(height/10);
       this.setState({spans});
    }


    render(){
        const {alt_description,urls} =this.props.image;
        return (
             <div style={{gridRowEnd:`span ${this.state.spans}` }} > 
                <img ref={this.imageRef} 
                    src={urls.small}
                    alt={alt_description}
                    />
            </div>
           
        );
    }
}

export default ImageCard;