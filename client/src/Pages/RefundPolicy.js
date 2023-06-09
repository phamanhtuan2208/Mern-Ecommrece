import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';

const RefundPolicy = () => {
    return (
        <>
            <Meta title={'Refund Policy'}></Meta>
            <BreadCrumb title={'Refund Policy'}></BreadCrumb>
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

export default RefundPolicy;
