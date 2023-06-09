import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';

const TermAndCondition = () => {
    return (
        <>
            <Meta title={'Term And Condition'}></Meta>
            <BreadCrumb title={'Term And Condition'}></BreadCrumb>
            <section className="policy-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TermAndCondition;
