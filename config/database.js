const mongoose = require('mongoose');
mongoose.Promise= global.Promise;// faz com que o mongoose use a configuração global do node



mongoose.connect('mongodb://localhost/to-do-list', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Conectado ao MongoDB'))
.catch((err)=>console.error(err))

