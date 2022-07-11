$(document).ready(function () {
  // scroll to block
  $('.js-scroll-to-block').click(function () {
    const target_id = $(this).attr('href');
    $(`${target_id}`).scroll(function () {});
  });

  // lightbox
  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  // alert nav-tabs switch
  $('.nav-tabs a').on('click', function () {
    const target_id = $(this).attr('aria-controls');
    const tab_content = $(this).parent().parent().next('.tab-content');

    tab_content.find(`.tab-pane`).removeClass('active');
    tab_content.find(`.tab-pane[id=${target_id}]`).addClass('active');
  });

  // sticky header
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
      $('.header').addClass('header-sticky');
    } else {
      $('.header').removeClass('header-sticky');
    }
  });

  // copy to clickboard
  const int = setInterval(() => {
    if (typeof window.Clipboard == 'undefined') return;
    else clearInterval(int);
    const clipboard = new Clipboard('.js-copy-to-clickboard-button', {
      target: function (trigger) {
        return trigger.previousElementSibling;
      },
    });

    clipboard.on('success', function (e) {
      console.log(e);
    });

    clipboard.on('error', function (e) {
      console.log(e);
    });
  }, 100);

  // switch selected in accordion direction image
  $('.accordion .card button').click(function () {
    const active_direction = $(
      '.section-directions .img-responsive.img-responsive-transformed'
    );
    const name = $(this).data('selected-image-name');
    const path = active_direction.attr('src');
    const path_parts = path.split('/');
    const result = [...path_parts.splice(0, path_parts.length - 1), name].join(
      '/'
    );
    active_direction.attr('src', result);
  });
});
