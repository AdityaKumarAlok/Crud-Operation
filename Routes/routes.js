const express = require("express");
const { findByIdAndUpdate } = require("../models/home");
const homeSchemas = require("../models/home");

// This is importmant for Router Important
const router = express.Router();

// Home page route.
router.get("/", async (req, res) => {
  try {
    let home = await homeSchemas.find();
    res.send(home);
  } catch (err) {
    console.log(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    let home = await homeSchemas.findById(req.params.id);
    res.send(home);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  var Data = new homeSchemas({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Age: req.body.Age,
  });

  try {
    let a1 = await Data.save();
    res.send(a1);
  } catch (err) {
    console.log("This is the error" + err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let Data = await homeSchemas.findById(req.params.id);
    Data.Age = req.body.Age;
    let a1 = await Data.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.put("/:id", function (req, res) {
  homeSchemas.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Age: req.body.Age,
      },
    },
    {
      upsert: true,
    },
    function (err, Data) {
      if (err) {
        res.send("error updating book" + err);
      } else {
        res.send(Data);
      }
    }
  );
});

router.delete("/:id", async (req, res) => {
  try {
    let DeleteUsr = await homeSchemas.findOneAndDelete(req.params.id);
    res.send(DeleteUsr);
  } catch {
    res.send("Error");
  }
});

// router.put("/:id", async (req, res) => {
//   let UpdateData = new homeSchemas({
//     _id: req.body.id,
//     FirstName: req.body.FirstName,
//     LastName: req.body.LastName,
//     Age: req.body.Age,
//   });

//   try {
//     let ToBeUpdate = await homeSchemas.findOneAndUpdate(
//       req.params.id,
//       UpdateData
//     );
//     res.send(ToBeUpdate);
//   } catch (err) {
//     res.send("Error" + err);
//   }
// });

// // About page route.
// router.get("/about", (req, res) => {
//   res.send("Welcome To About Page");
// });

// router.get("/contact", (req, res) => {
//   res.send("Welcome To About contact");
// });

// router.get("/blog", (req, res) => {
//   res.send("Welcome To About blog");
// });

module.exports = router;
