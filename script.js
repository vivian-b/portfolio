// reference:
// https://codepen.io/zenadesign/pen/bevJRP

const project = [
  {
    // 00
    name: "Printemps Numérique",
    year: "2020",
    src: "ressources/GP_printemps.png",
    description:
      "Create a motion graphics-based video promotion for the event/festival.",
    tools: "Adobe Illustrator, Adobe Photoshop, Adobe After Effects",
    tags: "motion graphics, animation",
  },
  {
    // 1
    name: "Dance Typo. Rhythm",
    year: "2020",
    src: "ressources/archives/dance.jpg",
    description:
      "Design a typographic based brochure and eBook to illustrate different types of dances",
    tools:
      "Adobe Illustrator, Adobe InDesign, Adobe Photoshop, Adobe After Effects",
    tags: "publication, layout, typography, motion",
  },
  {
    // 2
    name: "GD Brochure",
    year: "2020",
    src: "ressources/archives/gdb.jpeg",
    description:
      "Design a detailed and informative program brochure of Dawson's Graphic Design program.",
    tools: "Adobe InDesign, Adobe Illustrator",
    tags: "publication,layout,typography",
  },
  {
    // 3
    name: "Type Cube",
    year: "2020",
    src: "ressources/archives/typecube.jpg",
    description:
      "Create an artistic paper-based game that reflects an art movement.      ",
    tools: "Adobe InDesign, Adobe Illustrator",
    tags: "paper craft, typography, printing",
  },
  {
    // 4
    name: "2020 Vernissage",
    year: "2020",
    src: "ressources/archives/2020.jpg",
    description:
      "Create duo poster designed for the Dawson Graphic Design 2020 Vernissage exhibition.      ",
    tools: "Adobe Photoshop, Adobe Illustrator ",
    tags: "poster design, research creation",
  },
  {
    // 5
    name: "Miel MTL",
    year: "2020",
    src: "ressources/archives/mielmtl1.png",
    description:
      "Rebrand an existing company’s brand identity, including its stationery and packaging.",
    tools: "Adobe Illustrator, Adobe InDesign",
    tags: "branding, packaging, logo design, montage",
  },
  {
    // 6
    name: "RunBunRun",
    year: "2021",
    src: "ressources/archives/runbunrun.png",
    description:
      "Create a small Javascript arcade-like based game where the player is a bunny trying to collect carrots and avoid daggers flying towards them.",
    tools: "Visual Studio Code, Procreate, Photoshop",
    tags: "game design, illustration, coding, Javascript",
  },
  {
    // 7
    name: "Orphéon",
    year: "2021",
    src: "ressources/archives/orpheon.png",
    description:
      "Build a prototype website with multiple pages for a fictional company. The logo and identity of the brand are designed based on research from existing labels.     ",
    tools: "Adobe XD, Adobe Illustrator",
    tags: "web design, branding, logo design",
  },
  {
    // 8
    name: "Prey",
    year: "2021",
    src: "ressources/home_4.png",
    description:
      "Make a narrative sculpture with a minimalistic art style. Accompanied by a video montage to present the piece in detail.      ",
    tools: "Blender 3.0",
    tags: "3D modeling",
  },
  {
    // 9
    name: "22",
    year: "2022",
    src: "ressources/archives/22.png",
    description:
      "Create a design based on peoples preferences from a design survey.",
    tools: "Adobe Photoshop, Adobe Illustrator ",
    tags: "poster design, research creation",
  },
  {
    // 10
    name: "Cycle of money",
    src: "ressources/archives/money.png",
    description:
      "Create a short typographic animation to illustrate the theme of speed through money.",
    tools: "Adobe After Effects, Adobe Illustrator",
    tags: "motion graphics, typography, B&W",
  },
  {
    // 11
    name: "Heya!",
    year: "2022",
    src: "ressources/casestudy/3_heya/hy1.jpg",
    description:
      "Apply UI/UX principles to conceptualize an ideal dating app with gamification features.    ",
    tools: "Adobe XD, Adobe Illustrator, Adobe After Effects",
    tags: "app design, UI/UX, motion graphics, branding,",
  },
  {
    // 12
    name: "Check It",
    year: "2023",
    src: "ressources/casestudy/2_chk/chk3.jpg",
    description: "Create an news aggregator app for millenials with UI/UX principles in mind.",
    tools: "Figma, Adobe Illustrator",
    tags: "app design, UI / UX, logo design, branding",
  },
  {
    // 13
    name: "Miel MTL remake",
    year: "2023",
    src: "ressources/GP_miel.png",
    description:
      "Rebrand an existing company’s brand identity, including its stationery and packaging.",
    tools: "Adobe Illustrator, Blender 3.1",
    tags: "3D modeling, branding, packaging, logo design",
  },
  {
    // 14
    name: "Video Reel",
    year: "2023",
    src: "ressources/archives/reel.jpg",
    description:
      "Make a self-promotion video reel to showcase some projects.",
    tools: "Adobe After Effects",
    tags: "motion graphics, logo",
  },
  {
    // 15
    name: "Portfolio Website",
    year: "2023",
    src: "ressources/archives/website.png",
    description:
      "Make a post to promote a bake sale.",
    tools: "Adobe Photoshop, Visual Studio Code, Figma",
    tags: "branding, web design, coding (HTML, CSS, JavaScript), logo design",

  },
  {
    // 16
    name: "Suika Leaderboard",
    year: "2023",
    src: "ressources/archives/suika.png",
    description:
    "Make a board based on players' best score.",
    tools: "Adobe Illustrator, Google Sheets",
      tags: "infographics",
  
  },
  {
    // 17
    name: "BaseD Taste",
    year: "2023",
    src: "ressources/archives/basedtaste.png",
    description:
      "Make an infographic for a gameshow",
    tools: "Adobe Illustrator, Google Sheets",
    tags: "logo design, infographics",

  },
  {
    // 18
    name: "commission site",
    year: "2023",
    src: "ressources/archives/commission.png",
    description:
      "Make a portfolio website to showcase your works for online commissions.",
    tools: "carrd",
    tags: "branding, web design, css",
  },
  {
    // 19
    name: "Bake Sale",
    year: "2023",
    src: "ressources/archives/bake_sale.png",
    description:
      "Make a social media post to promote a bake sale (fundraise for palestine).",
    tools: "Adobe Illustrator",
    tags: "layout design",
  },
];

function changeImage() {
  const select = project[number];
  console.log(number);

  imageid.src = select.src;

  const name = document.getElementsByClassName("title");
  $(".title").text(select.name);

  const description = document.getElementById("textid");
  description.innerHTML = select.description;

  const year = document.getElementsByClassName("itemYear");
  $(".itemYear").text(select.year);

  const tools = document.getElementsByClassName("itemTools");
  $(".itemTools").text(select.tools);

  const tags = document.getElementsByClassName("itemTags");
  $(".itemTags").text(select.tags);
}

$(document).ready(function () {
  $(document).tooltip();

  $(".open").on("click", function () {
    $(".popup-overlay, .popup-content").addClass("active");
    $(".popup-overlay, .popup-content").css("opacity", "100", "swing");
  });

  $(".close").on("click", function () {
    $(".popup-overlay, .popup-content").removeClass("active");
    $(".popup-overlay, .popup-content").css("opacity", "0", "swing");
  });

  $(".trigger").hover(
    function () {
      $(".imageFilter").css("opacity", "0", "swing");
      $(".reveal").css("opacity", "100", "swing");

      changeImage();
    },

    function () {
      $(".imageFilter").css("opacity", "0.8", "swing");
      $(".reveal").css("opacity", "0", "swing");
    }
  );

  $(".gal").hover(
    function () {
      $(".arc").css("opacity", "0.1");
    },

    function () {
      $(".arc").css("opacity", "1", "swing");
    }
  );

  $(".arc").hover(
    function () {
      $(".gal").css("opacity", "0.1");
    },

    function () {
      $(".gal").css("opacity", "1", "swing");
    }
  );

  $(".imageFilter").hover(
    function () {
      $(".imageFilter").css("opacity", "0", "swing");
      $(".reveal").css("opacity", "100", "swing");
    },

    function () {
      $(".imageFilter").css("opacity", "0.8", "swing");
      $(".reveal").css("opacity", "0", "swing");
    }
  );

  $(".trigger2").hover(
    function () {
      $(".dimOff").addClass("dim", 200);
    },

    function () {
      $(".dimOff").removeClass("dim", 200);
      $(".dimOff").finish();
    }
  );

  $(".hoverli").hover(
    function () {
      $("ul.file-menu").slideDown(250, "swing");
    },
    function () {
      $("ul.file-menu").slideUp(250);
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
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4100); // Change image every X seconds
}

function scrollFunction() {
  const element = document.getElementById("scroll");
  element.scrollIntoView({ behavior: "smooth", block: "end" });
}

function scrollBot() {
  const element2 = document.getElementById("scrollB");
  element2.scrollIntoView({ behavior: "smooth", block: "end" });
}
