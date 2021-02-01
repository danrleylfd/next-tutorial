function tempo(req,res) {
  const dynamicDate = new Date();
  res.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate');
  res.json({
    date: dynamicDate.toGMTString()
  });
}

export default tempo;
