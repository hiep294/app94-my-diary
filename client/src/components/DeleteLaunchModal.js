/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TrashIcon from '../icons/trash.png'

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onDelete = () => {
    this.props.onDelete()
    this.toggle()
  }

  render() {
    return (
      <>
        <img src={TrashIcon} alt="" onClick={this.toggle} />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Action confirmation</ModalHeader>
          <ModalBody>
            <h3>Would you like to delete this topic?</h3>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onDelete}
            >Confirm</Button>
            {' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default ModalExample;