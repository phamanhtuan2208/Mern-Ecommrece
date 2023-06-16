import React from 'react';
import Container from '../Components/Container';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={'Privacy Policy'}></Meta>
            <BreadCrumb title={'Privacy Policy'}></BreadCrumb>
            <Container class1="policy-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default PrivacyPolicy;
