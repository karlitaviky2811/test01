let express = require('express')

const app = express();

app.use(express.static(__dirname+'/dist/netflix-frontend'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/netflix-frontend/index.html'));
});

app.listen(process.env.PORT || 8080);
