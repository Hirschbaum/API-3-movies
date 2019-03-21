$(() =>{
    $('#search-form').submit(e =>{
        e.preventDefault();

        let searchTerm = $("#search-input").val();
        $('#search-results').html('');
        searchMovie(searchTerm);
    });

    //t is titel
    const searchMovie = term => {
        const api = "https://www.omdbapi.com/?i=tt3896198&apikey=5f1c5cb6";
        let params = {
            t: term
        };

        $.ajax({
            url: api,
            type: 'GET',
            data: params,
            dataType: "json"
        })

        .done(data => {
            console.log(data);
            showResults(data);
        })
        .fail(fail => {
            console.log(fail);
        })  
    };

    const showResults = data => {
        $.each(data,(i,data) => {
            $('#search-results').append(`<p>Titel: ${data.Title} Year of release: ${data.Year} Runtime: ${data.Runtime} Director: ${data.Director} Rated: ${data.Rated} Genre: ${data.Genre} Plot: ${data.Plot}`);
        });
    }
})