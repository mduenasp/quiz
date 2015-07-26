var express = require('express');
var router = express.Router();

var quizController=require('../controllers/quiz_controller');
router.param('quizId', quizController.load);//autoload

//Definicion ruta de /quizes
router.get('/quizes',quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',quizController.answer);


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);

router.get('/author', function(req, res) {
  res.render('author', { nombre: 'MDP@' });
});


module.exports = router;
