const handler = (req, res) => {
  const apiKey = process.env.HOT_PEPPER_API_KEY;
  const baseUrl = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
  const format = "json";

  let { lat, lon, range } = req.query;

  (async () => {
    const data = await fetch(
      `${baseUrl}?key=${apiKey}&lat=${lat}&lng=${lon}&range=${range}&format=${format}`
    );

    const json = await data.json();
    const shop_list = json.results.shop;

    res.status(200).json(shop_list);
  })();
};

export default handler;
