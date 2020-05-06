
const express = require('express')
const path = require('path')
const app = express()
let urllib = require('urllib')

app.use(express.static(path.join(__dirname, 'dist')))


const port = 8080
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

app.get('/sanity', function(request, response){
    response.send("OK")
})



app.get('/recipes/:ingredient', function(request, response){


    const ingredient = request.params.ingredient
    
     
    let mealsList = []

    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data, res) {
           
    if (err) {
        throw err 
        }
        
        const meals = JSON.parse(data).results
        for(let meal of meals){
            
            mealsList.push(
                {ingredients: meal.ingredients,
                title: meal.title,
                thumbnail: meal.thumbnail,
                href: meal.href})
        }

        response.send(mealsList)
        
        
  })
  
})