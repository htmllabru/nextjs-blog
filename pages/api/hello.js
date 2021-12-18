export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(201).json({ text: 'Hello', id: 1,  })
  } else {
    res.status(200).json({ text: 'Hello', method: req.method })
  }
}