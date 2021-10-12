const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

router.get('/note', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/note.html'));
});

router.get('/api/note', (req, res) => {
  const note = JSON.parse(fs.readFileSync('./db/db.json'));
  res.json(note);
});

router.post('/api/note', (req, res) => {
  const note = JSON.parse(fs.readFileSync('./db/db.json'));
  const noteID = Object.assign(req.body, { id: `${uuidv4()}` });
  note.push(noteID);
  const stringNote = JSON.stringify(note);
  fs.writeFileSync('./db/db.json', stringNote);
  res.json(note);
});

router.delete('/api/note/:id', (req, res) => {
  const note = JSON.parse(fs.readFileSync('./db/db.json'));
  const noteID = req.params.id;
  for (let i = 0; i < note.length; i++) {
    if (note[i].id === noteID) {
      note.splice(i, 1);
      const note1 = JSON.stringify(note);
      fs.writeFileSync('./db/db.json', note1);
      return res.json(note);
    }
  }
});

module.exports = router;
  