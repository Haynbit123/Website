const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());

let bases = [];

app.post('/report', (req, res) => {
    const { baseId, baseDetails } = req.body;
    bases.push({ baseId, baseDetails });
    fs.appendFile('base_data.txt', `${baseId}:${baseDetails}
`, err => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save report' });
        }
        res.json({ baseId, baseDetails });
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});