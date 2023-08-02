import React from 'react';
import { Modal } from 'antd';

const CustomModel = (props) => {
    const { open, hideModal, performAction, title, title2 } = props;
    return (
        <>
            <Modal
                title={title2}
                open={open}
                onOk={performAction}
                onCancel={hideModal}
                okText="OK"
                cancelText="Cancel"
            >
                <p>{title}</p>
            </Modal>
        </>
    );
};

export default CustomModel;
