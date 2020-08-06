export default async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      html: `<html><body><h1>${req.body?.blueprint}</h1></body></html>`,
    })
  );
};
