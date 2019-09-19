$('.sl').slick();

function down(name)
{
    var a = document.getElementById(name);
    if ( a.style.display == 'none' )
        a.style.display = 'block';
    else if ( a.style.display == 'block' )
        a.style.display = 'none';
};