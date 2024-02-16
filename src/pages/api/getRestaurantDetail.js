const handler = (req, res) => {
  const apiKey = process.env.HOT_PEPPER_API_KEY;
  const baseUrl = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
  const format = "json";

  const restaurant_id = req.query.id;

  console.log(req.query);
  console.log(restaurant_id);

  (async () => {
    const data = await fetch(
      `${baseUrl}?key=${apiKey}&id=${restaurant_id}&format=${format}`
    );

    const json = await data.json();
    const restaurant_detail = json.results.shop;

    console.log(restaurant_detail);

    res.status(200).json(restaurant_detail);
  })();
};

export default handler;
