// After deploying, set getBaseUrl to your live app: protocol + host only (no path).
// Examples: "https://my-app.vercel.app" or "http://your-ec2-public-dns"
function getBaseUrl() {
  return "https://REPLACE_WITH_YOUR_DEPLOYED_DOMAIN";
}

function getUTorId() {
  return "takriti1";
}

module.exports = {
  getBaseUrl,
  getUTorId,
};
