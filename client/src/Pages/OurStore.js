import React, { useEffect } from 'react';
// import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '~/Components/BreadCrumb';
import Meta from '~/Components/Meta';
import { useState } from 'react';
import ProductCard from '~/Components/ProductCard';
import Container from '~/Components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '~/features/Product/productSlice';

const OutStore = () => {
    const dispatch = useDispatch();
    const [grid, setGrid] = useState(4);
    const productState = useSelector((state) => state?.product?.ProductData);
    const [Brands, setBrands] = useState([]);
    const [Categories, setCategories] = useState([]);
    const [Tags, setTags] = useState([]);
    // const [ColorState, setColorState] = useState([]);

    //filter States
    const [Tag, setTag] = useState(null);
    const [Category, setCategory] = useState(null);
    const [Brand, setBrand] = useState(null);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [sort, setSort] = useState(null);

    useEffect(() => {
        let newBrands = [];
        let category = [];
        let newTags = [];
        // let newColors = [];
        for (let index = 0; index < productState?.length; index++) {
            const element = productState[index];
            newBrands.push(element.brand);
            category.push(element.category);
            newTags.push(element.tags);
            // newColors.push(element.color);
        }
        // setColorState(newColors);
        setBrands(newBrands);
        setCategories(category);
        setTags(newTags);
    }, [productState]);

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort, Tag, Brand, Category, minPrice, maxPrice]);

    const getProducts = () => {
        dispatch(
            getAllProduct({ sort, Tag, Brand, Category, minPrice, maxPrice }),
        );
    };

    return (
        <>
            <Meta title={'Our Store'}></Meta>
            <BreadCrumb title={'Our Store'}></BreadCrumb>
            <Container class1="store-wrapper home-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3 ">
                                <h3 className="filter-title">
                                    Shop By Categories
                                </h3>
                                <div>
                                    <ul className="ps-0">
                                        {Categories &&
                                            [...new Set(Categories)].map(
                                                (item, index) => {
                                                    return (
                                                        <li
                                                            key={index}
                                                            onClick={() =>
                                                                setCategory(
                                                                    item,
                                                                )
                                                            }
                                                        >
                                                            {item}
                                                        </li>
                                                    );
                                                },
                                            )}
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3 ">
                                <h3 className="filter-title">Filter By</h3>
                                <div>
                                    <div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id=""
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor=""
                                            >
                                                Out of Stock (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating ">
                                            <input
                                                type="number"
                                                className="form-control py-1"
                                                placeholder="From"
                                                onChange={(e) =>
                                                    setMinPrice(
                                                        parseInt(
                                                            e.target.value,
                                                        ),
                                                    )
                                                }
                                            />
                                            <label htmlFor="floatingInput">
                                                From
                                            </label>
                                        </div>
                                        <div className="form-floating ">
                                            <input
                                                type="number"
                                                className="form-control py-1"
                                                placeholder="To"
                                                onChange={(e) =>
                                                    setMaxPrice(
                                                        parseInt(
                                                            e.target.value,
                                                        ),
                                                    )
                                                }
                                            />
                                            <label htmlFor="floatingInput1">
                                                To
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-1"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="color-1"
                                        >
                                            M (2)
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3 mt-4">
                                    <h3 className="sub-title">Product Tags</h3>
                                    <div>
                                        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                            {Tags &&
                                                [...new Set(Tags)].map(
                                                    (item, index) => {
                                                        return (
                                                            <span
                                                                className=" text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                                                                key={index}
                                                                onClick={() =>
                                                                    setTag(item)
                                                                }
                                                            >
                                                                {item}
                                                            </span>
                                                        );
                                                    },
                                                )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 ">
                                    <h3 className="sub-title">Product Brand</h3>
                                    <div>
                                        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                            {Brands &&
                                                [...new Set(Brands)].map(
                                                    (item, index) => {
                                                        return (
                                                            <span
                                                                className=" text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                                                                key={index}
                                                                onClick={() =>
                                                                    setBrand(
                                                                        item,
                                                                    )
                                                                }
                                                            >
                                                                {item}
                                                            </span>
                                                        );
                                                    },
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    {' '}
                                    <div className="d-flex align-items-center gap-10">
                                        <p
                                            className="mb-0 d-block"
                                            style={{ width: '100px' }}
                                        >
                                            Sort By:
                                        </p>
                                        <select
                                            name=""
                                            className="form-control form-select"
                                            id=""
                                            defaultValue={'manual'}
                                            onChange={(e) =>
                                                setSort(e.target.value)
                                            }
                                        >
                                            <option value={'title'}>
                                                Alphabetically, A-Z
                                            </option>
                                            <option value={'-title'}>
                                                Alphabetically, Z-A
                                            </option>
                                            <option value={'price'}>
                                                Price, low to high
                                            </option>
                                            <option value={'-price'}>
                                                Price, high to low
                                            </option>
                                            <option value={'createdAt'}>
                                                Date, old to new
                                            </option>
                                            <option value={'-createdAt'}>
                                                Date, new to old
                                            </option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="totalproducts mb-0">
                                            21 Products
                                        </p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img
                                                onClick={() => {
                                                    setGrid(3);
                                                }}
                                                src="images/gr4.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            ></img>
                                            <img
                                                onClick={() => {
                                                    setGrid(4);
                                                }}
                                                src="images/gr3.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            ></img>
                                            <img
                                                onClick={() => {
                                                    setGrid(6);
                                                }}
                                                src="images/gr2.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            ></img>
                                            <img
                                                onClick={() => {
                                                    setGrid(12);
                                                }}
                                                src="images/gr.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard
                                        data={productState ? productState : []}
                                        grid={grid}
                                    ></ProductCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default OutStore;
