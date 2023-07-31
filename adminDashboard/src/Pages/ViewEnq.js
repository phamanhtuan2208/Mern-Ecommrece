import {
    getAEnquiry,
    resetState,
    updateEnquiry,
} from '@/Features/Enquiry/EnquirySlice';
import React, { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewEnq = () => {
    const location = useLocation();
    const getEnqId = location.pathname.split('/')[3];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const enqState = useSelector((state) => state.enquiry);
    const { enqName, enqMobile, enqEmail, enqComment, enqStatus } = enqState;

    useEffect(() => {
        if (getEnqId) {
            dispatch(resetState());
            dispatch(getAEnquiry(getEnqId));
        } else {
            dispatch(resetState());
        }
    }, [dispatch, getEnqId]);

    const goBack = () => {
        navigate(-1);
    };

    const setEnquiryStatus = (e, i) => {
        const data = { id: i, enqData: e };
        dispatch(updateEnquiry(data));
        dispatch(resetState());
        setTimeout(() => {
            dispatch(getAEnquiry(getEnqId));
        }, 2000);
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="mb-4 title">View Enquiry</h3>
                <button
                    className={
                        'bg-transparent border-0 fs-5 mb-0 d-flex align-items-center fs-6'
                    }
                    onClick={goBack}
                >
                    <BiArrowBack className="fs-5"></BiArrowBack>
                    &nbsp; Go Back
                </button>
            </div>
            <div className="mt-5 bg-white p-4 rounded-3 gap-3 flex-column ">
                <div className="d-flex align-items-center gap-3 p-3">
                    <h6 className="mb-0">Name:</h6>
                    <p className="mb-0">{enqName}</p>
                </div>
                <div className="d-flex align-items-center gap-3 p-3">
                    <h6 className="mb-0">Mobile:</h6>
                    <p className="mb-0">
                        <a href={`tel:+84${enqMobile}`}>{enqMobile}</a>
                    </p>
                </div>
                <div className="d-flex align-items-center gap-3 p-3">
                    <h6 className="mb-0">Email:</h6>
                    <p className="mb-0">
                        <a href={`mailto:`}>{enqEmail}</a>
                    </p>
                </div>
                <div className="d-flex align-items-center gap-3 p-3">
                    <h6 className="mb-0">Comment:</h6>
                    <p className="mb-0">{enqComment}</p>
                </div>
                <div className="d-flex align-items-center gap-3 p-3">
                    <h6 className="mb-0">Status:</h6>
                    <p className="mb-0">{enqStatus}</p>
                </div>
                <div className="d-flex align-items-center gap-3 p-3">
                    <h6 className="mb-0">Change Status:</h6>
                    <select
                        name=""
                        defaultValue={enqStatus ? enqStatus : 'Submitted'}
                        className="form-control form-select"
                        id=""
                        onChange={(e) =>
                            setEnquiryStatus(e.target.value, getEnqId)
                        }
                    >
                        <option value={'Submitted'}>Submitted</option>

                        <option value={'Contacted'}>Contacted</option>
                        <option value={'In Progress'}>In Progress</option>
                        <option value={'Resolved'}>Resolved</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default ViewEnq;
