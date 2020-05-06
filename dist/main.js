$("#btn").on("click", function(){
    const ingredient = $("#input").val()
    
    $.get(`/recipes/${ingredient}`, function (response) {
        const renderer = new Renderer()
        renderer.render(response)        
    })


    $("#input").val("")
})


