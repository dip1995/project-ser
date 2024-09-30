const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
    // createdBy: req.user._id,
  });

  return res.json({
    id: shortID,
  });

  // return res.render("home", {
  //   id: shortID,
  // });
}

async function handleGetAnalytics(req, res) {
  // const shortId = req.params.shortId;
  // const result = await URL.findOne({ shortId });
  // return res.json({
  //   totalClicks: result.visitHistory.length,
  //   analytics: result.visitHistory,
  // });
}

 const handleGetShortId = async (req,res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOne( {shortId } )
   if(entry) {
    // res.redirect(entry.redirectURL);
    res.status(200).json({ redirectURL: entry.redirectURL });
   }
}



module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleGetShortId,
};