import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';

class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }
    renderList(){
        return this.props.streams.map(stream => {
          return(
              <div className="item" key={stream.id}>
                  <i className="large middle aligned icon camera"/>
                  <div className="content">
                      {stream.title}
                      <div className="discription">
                          {stream.discription}
                      </div>
                  </div>
              </div>
          );
        });
    }
    render(){
       // console.log(this.props.streams);
        return  (
            <div>
               <h2>Streams</h2> 
               <div className="ui celled list">
                   {this.renderList()}
               </div>
            </div>
        );
    }
}

//Object.values(state.streams) take object input and return same value array
const mapStateToProps = (state) => {
   return {streams: Object.values(state.streams) }
};
export default connect(mapStateToProps,{fetchStreams})(StreamList);