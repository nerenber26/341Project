//Jonathan Nerenberg

const express = require('express'); 
const app = express(); 
var router = express.Router();

//json data to return
data = [{  
    topping: 'cherry', 
    quantity: '2'
  }, 
  {  
    topping: 'plain', 
    quantity: '6'
  },
  {  
    topping: 'chocolate', 
    quantity: '3'
  }  
]

// Defining get request at '/' route 
router.post('/', (req, res)=>{ 
    res.json(data); 
  }); 

module.exports = router;
