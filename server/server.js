//Import Express
const express = require('express')
const app = express();

//Import Cors
const cors = require('cors');
app.use(cors());

//Import DotEnv
require('dotenv').config();


//Import NodeMailer
const nodemailer = require('nodemailer');

//Email Strings
const passsword = process.env.NODE_PASSWORD_EMAIL_LINK;
const emailBase = process.env.NODE_EMAIL_PORTFOLIO;

// Create a transporter with your email service provider settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailBase,
    pass: passsword,
  },
});


//Grab URL and Client
//DB strings
const dbName = "Portfolio";
const collectionName = "Language";
const url = process.env.NODE_URL_MONGO_LINK;


app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Mongo Connection
const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

async function run() {

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function GetLanguages() {

    const client = new MongoClient(url);
    await client.connect();

    
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const documents = await collection.find({}).toArray();

    return documents;

}

app.post("/api/sendEmail", async (req, res) => {
  const { firstName, lastName, phoneNumber, email, message } = req.body;
  let subject = "";

  console.log(emailBase);

  try {
    // Define the email options
    const mailOptions = {
      from: emailBase,
      to: emailBase,
      cc:  email ,
      subject: subject,
      text: message,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    res.json({ message: "Email Sent Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.get("/languages", async (req, res) => {
    try {
      const languages = await GetLanguages();
      res.json(languages);
    } catch (error) {
      console.error("Error retrieving languages:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

app.listen(5000, () => { console.log("Server started on port 5000") });

