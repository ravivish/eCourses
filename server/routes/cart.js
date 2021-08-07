const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");
const Product = require("../models/product");

router.post("/", (req, res) => { 
  if (!req.body) {
    res.status(400).send({ error: "parameters is not present in request" });
    return;
  }
  // console.log("sessionid: ",req.session.id);
  // console.log(req.body.productid);
  const sessionid = req.session.id;
  if (!sessionid) {
    res.status(400).send({ error: "you are not logged in" });
    return;
  }
  Cart.findOne({ sessionid })
    .then((cart) => {
      if (cart) {        
        if (cart.products.find((i) => i._id === req.body.productid)) {
          res.status(204).send();
          return;
        } else {
          Product.findOne({ _id: req.body.productid })
            .then((product) => {
              if (product) {
                cart.products.push(product);
                cart
                  .save()
                  .then(() => {
                    res.status(204).send();
                    return;
                  })
                  .catch((e) => {
                    console.log(e);
                    res.status(500).send();
                    return;
                  });
              }
            })
            .catch((e) => {
              console.log(e);
              res.status(500).send();
            });
        }
      } else {
        Product.findOne({ _id: req.body.productid })
          .then((product) => {
            if (product) {
              let products = [];
              products.push(product);
              const cart = new Cart({
                sessionid,
                products,
              });
              cart
                .save()
                .then(() => {
                  res.status(204).send();
                  return;
                })
                .catch((e) => console.log(e));
            } else {
              res.status(500).send();
              return;
            }
          })
          .catch((e) => {
            console.log(e);
            res.status(500).send();
          });
      }
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send();
    });
});

router.get("/", (req, res) => {
  // const sessionid = req.session.id;
  // console.log(sessionid);
  Cart.findOne({ sessionid: req.session.id })
    .then((cart) => {
      if (cart) {
        res.status(200).send(cart);
        return;
      } else {
        res.status(500).send();
        return;
      }
    })
    .catch((e) => console.log(e));
  // Cart.findOne().then((cart) => {
  //   res.status(200).send(cart);
  //   return;
  // }).catch(e =>console.log(e));
});

module.exports = router;
