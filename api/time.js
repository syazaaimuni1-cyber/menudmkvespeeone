module.exports = function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  res.status(200).json({
    timestamp: Date.now(),
    timezone: "Asia/Kuala_Lumpur",
    source: "vercel-server"
  });
};
