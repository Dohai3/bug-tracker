import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

function BugAdd() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                New Bug
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>New Bug</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Let's put a form in here
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Create new bug
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BugAdd;
