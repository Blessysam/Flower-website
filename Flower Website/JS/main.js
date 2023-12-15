function likeBtn(e) {
    if ($(e).hasClass("bxs-heart")) {
        $(e).removeClass('bxs-heart');
    } else {
        $(e).addClass('bxs-heart');
    }
}
