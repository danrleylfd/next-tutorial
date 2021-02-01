function tempo(req,res) {
  const dynamicDate = new Date();
  res.setHeader('Cache-Control', 's-maxage=7, stale-while-revalidate');
  res.json({
    date: dynamicDate.toGMTString()
  });
}

export default tempo;
