const express = require("express");
const multer = require("multer");
const router = express.Router();
const Product = require("../models/product");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

router.post("/", (req, res) => {
  if (!req.body) {
    res.status(400).send({ error: "parameters is not present in request" });
    return;
  }
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
  });
  // return res.status(200).send(req.file)

  const product = new Product({
    ...req.body,
  });
  product.save().then(() => {
    res.status(204).send();
    return;
  });
});

router.get("/", (req, res) => {
  Product.find().then((product) => {
    res.status(200).send(product);
    return;
  });
});

router.get("/:productid", (req, res) => {
  Product.findOne({ _id: req.params.productid })
    .then((product) => {
      res.send(product);
      return;
    })
    .catch(() => {
      res
        .status(500)
        .send({ error: `No data found for id : ${req.params.productid}` });
      return;
    });
});

module.exports = router;
