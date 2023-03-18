const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

var path = require("path");

var { upload } = require("../middleware/schema");

router.get("/", class1.a);

router.get("/Registration", class1.b);
router.post("/Registration", upload.single("add2"), class1.c);

router.get("/login", class1.d);
router.post("/login", class1.e);

router.get("/upload", class1.f);
router.post("/upload", upload.array("add2", 100), class1.g);

router.get("/delete", class1.h);

router.get("/:id", class1.i);

router.get("/:id1/:id2", class1.j);

router.get("/:id1/:id2/:id3", class1.k);

module.exports = router;
