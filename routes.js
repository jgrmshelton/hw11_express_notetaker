const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
  
  router.get('/notetracker', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notetracker.html'));
  });
  
  router.get('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    res.json(notetreacker);
  });
  
  router.post('/api/notestracker', (req, res) => {
    const notetracker = JSON.parse(fs.readFileSync('./db/db.json'));
    const notetrackerID = Object.assign(req.body, { id: `${uuidv4()}` });
    notes.push(notetrackerID);
    const stringNote = JSON.stringify(notetracker);
    fs.writeFileSync('./db/db.json', stringNote);
    res.json(notetracker);
  });
  
  router.delete('/api/notetracker/:id', (req, res) => {
    const notetracker = JSON.parse(fs.readFileSync('./db/db.json'));
    const notetrackerID = req.params.id;
    for (let i = 0; i < notetracker.length; i++) {
      if (notetracker[i].id === notetrackerID) {
        notetracker.splice(i, 1);
        const newNote1 = JSON.stringify(notetracker);
        fs.writeFileSync('./db/db.json', newNote1);
        return res.json(notes);
      }
    }
  });
  
  module.exports = router;
  