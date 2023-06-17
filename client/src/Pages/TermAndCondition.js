import React from 'react';
import Container from '~/Components/Container';
import BreadCrumb from '~/Components/BreadCrumb';
import Meta from '~/Components/Meta';

const TermAndCondition = () => {
    return (
        <>
            <Meta title={'Term And Condition'}></Meta>
            <BreadCrumb title={'Term And Condition'}></BreadCrumb>
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

export default TermAndCondition;
