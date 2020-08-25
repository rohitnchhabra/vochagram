import React, { useEffect } from "react";
import { connect } from "react-redux";
import { menuRequest } from "../redux/actions";
import Router from "next/router";

const websiteURL = "https://www.gyftr.com/hdfcsmartbuy/";
function brand({ menu }) {
  useEffect(() => {
    // if (!menu.data.length) {
    //   Router.push("/");
    // }
  }, [menu.isSuccess]);
  console.log(menu, "aaaaaaaaaaa");

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
          <nav class="row">
            <div class="container desktopNav bg-white">
              <ul className="border-bottom d-none d-lg-block">
                {menu.data.map((item, i) => (
                  <li key={i} class="dropdown spriteMenu">
                    <a
                      href={`${websiteURL}category/${item.slug}`}
                      class="dropdown-toggle"
                      id={`apparel-${item.slug}-Dropdown`}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <figure>
                        <img src={item.iconURL} alt={item.name} />
                        <figcaption>{item.name}</figcaption>
                      </figure>
                    </a>
                    {item.subMenu.length ? (
                      <div
                        class="dropdown-menu"
                        aria-labelledby={`apparel-${item.slug}-Dropdown`}
                      >
                        {item.subMenu.map((subItem, i) => {
                          return (
                            <a
                              key={i}
                              className="dropdown-item"
                              href={`${websiteURL}${item.subMenuLinks[i]}`}
                            >
                              {subItem}
                            </a>
                          );
                        })}
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
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
