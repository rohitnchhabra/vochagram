import React, {useEffect} from "react";
import { connect } from "react-redux";
import { menuRequest } from "../redux/actions";
import Router from "next/router";

function brand({ menu }) {
  useEffect(() => {
    if (!menu.data.length) {
      Router.push("/");
    }
  }, [menu.data]);

  return (
    <>
      <a class="cartBtn">
        <span>1</span>
        <img src="../static/images/cart.png" />
      </a>
      <div class="off-canvas-nav">
        <div class="left-nav-toplink">
          <div class="left-nav">
            <ul class="list-unstyled m-0">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>New Arrivals</a>
              </li>
              <li class="show-mobile parent">
                <a data-related="title_1">Categories</a>
              </li>
              <li>
                <a>Discounts</a>
              </li>
              <li>
                <a>Bogo</a>
              </li>
              <li>
                <a>Check My Voucher Status</a>
              </li>
              <li>
                <a>Resend My Voucher</a>
              </li>
              <li>
                <a>My Transactions</a>
              </li>
              <li>
                <a>Customer Care</a>
              </li>
            </ul>
            <div class="subMenu" id="categories">
              <div class="text-right nav-back">
                <span>Categories</span>
              </div>
              <ul class="list-unstyled m-0">
                <li>
                  <a>Apparel & Accessories</a>
                </li>
                <li>
                  <a>Food & Beverage</a>
                </li>
                <li>
                  <a>Grocery & Home Needs</a>
                </li>
                <li>
                  <a>Mobile & Electronics</a>
                </li>
                <li>
                  <a>Health & Wellness</a>
                </li>
                <li>
                  <a>e-Com & Online</a>
                </li>
                <li>
                  <a>Entertainment & Magazines</a>
                </li>
                <li>
                  <a>Cabs & Travel</a>
                </li>
                <li>
                  <a>All Brands</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="off-canvas-main">
        <div class="container-fluid">
          <header class="row border-bottom">
            <div class="col-12 px-0 top-gry">
              <div class="container">
                <div class="row">
                  <div class="text-right col-12">
                    <ul class="list-inline top-links">
                      <li class="list-inline-item dropdown">
                        {" "}
                        <a
                          class="dropdown-toggle"
                          id="ProfileMenu"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Hi Amitabh Kumar!
                        </a>
                        <div
                          class="dropdown-menu dropdown-menu-right shadow rounded-0 fs-14 border-0 mt-1"
                          aria-labelledby="ProfileMenu"
                        >
                          <a class="d-block p-2 lh-1">
                            {" "}
                            <span class="pr-2">
                              <img src="../static/images/profile-icon.png" />
                            </span>{" "}
                            My Profile
                          </a>
                          <a class="d-block p-2 lh-1">
                            {" "}
                            <span class="pr-2">
                              <img src="../static/images/tr-icon.png" />
                            </span>{" "}
                            My Transaction
                          </a>
                          <a class="d-block p-2 lh-1">
                            {" "}
                            <span class="pr-2">
                              <img src="../static/images/logout-icon.png" />
                            </span>{" "}
                            Logout
                          </a>
                        </div>
                      </li>
                    </ul>
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
                        {" "}
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
          <nav class="desktopNav row border-bottom bg-white">
            <div class="container">
              <ul>
                {menu.data.map((item) => (
                  <li key={item.slug}>
                    <a>
                      <figure>
                        <img src={item.icon_url} alt={item.name} />
                        <figcaption>{item.name}</figcaption>
                      </figure>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <section class="row">
            <div class="col-12 px-0">
              <img
                src="../static/images/brand-banner.jpg"
                class="w-100 d-none d-md-block"
              />
              <img
                src="../static/images/brand-mobile-banner.jpg"
                class="w-100 d-block d-md-none"
              />
            </div>
          </section>
          <section class="row brandPage pb-3 pb-md-4">
            <div class="col-12 px-0">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-lg-8">
                    <div class="bg-white px-3 border">
                      <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-transparent px-0 m-0 fs-14 fw-600 justify-content-end pb-md-0">
                          <li class="breadcrumb-item text-uppercase">
                            <a>HOME</a>
                          </li>
                          <li class="breadcrumb-item text-uppercase">
                            <a>Grocery &amp; Home Needs</a>
                          </li>
                          <li
                            class="breadcrumb-item text-uppercase active"
                            aria-current="page"
                          >
                            More
                          </li>
                        </ol>
                      </nav>
                      <div>
                        <div class="pb-3">
                          <img src="../static/images/more.png" />
                        </div>
                        <h2 class="h6">
                          Buy/Redeem MORE Gift Vouchers &amp; Gift Card
                        </h2>
                        <p class="fs-14 m-0">
                          Owned by More Retail Limited, More stores are
                          hypermarkets for every home need. Customers find
                          groceries, home essentials, cosmetics, fashion
                          essentials, etc under one roof. Choose More Gift Cards
                          and Gift Vouchers for cashless shopping.
                        </p>
                      </div>
                      <div class="productPageCoupon p-3 my-3">
                        <div class="row">
                          <div class="col-12">
                            <label class="fs-14 fw-700">Your Promo Code</label>
                            <div class="row align-items-end pb-1 promoFild">
                              <div class="col-7 col-md-9 pr-0">
                                <input
                                  type="text"
                                  class="form-control text-success"
                                  name=""
                                  value="SBNPZ"
                                />{" "}
                                <a class="editPromo" title="Edit Promocode">
                                  <i class="far fa-edit"></i>
                                </a>
                              </div>
                              <div class="col-5 col-md-3 pl-0">
                                <button class="btn btn-outline-success btn-block fs-14 rounded-0">
                                  APPLIED
                                </button>
                              </div>
                            </div>
                            <p class="fs-14 m-0 pb-1">
                              <i class="fas fa-check-circle text-success"></i>{" "}
                              Promo applied successfully.
                            </p>
                            <p class="fs-14 m-0 pb-1">
                              <i class="fas fa-times-circle text-danger"></i>{" "}
                              Invalid Promo Code.
                            </p>
                            <p class="fs-14 m-0 pb-1">
                              You got a discount of ₹ 515
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="productPageCoupon OrangeBox px-3 py-1 my-3 GreenBox">
                        <div class="row align-items-center">
                          <div class="col-auto border-right">
                            <div class="custom-control custom-radio">
                              <input
                                type="radio"
                                id="SBNPZ"
                                name="customRadio"
                                class="custom-control-input"
                                checked=""
                              />
                              <label
                                class="custom-control-label fs-16 fw-600"
                                for="SBNPZ"
                              >
                                SBNPZ
                              </label>
                            </div>
                          </div>
                          <div class="col">
                            <p class="m-0 fs-14">
                              Save ₹ 500 (₹250 instant OFF + ₹250 cashback in
                              PayZapp wallet on applying the code on PayZapp
                              payment page).
                              <br />{" "}
                              <a class="text-danger">Terms &amp; Conditions</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="productPageCoupon OrangeBox px-3 py-1 my-3">
                        <div class="row align-items-center">
                          <div class="col-auto border-right">
                            <div class="custom-control custom-radio">
                              <input
                                type="radio"
                                id="SBAMZ"
                                name="customRadio"
                                class="custom-control-input"
                              />
                              <label
                                class="custom-control-label fs-16 fw-600"
                                for="SBAMZ"
                              >
                                SBAMZ
                              </label>
                            </div>
                          </div>
                          <div class="col">
                            <p class="m-0 fs-14">
                              Save ₹ 500 (₹250 instant OFF + ₹250 cashback in
                              PayZapp wallet on applying the code on PayZapp
                              payment page).
                              <br />{" "}
                              <a class="text-danger">Terms &amp; Conditions</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="pt-2">
                        <h5 class="text-uppercase text-muted pb-2">
                          Select Voucher Value (₹)
                        </h5>
                        <table class="table cart-table brand-2 m-0 fs-14">
                          <thead>
                            <tr class="thead">
                              <th class="description">Value(₹)</th>
                              <th class="pa hideOnMobile">Offer</th>
                              <th class="quantity">Qty</th>
                              <th class="price">Total(₹)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="description">
                                <span>100</span>
                              </td>
                              <td class="pa hideOnMobile">
                                <div>
                                  <p>Free Promocode</p>
                                </div>
                              </td>
                              <td class="qty-td">
                                <div class="define-quantity">
                                  <input
                                    type="text"
                                    name="quantity"
                                    value="1"
                                    class="qty"
                                  />{" "}
                                  <span class="inc button">+</span>
                                  <span class="dec button">-</span>
                                </div>
                                <button
                                  type="button"
                                  class="btn btn-outline-danger fs-14 rounded-0 px-3 py-0"
                                >
                                  ADD
                                </button>
                              </td>
                              <td class="description">
                                <div>
                                  <span>90</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="description">
                                <span>250</span>
                              </td>
                              <td class="pa hideOnMobile">
                                <div>
                                  <p>Free ₹100 Bata Gift Voucher</p>
                                </div>
                              </td>
                              <td class="qty-td">
                                <div class="define-quantity">
                                  <input
                                    type="text"
                                    name="quantity"
                                    value="1"
                                    class="qty"
                                  />{" "}
                                  <span class="inc button">+</span>
                                  <span class="dec button">-</span>
                                </div>
                                <button
                                  type="button"
                                  class="btn btn-outline-danger fs-14 rounded-0 px-3 py-0"
                                >
                                  ADD
                                </button>
                              </td>
                              <td class="description">
                                <div>
                                  <span>225</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colspan="3"
                                class="pa hideOnDesktop border-0 mobile-offer"
                              >
                                <div>
                                  <p>
                                    <span class="text-secondary">Offes:</span>{" "}
                                    Free ₹100 Bata Gift Voucher
                                  </p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="description">
                                <span>500</span>
                              </td>
                              <td class="pa hideOnMobile">
                                <div>
                                  <p>10% Off</p>
                                </div>
                              </td>
                              <td class="qty-td">
                                <div class="define-quantity">
                                  <input
                                    type="text"
                                    name="quantity"
                                    value="1"
                                    class="qty"
                                  />{" "}
                                  <span class="inc button">+</span>
                                  <span class="dec button">-</span>
                                </div>
                                <button
                                  type="button"
                                  class="btn btn-outline-danger fs-14 rounded-0 px-3 py-0"
                                >
                                  ADD
                                </button>
                              </td>
                              <td class="description">
                                <div>
                                  <span>450</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="description">
                                <span>1000</span>
                              </td>
                              <td class="pa hideOnMobile">
                                <div>
                                  <p>10% Off</p>
                                </div>
                              </td>
                              <td class="qty-td">
                                <div class="define-quantity">
                                  <input
                                    type="text"
                                    name="quantity"
                                    value="1"
                                    class="qty"
                                  />{" "}
                                  <span class="inc button">+</span>
                                  <span class="dec button">-</span>
                                </div>
                                <button
                                  type="button"
                                  class="btn btn-outline-danger fs-14 rounded-0 px-3 py-0"
                                >
                                  ADD
                                </button>
                              </td>
                              <td class="description">
                                <div>
                                  <span>900</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="description">
                                <span>2000</span>
                              </td>
                              <td class="pa hideOnMobile">
                                <div>
                                  <p>10% Off</p>
                                </div>
                              </td>
                              <td class="qty-td">
                                <div class="define-quantity">
                                  <input
                                    type="text"
                                    name="quantity"
                                    value="1"
                                    class="qty"
                                  />{" "}
                                  <span class="inc button">+</span>
                                  <span class="dec button">-</span>
                                </div>
                                <button
                                  type="button"
                                  class="btn btn-outline-danger fs-14 rounded-0 px-3 py-0"
                                >
                                  ADD
                                </button>
                              </td>
                              <td class="description">
                                <div>
                                  <span>1800</span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4 topSticky">
                    {" "}
                    <a
                      data-toggle="modal"
                      data-target="#MobileSummaryPopup"
                      class="MobileSummaryBtn"
                    >
                      <span>Summary</span>
                      <span>₹ 800</span>
                    </a>
                    <div class="DesktopSummary">
                      <div class="SummaryRight shadow-none">
                        <div class="productPageBox px-3">
                          <div class="d-flex py-3 justify-content-between align-items-center">
                            <h3 class="fs-16 fw-700 m-0">SUMMARY</h3>
                          </div>
                          <div class="repaeatBox">
                            <div class="row py-2 border-bottom border-top">
                              <div class="col-12 text-uppercase fw-700 pt-1 text-muted">
                                <div class="d-flex justify-content-between align-items-center">
                                  {" "}
                                  <span>VERO MODA</span>
                                  <a class="text-muted fs-12">
                                    <i class="fas fa-trash-alt m-0"></i>
                                  </a>
                                </div>
                              </div>
                              <div class="col-8 py-1 fs-14">
                                ₹ 1000 <span class="text-success">(X 2)</span>
                              </div>
                              <div class="col-4 py-1 fs-14 text-right">
                                ₹ 2000
                              </div>
                            </div>
                            <div class="row py-2 border-bottom border-dot">
                              <div class="col-8 fs-14">Cash Savigs (10%)</div>
                              <div class="col-4 fs-14 text-right">₹ 200</div>
                            </div>
                            <div class="row py-3 border-bottom border-dot">
                              <div class="col-8 fs-14 fw-700">Sub Total</div>
                              <div class="col-4 fs-14 text-right fw-700">
                                ₹ 1800
                              </div>
                            </div>
                          </div>
                          <div class="repaeatBox">
                            <div class="row py-2 border-bottom border-top">
                              <div class="col-12 text-uppercase fw-700 pt-1 text-muted">
                                <div class="d-flex justify-content-between align-items-center">
                                  {" "}
                                  <span>BATA</span>
                                  <a class="text-muted fs-12">
                                    <i class="fas fa-trash-alt m-0"></i>
                                  </a>
                                </div>
                              </div>
                              <div class="col-8 py-1 fs-14">
                                ₹ 1000 <span class="text-success">(X 2)</span>
                              </div>
                              <div class="col-4 py-1 fs-14 text-right">
                                ₹ 2000
                              </div>
                            </div>
                            <div class="row py-2 border-bottom border-dot">
                              <div class="col-8 fs-14">Cash Savigs (10%)</div>
                              <div class="col-4 fs-14 text-right">₹ 200</div>
                            </div>
                            <div class="row py-3 border-bottom border-dot">
                              <div class="col-8 fs-14 fw-700">Sub Total</div>
                              <div class="col-4 fs-14 text-right fw-700">
                                ₹ 1800
                              </div>
                            </div>
                          </div>
                          <div class="row m-0 py-2 bg-dark text-white rounded my-3">
                            <div class="col-7 fs-18 fw-500">Net Payable</div>
                            <div class="col-5 fs-18 fw-500 text-right text-nowrap">
                              ₹ 3600
                            </div>
                          </div>
                        </div>
                        <div class="productPageBox px-3 mt-3 mt-md-4">
                          <div class="pt-3">
                            <div class="custom-control custom-checkbox fs-14 py-2">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customCheck1"
                                checked=""
                              />
                              <label
                                class="custom-control-label"
                                for="customCheck1"
                              >
                                I agree to the{" "}
                                <a
                                  data-toggle="modal"
                                  data-target="#tc"
                                  class="text-danger"
                                >
                                  Terms and Conditions
                                </a>
                              </label>
                            </div>
                          </div>
                          <div class="py-2">
                            <button
                              type="button"
                              class="btn btn-danger btn-block mb-2 fs-14"
                              data-toggle="modal"
                              data-target="#tcConfirmation"
                            >
                              BUY NOW
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-danger btn-block mb-2 fs-14"
                              data-toggle="modal"
                              data-target="#tcConfirmation"
                            >
                              ADD TO CART
                            </button>
                          </div>
                          <div class="pb-3 fs-12">
                            We accept Credit Card, Debit Card, Netbanking, EMIs,
                            Wallets
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="row impIns pb-3 pb-md-4">
            <div class="container">
              <div class="bg-white border">
                <div class="row m-0 bg-white ImportantInstructions align-items-center">
                  <div class="col-md-6 col-12 py-3 py-md-4 bg-light">
                    <h3 class="fs-16 text-uppercase">Important Instructions</h3>
                    <ul class="fs-14 m-0 ImportantInstructionsList">
                      <li>
                        Multiple Gift Vouchers <span>CAN</span> be used in one
                        bill.
                      </li>
                      <li>
                        Gift Vouchers <span>CAN</span> be used during Sale.
                      </li>
                      <li>
                        Gift Vouchers <span>ACCEPTED</span> at all Listed
                        Outlets.
                      </li>
                      <li class="dont">
                        Gift Vouchers <span>CANNOT</span> be used Online.
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6 col-lg-5 px-md-4 px-lg-5 col-12 py-3">
                    <div class="pb-3">
                      <div class="d-flex w-100 storeFinder align-items-center">
                        <div class="form-group w-100 m-0">
                          <input
                            type="text"
                            class="form-control"
                            name=""
                            placeholder="Store Locator"
                          />
                        </div>
                        <button
                          type="button"
                          class="btn rounded-0 border-bottom fs-14 py-1 sls"
                          data-toggle="modal"
                          data-target="#StoreLocator"
                        >
                          <i class="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn btn-outline-secondary text-uppercase rounded-0 btn-block"
                      data-toggle="modal"
                      data-target="#tc"
                    >
                      Terms &amp; Conditions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="row howTo pb-3">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h3 class="h4 text-uppercase fw-700 text-muted">
                    <span>How to Redeem</span>
                  </h3>
                </div>
                <div class="col-12">
                  <div class="how-to-Redeem-carousel owl-carousel stepsBox fs-12">
                    <div class="item m-1">
                      <figure>
                        <img src="../static/images/step_1.png" />
                        <figcaption>
                          <p>
                            Use the outlet locator to locate the nearest outlet
                            that accepts this Gift Voucher.
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                    <div class="item m-1">
                      <figure>
                        <img src="../static/images/step_2.png" />
                        <figcaption>
                          <p>Select your choice of product.</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div class="item m-1">
                      <figure>
                        <img src="../static/images/step_3.png" />
                        <figcaption>
                          <p>
                            Share your Gift Voucher with the cashier at the time
                            of billing & pay the remaining amount by cash or
                            card if required.
                          </p>
                        </figcaption>
                      </figure>
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
                <div class="col-12 d-block d-md-none">
                  {" "}
                  <a class="backToTop">Back to top</a>
                </div>
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
                          <a>help@gyftr.com</a>
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
                      <a>Terms of Use</a>
                    </div>
                    <div class="col-12 col-md-4 text-md-right pt-2 pt-md-0">
                      <div class="d-inline-block">
                        {" "}
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
                <br />
                visit{" "}
                <a target="_blank" class="text-white">
                  www.indusind.com
                </a>{" "}
                or write to us at <a class="text-white">reachus@indusind.com</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

brand.getInitialProps = (ctx) => {
  ctx.store.dispatch(menuRequest());
};

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

export default connect(mapStateToProps, null)(brand);
