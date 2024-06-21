const express = require("express");
const axios = require("axios");

const app = express();
const port = 9990;

app.get("/random/:query", async (req, res) => {
  try {
    const query = req.params.query;
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        query,
        client_id: "FWHgbf18OR2ksBg0W5QC_Eq_zXnRT-U4Qk-nuCxYsWE",
      }
    });

    res.redirect(response.data.urls.raw);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching image");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
