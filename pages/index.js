import { useEffect } from "react";
import Head from "next/head";
import { menuRequest } from "../redux/actions";
import { connect } from "react-redux";
import Link from "next/link";
function Home() {
  return (
    <>
      <a class="cartBtn">
        <span>1</span>
        <img src="vercel.svg" />
      </a>

      <div class="off-canvas-main">
        <div class="container-fluid">
          <header class="row border-bottom">
            <div class="col-12 px-0 top-gry">
              <div class="container">
                <div class="row">
                  <div class="text-right col-12">
                    <Link href="/brand">Brand</Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 px-0 bg-white py-3">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-5 col-md-4">
                    <ul class="list-inline m-0">
                      <li class="list-inline-item">
                        <div class="hamburger-icon" id="desktop-hamburger">
                          <div class="top"></div>
                          <div class="middle"></div>
                          <div class="bottom"></div>
                        </div>
                      </li>
                      <li class="list-inline-item call nowrap">
                        <span>
                          <a>
                            <img src="../static/images/call.png" alt="logo" />
                          </a>
                        </span>
                        <span class="pl-l fw-700 d-none d-md-inline-block">
                          1800-103-3314
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-4 d-none d-md-block">
                    <div class="classSearch">
                      <input
                        type="text"
                        name=""
                        class="form-control"
                        placeholder="Search by Brand / Product"
                      />
                    </div>
                  </div>
                  <div class="col-7 col-md-4 text-right center-logo">
                    <a>
                      <img src="../static/images/logo.png" class="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section class="row">
            <div class="col-12 p-0">
              <div
                id="carouselHome"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active carousel-item-left">
                    <img
                      class="w-100 d-none d-md-block"
                      src="../static/images/banner.jpg"
                      alt="First slide"
                    />
                    <img
                      class="w-100 d-block d-md-none "
                      src="../static/images/mobile-banner.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item carousel-item-next carousel-item-left">
                    <img
                      class="w-100 d-none d-md-block"
                      src="../static/images/banner.jpg"
                      alt="First slide"
                    />
                    <img
                      class="w-100 d-block d-md-none"
                      src="../static/images/mobile-banner.jpg"
                      alt="First slide"
                    />
                  </div>
                </div>

                <a
                  class="carousel-control-prev"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </section>

          <section class="row py-2">
            <div class="col-12 p-0">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-md-3 p-3 pr-md-0">
                    <div class="p-3 shadow-sm border rounded">
                      <div>
                        <h3 class="h4 fw-700 text-uppercase m-0">
                          Deal of the day
                        </h3>
                        <p class="fs-12 mb-2">
                          Amazing Deals from choicest brands!
                        </p>
                      </div>
                      <div class="shadow-sm mb-3">
                        <a>
                          <img
                            src="../static/images/deals.jpg"
                            alt="deals"
                            class="w-100"
                          />
                        </a>
                      </div>
                      <div class="text-right">
                        <a class="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">
                          VIEW MORE
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 p-3">
                    <div class="p-3 shadow-sm border rounded">
                      <div>
                        <h3 class="h4 fw-700 text-uppercase m-0">Offers</h3>
                        <p class="fs-14 mb-2">
                          Top discounts & deals on leading brands!
                        </p>
                      </div>
                      <div class="shadow-sm mb-3">
                        <a>
                          <img
                            src="../static/images/offers-1.jpg"
                            alt="offers-1"
                            class="w-100"
                          />
                        </a>
                      </div>
                      <div class="shadow-sm mb-3">
                        <a>
                          <img
                            src="../static/images/offers-2.jpg"
                            alt="offers-1"
                            class="w-100"
                          />
                        </a>
                      </div>
                      <div class="text-right">
                        <a class="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">
                          VIEW MORE
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-3 p-3 pl-md-0">
                    <div class="p-3 shadow-sm border rounded">
                      <div>
                        <h3 class="h4 fw-700 text-uppercase m-0">discounts</h3>
                        <p class="fs-12 mb-2">
                          Buy fast moving brands just for you
                        </p>
                      </div>
                      <div class="shadow-sm mb-3">
                        <a>
                          <img
                            src="../static/images/discount.jpg"
                            alt="dicount"
                            class="w-100"
                          />
                        </a>
                      </div>
                      <div class="text-right">
                        <a class="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="row py-3 py-md-4">
            <div class="col-12 p-0">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <h3 class="h4 fw-700 text-uppercase">TRENDING CATEGORY</h3>
                  </div>

                  <div class="col-12 px-4">
                    <div class="row">
                      <div class="col-6 col-md-3 p-2">
                        <div class="productList border rounded-top">
                          <img
                            src="../static/images/1.jpg"
                            alt="product image"
                            class="w-100 rounded-top"
                          />
                          <div class="pr-det text-center">
                            <div class="logoBox">
                              <img src="../static/images/logos/7.png" />
                            </div>
                            <div class="text-danger text-uppercase fw-700 py-2">
                              Save Upto 10%
                            </div>
                            <a class="btn btn-danger btn-block fs-14 py-1 rounded-0">
                              SHOP NOW
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="col-6 col-md-3 p-2">
                        <div class="productList border rounded-top">
                          <img
                            src="../static/images/2.jpg"
                            alt="product image"
                            class="w-100 rounded-top"
                          />
                          <div class="pr-det text-center">
                            <div class="logoBox">
                              <img src="../static/images/logos/8.png" />
                            </div>
                            <div class="text-danger text-uppercase fw-700 py-2">
                              Save Upto 10%
                            </div>
                            <a class="btn btn-danger btn-block fs-14 py-1 rounded-0">
                              SHOP NOW
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="col-6 col-md-3 p-2">
                        <div class="productList border rounded-top">
                          <img
                            src="../static/images/3.jpg"
                            alt="product image"
                            class="w-100 rounded-top"
                          />
                          <div class="pr-det text-center">
                            <div class="logoBox">
                              <img src="../static/images/logos/9.png" />
                            </div>
                            <div class="text-danger text-uppercase fw-700 py-2">
                              Save Upto 10%
                            </div>
                            <a class="btn btn-danger btn-block fs-14 py-1 rounded-0">
                              SHOP NOW
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="col-6 col-md-3 p-2">
                        <div class="productList border rounded-top">
                          <img
                            src="../static/images/4.jpg"
                            alt="product image"
                            class="w-100 rounded-top"
                          />
                          <div class="pr-det text-center">
                            <div class="logoBox">
                              <img src="../static/images/logos/10.png" />
                            </div>
                            <div class="text-danger text-uppercase fw-700 py-2">
                              Save Upto 10%
                            </div>
                            <a class="btn btn-danger btn-block fs-14 py-1 rounded-0">
                              SHOP NOW
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="row DiscountsOffersRecent">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-4 py-3 py-md-4">
                  <h3 class="fs-16 fw-400 border-bottom pb-2 text-uppercase">
                    Best Discounts
                  </h3>
                  <div class="Discounts-owl-carousel owl-carousel">
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/1.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/2.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/3.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/4.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/5.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/6.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/7.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/8.png" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-4 py-3 py-md-4">
                  <h3 class="fs-16 fw-400 border-bottom pb-2 text-uppercase">
                    Best Offers
                  </h3>
                  <div class="Offers-owl-carousel owl-carousel">
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/9.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/10.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/1.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/2.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/3.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/4.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/5.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/6.png" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-4 py-3 py-md-4">
                  <h3 class="fs-16 fw-400 border-bottom pb-2 text-uppercase">
                    YOUR FAVOURITE
                  </h3>
                  <div class="Recent-owl-carousel owl-carousel">
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/7.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/8.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/9.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/10.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/1.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/2.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/3.png" />
                      </div>
                    </div>
                    <div class="item">
                      <div class="border">
                        <img src="../static/images/logos/4.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="row TrendingBrands py-3 py-md-4">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h3 class="fs-22 text-uppercase fw-700 text-muted">
                    <span>Trending Brands</span>
                  </h3>
                </div>
                <div class="col-12">
                  <div class="TrendingBrands-owl-carousel owl-carousel">
                    <div class="item">
                      <div class="productList border rounded p-0">
                        <img
                          src="../static/images/tranding-brand/1.jpg"
                          alt="product image"
                          class="w-100 rounded"
                        />
                        <div class="pr-det text-center">
                          <div class="logoBox">
                            <img src="../static/images/tranding-brand/1.png" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="productList border rounded p-0">
                        <img
                          src="../static/images/tranding-brand/2.jpg"
                          alt="product image"
                          class="w-100 rounded"
                        />
                        <div class="pr-det text-center">
                          <div class="logoBox">
                            <img src="../static/images/tranding-brand/2.png" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="productList border rounded p-0">
                        <img
                          src="../static/images/tranding-brand/3.jpg"
                          alt="product image"
                          class="w-100 rounded"
                        />
                        <div class="pr-det text-center">
                          <div class="logoBox">
                            <img src="../static/images/tranding-brand/3.png" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="productList border rounded p-0">
                        <img
                          src="../static/images/tranding-brand/4.jpg"
                          alt="product image"
                          class="w-100 rounded"
                        />
                        <div class="pr-det text-center">
                          <div class="logoBox">
                            <img src="../static/images/tranding-brand/5.png" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="productList border rounded p-0">
                        <img
                          src="../static/images/tranding-brand/5.jpg"
                          alt="product image"
                          class="w-100 rounded"
                        />
                        <div class="pr-det text-center">
                          <div class="logoBox">
                            <img src="../static/images/tranding-brand/4.png" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="productList border rounded p-0">
                        <img
                          src="../static/images/tranding-brand/6.jpg"
                          alt="product image"
                          class="w-100 rounded"
                        />
                        <div class="pr-det text-center">
                          <div class="logoBox">
                            <img src="../static/images/tranding-brand/6.png" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="productList border rounded p-0">
                        <img
                          src="../static/images/tranding-brand/7.jpg"
                          alt="product image"
                          class="w-100 rounded"
                        />
                        <div class="pr-det text-center">
                          <div class="logoBox">
                            <img src="../static/images/tranding-brand/1.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer class="row footer-arya pb-0">
            <div class="container">
              <div class="row">
                <div class="col-12 d-block d-md-none"></div>

                <div class="col-12 pb-3">
                  <ol class="footerVerticalLinks">
                    <li class="footerVerticalLinks-item">CATEGORY</li>
                    <li class="footerVerticalLinks-item">
                      <a>Apparel &amp; Accessories</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Food &amp; Beverage</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Mobile &amp; Electronics</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Health &amp; Wellness</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Movie &amp; Magazines</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Cabs &amp; Travel</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>e-Com &amp; Online</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Grocery &amp; Home Needs</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Apparel &amp; Accessories</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Food &amp; Beverage</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Mobile &amp; Electronics</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Health &amp; Wellness</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Movie &amp; Magazines</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Cabs &amp; Travel</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>e-Com &amp; Online</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Grocery &amp; Home Needs</a>
                    </li>
                  </ol>
                </div>
                <div class="col-12 pb-4">
                  <ol class="footerVerticalLinks">
                    <li class="footerVerticalLinks-item">BRANDS</li>
                    <li class="footerVerticalLinks-item">
                      <a>ALDO</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Allen Solly</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Armani Exchange</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Arrow</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>BEBE</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Bata</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Benetton</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Central</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Club SP</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Coach</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Elle</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Fastrack</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Flying Machine</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Baskin Robbins</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Cafe Coffee Day Online</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Costa Coffee</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>KFC</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Machaan</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Mainland China</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>ALDO</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Allen Solly</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Armani Exchange</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Arrow</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>BEBE</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Bata</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Benetton</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Central</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Club SP</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Coach</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Elle</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Fastrack</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Flying Machine</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Baskin Robbins</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Cafe Coffee Day Online</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Costa Coffee</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>KFC</a>
                    </li>
                    <li class="footerVerticalLinks-item">
                      <a>Machaan</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="container-fluid br-b-1 br-t-1 bg-fbfbfb br-color-light pt-4 pb-4">
              <div class="row">
                <div class="container">
                  <div class="row justify-content-md-center">
                    <div class="col-lg-8">
                      <div class="row align-items-end">
                        <div class="col-md-6 pr-lg-5">
                          <div class="row">
                            <div class="col-12">
                              <h5 class="m-0 fs-16">Subscribe</h5>
                            </div>
                            <div class="col-12">
                              <form class="DownloadSMSform subscribeForm">
                                <div class="d-block w-100">
                                  <ul class="list-inline customNewCheck br-0 m-0 p-0 py-1">
                                    <li class="list-inline-item">
                                      <input type="checkbox" id="OffersCheck" />
                                      <label for="OffersCheck">Offers</label>
                                    </li>
                                    <li class="list-inline-item">
                                      <input type="checkbox" id="BrandsCheck" />
                                      <label for="BrandsCheck">Brands</label>
                                    </li>
                                    <li class="list-inline-item">
                                      <input type="checkbox" id="allCheck" />
                                      <label for="allCheck">All</label>
                                    </li>
                                  </ul>
                                </div>
                                <div class="formFild mt-1">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id=""
                                    placeholder="E-Mail"
                                  />
                                  <button class="btn btn-outline-dark">
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6 pl-lg-5 mt-3 mt-md-0">
                          <div class="row">
                            <div class="col-12">
                              <h5 class="m-0 fs-16">Download</h5>
                            </div>
                            <div class="col-12">
                              <ul class="list-inline br-0 m-0 p-0 pt-1 pb-2 DownloadAppNew">
                                <li class="list-inline-item">
                                  <a></a>
                                  <a>
                                    <img
                                      src="../static/images/apple-icon.png"
                                      alt=""
                                    />
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a>
                                    <img src="../static/images/pl.png" alt="" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="col-12">
                              <form class="DownloadSMSform">
                                <div class="formFild mt-1">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id=""
                                    placeholder="Download via SMS"
                                  />
                                  <button class="btn btn-outline-dark">
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col collepsMobileOne">
                      <h4>ABOUT</h4>
                      <ul class="footer-linke">
                        <li>
                          <a>Contact Us</a>
                        </li>
                        <li>
                          <a>About Us</a>
                        </li>
                        <li>
                          <a>Careers</a>
                        </li>
                        <li>
                          <a>Blogs</a>
                        </li>
                        <li>
                          <a>Press</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col collepsMobileTwo">
                      <h4>CUSTOMER CARE</h4>
                      <ul class="footer-linke">
                        <li>
                          <a>Helpline 1800419915</a>
                        </li>
                        <li>
                          <a>Request a Call Back</a>
                        </li>
                        <li>
                          <a>FAQs</a>
                        </li>
                        <li>
                          <a>Program T&amp;C</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col collepsMobileThree">
                      <h4>MY ACCOUNT</h4>
                      <ul class="footer-linke">
                        <li>
                          <a>Login</a>
                        </li>
                        <li>
                          <a>My Transactions</a>
                        </li>
                        <li>
                          <a>My Profile</a>
                        </li>
                        <li>
                          <a>About BPCL PetroMiles</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col">
                      <div class="row">
                        <div class="col-sm-12 collepsMobileFour">
                          <h4>SOCIAL</h4>
                          <ul class="list-inline footer-social">
                            <li class="list-inline-item">
                              <a>
                                <i class="fab fa-facebook-square"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a>
                                <i class="fab fa-twitter-square"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a>
                                <i class="fab fa-instagram"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid br-t-1 pt-md-3 mt-md-3">
              <div class="row">
                <div class="container">
                  <div class="row">
                    <div class="col-12 text-center text-lg-right mt-2 mt-lg-0">
                      <ul class="payment-logos">
                        <li class="visa">Visa</li>
                        <li class="mastercard">MasterCard</li>
                        <li class="american-express">American Express</li>
                        <li class="diners-club">Diners Club</li>
                        <li class="rupay">Rupay</li>
                        <li class="EMIOptions">EMI Options</li>
                        <li class="NetBanking">Net Banking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid footerLast">
              <div class="row">
                <div class="container">
                  <div class="row align-items-center text-center">
                    <div class="col-12 col-md-8 text-md-left">
                      © 2016. Vouchagram India Pvt. Ltd{" "}
                      <span class="pr-2 pl-2">|</span> <a>Privacy Policy</a>
                      <span class="pr-2 pl-2">|</span>
                      <a>Terms of Use</a>{" "}
                    </div>
                    <div class="col-12 col-md-4 text-md-right pt-2 pt-md-0">
                      <div class="d-inline-block">
                        <span class="d-inline-block mt-2 mr-2">Powered by</span>
                        <a target="_blank" class="float-right">
                          <img
                            src="../static/images/footer-logo.png"
                            alt="GyFtr"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 bg-danger text-center text-white fs-14 px-0 mt-3">
              <div class="container py-3">
                For more details, please contact our Phone Banking Nubers: 1860
                500 5004/ +91 22 4406 6666 or
                <br /> visit{" "}
                <a target="_blank" class="text-white">
                  www.indusind.com
                </a>{" "}
                or write to us at <a class="text-white">reachus@indusind.com</a>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* <!-- login --> */}
      <div
        class="modal customModal"
        tabindex="-1"
        role="dialog"
        id="login"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <a class="close-btn" data-dismiss="modal">
              close
            </a>
            <div class="modal-body">
              <div>
                <div class="row">
                  <div
                    class="col-12 fs-24 text-danger"
                    style={{ marginTop: "-18px" }}
                  >
                    <span class="d-inline-block px-1 bg-white">
                      Login/Signup
                    </span>
                  </div>
                  <div class="col-12 py-4">
                    <form id="form2">
                      <div class="form-group">
                        <input
                          type="number"
                          class="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Mobile"
                        />
                        <div
                          class="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Mobile Number
                        </div>
                      </div>
                      <div class="d-block">
                        <button
                          type="button"
                          class="btn btn-danger px-4 rounded-0 text-uppercase"
                          data-dismiss="modal"
                          data-toggle="modal"
                          data-target="#PasswordMod"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- PasswordMod --> */}
      <div
        class="modal customModal"
        tabindex="-1"
        role="dialog"
        id="PasswordMod"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <a class="close-btn" data-dismiss="modal">
              PasswordMod Password
            </a>
            <div class="modal-body">
              <div>
                <div class="row">
                  <div
                    class="col-12 fs-24 text-danger"
                    style={{ marginTop: "-18px" }}
                  >
                    <span class="d-inline-block px-1 bg-white">
                      Login/Signup
                    </span>
                  </div>
                  <div class="col-12 py-4">
                    <form id="form2">
                      <div class="form-group">
                        <input
                          type="number"
                          class="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Mobile"
                          value="9910448494"
                        />
                        <div
                          class="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Mobile Number
                        </div>
                      </div>
                      <div class="form-group m-0">
                        <input
                          type="text"
                          class="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterMobileN"
                          placeholder="Enter Password"
                        />
                        <div
                          class="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Password
                        </div>
                      </div>
                      <div class="form-group text-right">
                        <a class="font-italic fs-12 text-danger">
                          Forgot Password
                        </a>
                      </div>
                      <div class="d-block">
                        <button
                          type="button"
                          class="btn btn-danger px-4 rounded-0 text-uppercase"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- OTP --> */}
      <div
        class="modal customModal"
        tabindex="-1"
        role="dialog"
        id="Forgot"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <a class="close-btn" data-dismiss="modal">
              Forgot Password
            </a>
            <div class="modal-body">
              <div>
                <div class="row">
                  <div
                    class="col-12 fs-24 text-danger"
                    style={{ marginTop: "-18px" }}
                  >
                    <span class="d-inline-block px-1 bg-white">
                      Login/Signup
                    </span>
                  </div>
                  <div class="col-12 py-4">
                    <form id="form2">
                      <div class="form-group">
                        <input
                          type="number"
                          class="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Mobile"
                        />
                        <div
                          class="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Mobile Number
                        </div>
                      </div>
                      <div class="form-group m-0">
                        <input
                          type="text"
                          class="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterMobileN"
                          placeholder="Enter OTP"
                        />
                        <div
                          class="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Valid OTP
                        </div>
                      </div>
                      <div class="form-group text-right">
                        <a class="font-italic fs-12 text-danger">Resend OTP</a>
                      </div>
                      <div class="d-block">
                        <button
                          type="button"
                          class="btn btn-primary px-4 fw-600 btn-lg rounded-0 text-uppercase"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Signup --> */}
      <div
        class="modal customModal"
        tabindex="-1"
        role="dialog"
        id="login"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <a class="close-btn" data-dismiss="modal">
              close
            </a>
            <div class="modal-body">
              <div>
                <div class="row">
                  <div
                    class="col-12 fs-24 text-danger"
                    style={{ marginTop: "-18px" }}
                  >
                    <span class="d-inline-block px-1 bg-white">
                      Login/Signup
                    </span>
                  </div>
                  <div class="col-12 py-4">
                    <form id="form2">
                      <div class="form-group">
                        <input
                          type="number"
                          class="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Mobile"
                        />
                        <div
                          class="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Mobile Number
                        </div>
                      </div>

                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Name"
                        />
                        <div
                          class="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Valid Name
                        </div>
                      </div>

                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Email"
                        />
                        <div
                          class="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Valid Email
                        </div>
                      </div>

                      <div class="d-block">
                        <button
                          type="button"
                          class="btn btn-danger px-4 rounded-0 text-uppercase"
                        >
                          Signup
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
