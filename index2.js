const app = require('express')();

const PORT =8080;

app.listen(
    PORT,
    () => console.log('server running on ${PORT}')
);

app.get('/veggies', (req, res)=> {
    res.send({
        tomato: 2,
        potato: 12
    })
});
