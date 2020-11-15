import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    _id: "1",
                    title: "Nike Shoe 01",
                    src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                    description: "UI/UX designing, html css tutorial",
                    content:
                        "The Nike Air Zoom Tempo NEXT5 mixes durability with a design that helps push you towards your personal best. The result is a shoe built like a racer, but made for your everyday training routine.",
                    price: 77,
                    color: ["red", "black", "blue", "crimson", "teal"],
                    count: 1,
                },
                {
                    _id: "2",
                    title: "Nike Shoe 02",
                    src: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
                    description: "UI/UX designing, html css tutorial",
                    content:
                        "The Nike Air Zoom Tempo NEXT7 mixes durability with a design that helps push you towards your personal best. The result is a shoe built like a racer, but made for your everyday training routine.",
                    price: 81,
                    color: ["red", "black", "white", "crimson", "teal"],
                    count: 1,
                },
                {
                    _id: "3",
                    title: "Nike Shoe 03",
                    src: "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
                    description: "UI/UX designing, html css tutorial",
                    content:
                        "The Nike Air Zoom Tempo NEXTQ mixes durability with a design that helps push you towards your personal best. The result is a shoe built like a racer, but made for your everyday training routine.",
                    price: 3,
                    color: ["red", "white", "black", "crimson", "teal"],
                    count: 1,
                },
                {
                    _id: "4",
                    title: "Nike Shoe 04",
                    src: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                    description: "UI/UX designing, html css tutorial",
                    content:
                        "The Nike Air Zoom Tempo NEXTJ mixes durability with a design that helps push you towards your personal best. The result is a shoe built like a racer, but made for your everyday training routine.",
                    price: 55,
                    color: ["red", "black", "crimson", "teal"],
                    count: 1,
                },
                {
                    _id: "5",
                    title: "Nike Shoe 05",
                    src: "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
                    description: "UI/UX designing, html css tutorial",
                    content:
                        "The Nike Air Zoom Tempo NEXTJ mixes durability with a design that helps push you towards your personal best. The result is a shoe built like a racer, but made for your everyday training routine.",
                    price: 25,
                    color: ["red", "black", "crimson", "teal"],
                    count: 1,
                },
                {
                    _id: "6",
                    title: "Nike Shoe 06",
                    src: "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                    description: "UI/UX designing, html css tutorial",
                    content:
                        "The Nike Air Zoom Tempo NEXTN mixes durability with a design that helps push you towards your personal best. The result is a shoe built like a racer, but made for your everyday training routine.",
                    price: 53,
                    color: ["red", "black", "crimson", "teal"],
                    count: 1,
                },
                {
                    _id: "7",
                    title: "Nike Shoe 07",
                    src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                    description: "UI/UX designing, html css tutorial",
                    content:
                        "The Nike Air Zoom Tempo NEXTN mixes durability with a design that helps push you towards your personal best. The result is a shoe built like a racer, but made for your everyday training routine.",
                    price: 43,
                    color: ["red", "black", "crimson", "teal"],
                    count: 1,
                },
                {
                    _id: "8",
                    title: "Nike Shoe 08",
                    src: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
                    description: "UI/UX designing, html css tutorial",
                    content:
                        "The Nike Air Zoom Tempo NEXTU mixes durability with a design that helps push you towards your personal best. The result is a shoe built like a racer, but made for your everyday training routine.",
                    price: 62,
                    color: ["red", "black", "crimson", "teal"],
                    count: 1,
                },
                {
                    _id: "9",
                    title: "Nike Shoe 09",
                    src: "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
                    description: "UI/UX designing, html css tutorial",
                    content:
                        "The Nike Air Zoom Tempo NEXT1 mixes durability with a design that helps push you towards your personal best. The result is a shoe built like a racer, but made for your everyday training routine.",
                    price: 99,
                    color: ["red", "black", "crimson", "teal"],
                    count: 1,
                },
                {
                    _id: "10",
                    title: "Nike Shoe 10",
                    src: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                    description: "UI/UX designing, html css tutorial",
                    content:
                        "The Nike Air Zoom Tempo NEXTO mixes durability with a design that helps push you towards your personal best. The result is a shoe built like a racer, but made for your everyday training routine.",
                    price: 20,
                    color: ["red", "black", "crimson", "teal"],
                    count: 1,
                },
            ],
            carts: [],
            total: 0
        };
    }

    addToCart = (id) => {
        const { products, carts } = this.state;

        const check = carts.every((item) => {
            return item._id !== id;
        });

        if (check) {
            const data = products.filter((product) => {
                return product._id === id;
            });
            this.setState((state) => {
                return {
                    carts: [...data, ...carts],
                };
            });
        } else {
            alert("The product has been added to cart !");
        }
    };

    reduction = (id) => {
       const {carts} = this.state;
       carts.forEach(item => {
         if(item._id === id) {
           item.count === 1 ? item.count = 1 : item.count -= 1;
         }
       });
       this.setState({carts: carts});
       this.getTotal(); 
    };

    increase = (id) => {
      const {carts} = this.state;
      carts.forEach(item => {
        if(item._id === id) {
          item.count += 1;
        }
      });
      this.setState({carts: carts});
      this.getTotal(); 
    };

    removeProduct = (id) => {
     if(window.confirm("This is product is delete from cart!")) {
        const {carts} = this.state;

        carts.forEach((item, index) => {
          if (item._id === id) {
            carts.splice(index, 1);
          }
        })
  
        this.setState({carts: carts});
        this.getTotal(); 
      }
    
    };

    getTotal = () => {
        const {carts} = this.state;
        const res = carts.reduce((prev, item) => {
            return prev + (item.price * item.count);
        }, 0);
        this.setState({total: res})
    };

    componentDidUpdate() {
        localStorage.setItem("dataCart", JSON.stringify(this.state.carts));
        localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
    };

    componentDidMount() {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null) {
            this.setState({carts: dataCart});
        }

        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null) {
            this.setState({total: dataTotal});
        }
    }

    render() {
        const { products, carts, total } = this.state;
        const { addToCart, reduction, increase, removeProduct, getTotal } = this;
        return (
            <DataContext.Provider value={{ products, carts, total,  addToCart, reduction, increase, removeProduct, getTotal }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}
