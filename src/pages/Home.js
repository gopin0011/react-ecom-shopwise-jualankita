import React, { Component } from 'react'
import HomeDataService from "../services/home.service";
import Banner from '../components/home/Banner';
import ExclusiveProducts from '../components/home/ExclusiveProducts';
import BestProducts from '../components/home/BestProducts';
import FeaturedProducts from '../components/home/FeaturedProducts';

export class Home extends Component { 
    constructor(props) {
        super(props);
        this.retrieveHome = this.retrieveHome.bind(this);
        this.state = {
            banners: [],
            exclusive_products: {
                new_arrival: [],
                best_seller: [],
                flash_sale: [],
            },
            best_products: [],
            featured_products: [],
            currentProduct: null,
            currentIndex: -1,
            searchTitle: "",
            page: 1,
            count: 0,
            openModal : false,
            product: {},
        };
    }

    sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    retrieveHome() {
        // const { searchTitle, page } = this.state;
        // const params = this.getRequestParams(searchTitle, page);
        HomeDataService.home()
        .then((response) => {
            // console.log(response.data.data.banner_card);
            const banners = response.data.data.banner_card;
            const exclusive_products = response.data.data.exclusive_products;
            const best_products = this.sliceIntoChunks(response.data.data.bestselling_products, 2);
            const featured_products = this.sliceIntoChunks(response.data.data.featured_products, 5);
            // console.log(best_products);

            this.setState({
                banners: banners,
                exclusive_products: exclusive_products,
                best_products: best_products,
                featured_products: featured_products,
            });
        })
        .catch((e) => {
            console.log(e);
        });
    }

    componentDidMount() {
        this.retrieveHome();
    }

    render() {
        let IMAGE_URL = process.env.REACT_APP_SERVER_URL+"storage/uploads/sliders/";
            return (
                <React.Fragment>
                    <Banner data={this.state.banners} />

                    <ExclusiveProducts new_arrival={this.state.exclusive_products.new_arrival} best_seller={this.state.exclusive_products.best_seller} flash_sale={this.state.exclusive_products.flash_sale} />

                    <div className="section pb_20 small_pt">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single_banner">
                                        <img src={IMAGE_URL+"/png_20220105_224436_0000.png"} alt="png_20220105_224436_0000.png" />
                                        <div className="single_banner_info">
                                            <a href="shop-left-sidebar.html" className="single_bn_link">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single_banner">
                                        <img src={IMAGE_URL+"/WhatsApp_Image_2020-09-25_at_11_23_39.jpeg"} alt="WhatsApp_Image_2020-09-25_at_11_23_39.jpeg" />
                                        <div className="single_banner_info">
                                            <a href="shop-left-sidebar.html" className="single_bn_link">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <BestProducts best_products={this.state.best_products} />

                    <div className="section pb_20 small_pt">
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <div className="sale_banner">
                                        <a className="hover_effect1" href="#">
                                            <img src={IMAGE_URL+"/garden-1.jpg"} alt="garden-1.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="sale_banner">
                                        <a className="hover_effect1" href="#">
                                            <img src={IMAGE_URL+"/listrik.jpg"} alt="listrik.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="sale_banner">
                                        <a className="hover_effect1" href="#">
                                            <img src={IMAGE_URL+"/wood-working-302.jpg"} alt="wood-working-302.jpg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <FeaturedProducts featured_products={this.state.featured_products} />

                </React.Fragment>
        )
    }
}

export default Home