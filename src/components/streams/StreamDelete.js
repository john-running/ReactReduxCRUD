import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal'
import history from '../../history';

class StreamDelete extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchStream(this.props.match.params.id); // this is how you get the id from the querystring
  }

  confirmDelete = () => {
    this.props.deleteStream(this.props.match.params.id)
  }

  renderActions (action = null) {
    if(action === "error"){
      return (
        <React.Fragment>
          <Link to="/" className="ui button">Cancel</Link>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Link to="/" className="ui button">Cancel</Link>
        <button onClick={this.confirmDelete}className="ui button negative">Delete</button>
      </React.Fragment>
    );
  }

  render() {
    if (!this.props.stream){
      return " ";
    } else {
      if (this.props.stream.userId === this.props.currentUserId){
        return(
            <Modal
              title="Delete Stream"
              content={`Are you sure you want to delete ${this.props.stream.title}?`}
              actions={this.renderActions()}
              onDismiss={()=>history.push('/')}
            />
        );
      }
      return (
          <Modal
            title="Delete Stream"
            content={"You do not have permission to delete this stream."}
            actions={this.renderActions("error")}
            onDismiss={()=>history.push('/')}
          />
      );
    }
  }
}

const mapStateToProps = (state, ownProps) =>{
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId
  }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
