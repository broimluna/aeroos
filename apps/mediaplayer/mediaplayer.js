$(".catsel").click(function() {
    var id = $(this).attr("id");
    $("#pages div").css("display", "none");
    $("#pages div#" + id + "").css("display", "block");
});

function cs_change_music(music)
{
document.getElementById("my-audio").pause();
document.getElementById("my-audio").setAttribute('src', music);
document.getElementById("my-audio").load();
    $(".audioplayer").addClass("audioplayer-playing");
    document.getElementById("my-audio").play();
}