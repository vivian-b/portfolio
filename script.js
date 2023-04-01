// reference: 
// https://codepen.io/zenadesign/pen/bevJRP

$(document).ready(function () {
  // article 1: hover interaction
  // red background + highlighted text + reveal old articles
  $(".trigger").hover(
    function () {
      $("#background-color").addClass("reveal", 100, "swing");
      $(".hl1 .textHL").addClass("highlight", 100, "swing");
      $(this).addClass("float", 100, "swing");
      $(".hiddenLongArticles").addClass("revealed", 100, "swing");
    },

    function () {
      $("#background-color").removeClass("reveal", 100, "swing");
      $(".textHL").removeClass("highlight", 100, "swing");
      $(this).removeClass("float", 100, "swing");
      $(".hiddenLongArticles").removeClass("revealed", 100, "swing");
    }
  );

  // article 2: hover interaction
  // red background + highlighted text + reveal old articles
  $(".trigger2").hover(
    function () {
      $("#background-color").addClass("reveal", 100, "swing");
      $(".hl2 .textHL").addClass("highlight", 100, "swing");
      $(this).addClass("float", 100, "swing");
      $(".hiddenLongArticles").addClass("revealed", 100, "swing");
    },

    function () {
      $("#background-color").removeClass("reveal", 100, "swing");
      $(".textHL").removeClass("highlight", 100, "swing");
      $(this).removeClass("float", 100, "swing");
      $(".hiddenLongArticles").removeClass("revealed", 100, "swing");
    }
  );

  // article 3: hover interaction
  // red background + highlighted text + reveal old articles
  $(".trigger3").hover(
    function () {
      $("#background-color").addClass("reveal", 100, "swing");
      $(".hl3 .textHL").addClass("highlight", 100, "swing");
      $(this).addClass("float", 100, "swing");
      $(".hiddenLongArticles").addClass("revealed", 100, "swing");
    },

    function () {
      $("#background-color").removeClass("reveal", 100, "swing");
      $(".textHL").removeClass("highlight", 100, "swing");
      $(this).removeClass("float", 100, "swing");
      $(".hiddenLongArticles").removeClass("revealed", 100, "swing");
    }
  );

  // "racism": hover interaction
  // blurring
  $(".redacted").hover(
    function () {
      $(".redacted").addClass("highlightW");
      $(".redacted").addClass("blur");
    },

    function () {
      $(".redacted").removeClass("highlightW");
      $(".redacted").removeClass("blur");
    }
  );

  // "asian": hover interaction
  // fade out
  $(".faded").hover(
    function () {
      $(this).addClass("fading", 600, "swing");
    },

    function () {
      $(this).removeClass("fading", 800, "swing");
    }
  );

  // title: hover interaction
  // image change
  $(".morph").hover(
    function () {
      $(".image").addClass("image2");
    },

    function () {
      $(".image").removeClass("image2");
    }
  );

  // title: hover interaction
  // black background + text highlight
  $(".triggerB").hover(
    function () {
      $("#background-color").addClass("revealB", 100, "swing");
      $(".main-title .textHL").addClass("highlightB", 100, "swing");

      $(this).addClass("float", 100, "swing");
    },

    function () {
      $("#background-color").removeClass("revealB", 100, "swing");
      $(".textHL").removeClass("highlightB", 100, "swing");

      $(this).removeClass("float", 100, "swing");

      // $(this).removeClass('blur',50, "swing");
    }
  );

  // top news: hover interaction
  // black background + text highlight
  $(" .triggerB2").hover(
    function () {
      $("#background-color").addClass("revealB", 100, "swing");

      $(this).addClass("float", 100, "swing");
      $(".hiddenOldNews").addClass("revealed", 100, "swing");
    },

    function () {
      $("#background-color").removeClass("revealB", 100, "swing");

      $(this).removeClass("float", 100, "swing");
      $(".hiddenOldNews").removeClass("revealed", 100, "swing");
    }
  );
});

// unused interactions
// // https://codepen.io/daveredfern/pen/zBGBJV
// $(window).scroll(function() {

//     // selectors
//     var $window = $(window),
//         $body = $('body'),
//         $panel = $('.panel');

//     // Change 33% earlier than scroll position so colour is there when you arrive.
//     var scroll = $window.scrollTop() + ($window.height() / 4);

//     $panel.each(function () {
//       var $this = $(this);

//       // if position is within range of this panel.
//       // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//       // Remember we set the scroll to 33% earlier in scroll var.
//       if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

//         // Remove all classes on body with color-
//         // $body.removeClass(function (index, css) {
//         //   return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
//         // }, 10, "linear");

//         $body.removeClass(function (index, css) {
//             return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
//           });

//         // Add class of currently active div
//         $body.addClass('color-' + $(this).data('color'));
//       }
//     });

//   }).scroll();

  // $(function () {
  //   $("li").mouseover(function () {
  //     $(this).addClass("active");
  //   });
  //   $("li").mouseout(function () {
  //     $(this).removeClass("active");
  //   });
  // });