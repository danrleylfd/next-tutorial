async function Tempo(req,res) {
  const apiSecret = process.env.CONVERTKIT_API_SECRET;
  const dynamicDate = new Date();
  const date = dynamicDate.toGMTString();
  const subscribersResponse = await fetch(`https://api.github.com/users/danrleylfd/following`);
  const subscribersResponseJson = await subscribersResponse.json();
  const subscribers = subscribersResponseJson.length; 
  res.setHeader(
    'Cache-Control',
    's-maxage=15, stale-while-revalidate'
  );
  res.json({ date, subscribers });
}

export default Tempo;
