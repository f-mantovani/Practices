const functions = require("firebase-functions");

require("dotenv").config();
const express = require("express");

const cors = require("cors");

const stripe = require("stripe")(process.env.STRIPE);

// API

// - App config

const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received! For this amount >>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
