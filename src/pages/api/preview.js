import * as aglio from 'src/lib/aglio';

export default async (req, res) => {
  try {
    const html = await aglio.renderFunc(req.body?.blueprint);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ html }));
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(err.message);
  }
};
