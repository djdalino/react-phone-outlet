import React, { Component } from "react";
import { storeProducts, detailProduct } from "../../data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: JSON.parse(localStorage.getItem("detailProduct")) || [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    wishList: JSON.parse(localStorage.getItem("wishList")) || [],
    openModal: false,
    ccOpenModal: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    navbar: false,
  };
  componentDidMount() {
    this.setProducts();
    this.changeNavBar();
  }
  //navbar
  changeNavBar = () => {
    window.addEventListener("scroll", () => {
      let windowHeight = window.scrollY;
      if (windowHeight > 50) {
        this.setState(() => {
          return { navbar: true };
        });
      } else {
        this.setState(() => {
          return { navbar: false };
        });
      }
    });
  };

  //store product
  setProducts = () => {
    let tempProducts = [];

    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    console.log(product);
    this.setState(
      () => {
        return { detailProduct: product };
      },
      () => {
        localStorage.setItem(
          "detailProduct",
          JSON.stringify(this.state.detailProduct)
        );
      }
    );
  };

  //Add to cart
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart));

        this.addTotals();
        this.handleRemoveToWishList(id);
      }
    );
  };

  //Add to wish list
  addToWishList = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];

    product.inWishList = true;

    this.setState(
      () => {
        return {
          products: tempProducts,
          wishList: [...this.state.wishList, product],
        };
      },
      () => {
        localStorage.setItem("wishList", JSON.stringify(this.state.wishList));
      }
    );
  };

  handleRemoveToWishList = (id) => {
    let tempProducts = [...this.state.products];
    let tempWish = [...this.state.wishList];
    tempWish = tempWish.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inWishList = false;

    this.setState(
      () => {
        return {
          wishList: [...tempWish],
          products: [...tempProducts],
        };
      },
      () => {
        if (this.state.wishList.length >= 1) {
          let wishes = JSON.parse(localStorage.getItem("wishList"));
          wishes = wishes.filter((wish) => wish.id !== id);
          localStorage.setItem("wishList", JSON.stringify(wishes));
        } else {
          localStorage.removeItem("wishList");
        }
      }
    );
  };

  //Modal
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  //Cart
  handleIncrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  handleDecrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.handleRemoveItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  handleRemoveItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        let items = JSON.parse(localStorage.getItem("cart"));
        items = items.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(items));
        if (items.length === 0) {
          localStorage.removeItem("cart");
        }

        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        localStorage.removeItem("cart");
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  // Credit Card Modal
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  ccModalOpen = () => {
    this.setState(() => {
      return { ccModalOpen: true };
    });
  };
  ccModalClose = () => {
    this.setState(() => {
      return { ccModalOpen: false, number: "", name: "", expiry: "", cvc: "" };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.handleIncrement,
          decrement: this.handleDecrement,
          removeItem: this.handleRemoveItem,
          clearCart: this.clearCart,
          inputFocus: this.handleInputFocus,
          inputChange: this.handleInputChange,
          ccOpenModal: this.ccModalOpen,
          ccModalClose: this.ccModalClose,
          addToWishList: this.addToWishList,
          handleRemoveToWishList: this.handleRemoveToWishList,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
