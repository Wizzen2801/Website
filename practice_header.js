function openclose() {
    let status = $('#post_menu').css('display');
    if (status == 'block') {
        $('#post_menu').hide()
    } else {
        $('#post_menu').show()
    }
}