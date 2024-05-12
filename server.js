const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const pool = new Pool({
  user: 'pasha',
  host: 'localhost',
  database: 'commentsdb',
  password: 'qwerty',
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Помилка підключення до бази даних:', err.stack);
  }
  console.log('Успішно підключено до бази даних');
  release();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'portfolio.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});


// Маршрут для отримання коментарів
app.get('/blog', (req, res) => {
  const selectQuery = 'SELECT * FROM comments';
  pool.query(selectQuery, (error, result) => {
    if (error) {
      console.error('Помилка отримання коментарів:', error);
      res.status(500).send('Помилка отримання коментарів');
    } else {
      const comments = result.rows;
      res.sendFile(path.join(__dirname, 'public', 'blog.html'), { comments });
    }
  });
});

app.get('/comments', (req, res) => {
    const selectQuery = 'SELECT * FROM comments';
    pool.query(selectQuery, (error, result) => {
        if (error) {
            console.error('Помилка отримання коментарів:', error);
            res.status(500).json({ error: 'Помилка отримання коментарів' });
        } else {
            res.json(result.rows);
        }
    });
});



// Маршрут для додавання коментаря
app.post('/addComment', (req, res) => {
    const { name, comment } = req.body;
    const insertQuery = 'INSERT INTO comments (name, comment) VALUES ($1, $2)';
    pool.query(insertQuery, [name, comment], (error) => {
        if (error) {
            console.error('Помилка додавання коментаря:', error);
            res.status(500).send('Помилка додавання коментаря');
        } else {
            const selectQuery = 'SELECT * FROM comments';
            pool.query(selectQuery, (error, result) => {
                if (error) {
                    console.error('Помилка отримання коментарів:', error);
                    res.status(500).send('Помилка отримання коментарів');
                } else {
                    const comments = result.rows;
                    res.json(comments);
                }
            });
        }
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
