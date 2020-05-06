class Renderer{
    constructor(){
    }

    render(data){
        $("#meals").empty()

    
        const source = $('#meals-template').html()
        const template = Handlebars.compile(source)
        let newHTML = template({ meal: data })
        $("#meals").append(newHTML) 
    }

}

