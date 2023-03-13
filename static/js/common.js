$('.btn-scroll').on('click', function (e) {
        e.preventDefault();
        var ths = $(this);
        var thsId = ths.data('id');
        if ($(ths).data('id')) {
            $('html, body').animate({
                scrollTop: $('.'+thsId).offset().top
            }, 1000);
            return false;
        }
    });
(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "12/10/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {

            const now = new Date().getTime(),
                distance = countDown - now;

                // document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
                document.getElementById("hoursBottom").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutesBottom").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("secondsBottom").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached

            //seconds
        }, 0)
}());
$('.play-btn').on('click', function (e) {
    var $this = $(this);
    $('.info-media').find('video').attr('controls', true);
    $this.next().attr('controls', true).trigger('play');
    $this.addClass('hidden');
});
