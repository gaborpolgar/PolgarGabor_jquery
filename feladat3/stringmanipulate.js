$('#apply').on('click', () => {
    let text = $('#string').val();
    let result = '';
    if (text.trim() === '') {
        alert('átalakítandó szöveg megadása kötelező!');
    }
    let upper = document.forms['form']['manipulation'].value;
    
    //document.forms['form']['manipulation'].value; //ez nem megy már a val() is elbukik
    /* $("form:first :input").each(function() {
        alert($(this).val());
        $('form:first *:nth-child(i)').val()
        $('form#id input.name').val()
        $("#formid input").each(function(){
    alert($(this).attr("value"))
})  
     */
    console.log(upper);
    if (upper === '') {
        alert('átalakítás típusának kiválasztása kötelező!');
    }
    if (upper === 'uppercase') {
        result = text.toUpperCase();
    } else {
        result = text.toLowerCase();
    }
    console.log(result);

    $('#result').text(result);
})

/*document.getElementById('apply').addEventListener('click', () => {
    let text = document.getElementById('string').value;
    console.log(text);
    if (document.getElementById('lowercase').value != '') {
        let result = text.toLowerCase();
    } else if (document.getElementById('uppercase').value !== '') {
        let result = text.toUpperCase();
    } else {
        alert('átalakítás típusának kiválasztása kötelező!')
    }
    if (text = '') {
        alert('átalakítandó szöveg megadása kötelező!')
    }
    console.log(result);
    document.getElementById('result').innerText = result;
})*/