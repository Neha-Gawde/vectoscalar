import { Button } from '@material-ui/core';
import React from 'react'
import {Modal, ModalBody,ModalHeader } from 'reactstrap';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import '../pages/dashboard.css';


function ViewModal(props) {
    return (
    
        <div>
        {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
        <Modal isOpen={props.open} toggle={props.toggle}>
          <ModalHeader className="modalhead">
            <p className="headingmodal">Details of Question</p>
            <CancelOutlinedIcon onClick={props.toggle} className="cancelicon" />
          </ModalHeader>
          <ModalBody>
            <p>Title :</p>
            <p className="titlequestion">{props.title}</p>
            <p>Link :</p>
            <div className="questionlink">
              <a  href={props.link} target='blank'>click here</a> 
            </div>
           
          </ModalBody>
        </Modal>
      </div>
    )
}

export default ViewModal;
