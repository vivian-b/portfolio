// reference:
// https://codepen.io/zenadesign/pen/bevJRP



$(document).ready(function () {

  $(".trigger").hover(
    function () {
      $(this).removeClass("currentHover", 100, "swing");

      $(".currentHover").addClass("greying", 100);
      $(".reveal").addClass("revealed", 100, "swing");
      $(".imageFilter").css('opacity', '0', "swing");


    },

    function () {
      $(this).addClass("currentHover", 100, "swing");

      $(".currentHover").removeClass("greying", 0);
      $(".reveal").removeClass("revealed", 100);
      $(".imageFilter").css('opacity', '0.8',"swing" );


    }
  );

  $(".trigger2").hover(
    function () {

      $(".dimOff").addClass("dim", 200);

    },

    function () {
  
      $(".dimOff").removeClass("dim", 0);
      $(".dimOff").finish();

    }
  );

  $(".imgC1").hover(function () {
    $(".imagePreview").addClass("imageChange", 100, "swing");

    $(".imagePreview").removeClass(
      "imageChange2 imageChange3 imageChange4 imageChange5 imageChange6",
      100,
      "swing"
    );
  });

  $(".imgC2").hover(function () {
    $(".imagePreview").addClass("imageChange2", 100, "swing");

    $(".imagePreview").removeClass(
      "imageChange imageChange3 imageChange4 imageChange5 imageChange6",
      100,
      "swing"
    );
  });

  $(".imgC3").hover(function () {
    $(".imagePreview").addClass("imageChange3", 100, "swing");

    $(".imagePreview").removeClass(
      "imageChange1 imageChange2 imageChange4 imageChange5 imageChange6",
      100,
      "swing"
    );
  });

  $(".imgC4").hover(function () {
    $(".imagePreview").addClass("imageChange4", 100, "swing");

    $(".imagePreview").removeClass(
      "imageChange1 imageChange2 imageChange3 imageChange5 imageChange6",
      100,
      "swing"
    );
  });

  $(".imgC5").hover(function () {
    $(".imagePreview").addClass("imageChange5", 100, "swing");

    $(".imagePreview").removeClass(
      "imageChange1 imageChange2 imageChange3 imageChange4 imageChange6",
      100,
      "swing"
    );
  });

  $(".imgC6").hover(function () {
    $(".imagePreview").addClass("imageChange6", 100, "swing");
    $(".imagePreview").removeClass(
      "imageChange1 imageChange2 imageChange3 imageChange4 imageChange5",
      100,
      "swing"
    );
  });

  $(".hoverli").hover(
    function () {
       $('ul.file_menu').slideDown(400, "swing");
    }, 
    function () {
       $('ul.file_menu').slideUp(250);
    }
  );

});


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
};

function scrollFunction() {
  const element = document.getElementById("scroll");
  element.scrollIntoView({ behavior: 'smooth', block: 'end'});
  
}


// // article 2: hover interaction
// // red background + highlighted text + reveal old articles
// $(".trigger2").hover(
//   function () {
//     $("#background-color").addClass("reveal", 100, "swing");
//     $(".hl2 .textHL").addClass("highlight", 100, "swing");
//     $(this).addClass("float", 100, "swing");
//     $(".hiddenLongArticles").addClass("revealed", 100, "swing");
//   },

//   function () {
//     $("#background-color").removeClass("reveal", 100, "swing");
//     $(".textHL").removeClass("highlight", 100, "swing");
//     $(this).removeClass("float", 100, "swing");
//     $(".hiddenLongArticles").removeClass("revealed", 100, "swing");
//   }
// );

// // article 3: hover interaction
// // red background + highlighted text + reveal old articles
// $(".trigger3").hover(
//   function () {
//     $("#background-color").addClass("reveal", 100, "swing");
//     $(".hl3 .textHL").addClass("highlight", 100, "swing");
//     $(this).addClass("float", 100, "swing");
//     $(".hiddenLongArticles").addClass("revealed", 100, "swing");
//   },

//   function () {
//     $("#background-color").removeClass("reveal", 100, "swing");
//     $(".textHL").removeClass("highlight", 100, "swing");
//     $(this).removeClass("float", 100, "swing");
//     $(".hiddenLongArticles").removeClass("revealed", 100, "swing");
//   }
// );

// // "racism": hover interaction
// // blurring
// $(".redacted").hover(
//   function () {
//     $(".redacted").addClass("highlightW");
//     $(".redacted").addClass("blur");
//   },

//   function () {
//     $(".redacted").removeClass("highlightW");
//     $(".redacted").removeClass("blur");
//   }
// );

// // title: hover interaction
// // image reveal
// $(".morph").hover(
//   function () {
//     $(".image").addClass("image2");
//   },

//   function () {
//     $(".image").removeClass("image2");
//   }
// );

// // top news: hover interaction
// // black background + text highlight
// $(" .triggerB2").hover(
//   function () {
//     $("#background-color").addClass("revealB", 100, "swing");

//     $(this).addClass("float", 100, "swing");
//     $(".hiddenOldNews").addClass("revealed", 100, "swing");
//   },

//   function () {
//     $("#background-color").removeClass("revealB", 100, "swing");

//     $(this).removeClass("float", 100, "swing");
//     $(".hiddenOldNews").removeClass("revealed", 100, "swing");
//   }
// );
