


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  const chartElements = document.querySelectorAll('.chart1');

  chartElements.forEach((canvas, index) => {

    const isGreen = index % 2 === 0; 

    new Chart(canvas.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: `Chart ${index + 1}`, 
          data: [31000 + index * 1000, 32000, 33000, 34000, 32000, 36000],
          borderColor: isGreen ? 'rgb(0, 153, 51)' : 'rgba(255, 99, 132, 1)', 
          backgroundColor: isGreen ? 'rgb(153, 255, 51 , 0.2)' : 'rgba(255, 99, 132, 0.2)',
          fill: true,
          tension: 0.4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { display: false },
          y: { display: false },
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  });
  



// فراخوانی برای حرکت مثلث‌ها در همه کانتینرها
document.querySelectorAll(".container-triangle").forEach((container) => {
  container.querySelectorAll(".triangle").forEach((triangle) => {
    // ترکیب انیمیشن تصادفی و حرکت تصادفی
    animateTriangles(container.id, 8); // سرعت 8 ثانیه برای هر مثلث
    moveTriangleRandom(triangle, container); // حرکت تصادفی
  });
});


function myFunction(){
  document.getElementById('my-dropDown').classList.toggle('show')
}

window.onclick = function (event) {
  if(!event.target.matches('.dropbtn')){
    {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  }

  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var icon = this.querySelector('.icon-chev');
    if(icon.classList.contains('bx-chevron-down')){
      icon.classList.remove('bx-chevron-down');
      icon.classList.add('bx-chevron-up')
    }else{
      icon.classList.remove('bx-chevron-up');
      icon.classList.add('bx-chevron-down')
    };
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // مخفی کردن تمام محتواها
    tabContents.forEach(content => content.classList.add('hidden'));
    
    // حذف کلاس فعال از تمام دکمه‌ها
    tabButtons.forEach(btn => {
      btn.classList.remove('text-blue-600', 'border', 'border-gray-300');
      btn.querySelector('.tab-text').classList.remove('!text-blue-600'); // حذف رنگ از متن
    });

    // نمایش محتوای مرتبط
    const targetId = button.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.remove('hidden');
    }

    // افزودن کلاس فعال به دکمه کلیک‌شده
    
    button.classList.add('text-blue-600', 'border', 'border-gray-300');
    button.querySelector('.tab-text').classList.add('!text-blue-600'); 
  });
});

const buyTab = document.getElementById("buy-tab");
const sellTab = document.getElementById("sell-tab");
const buyContent = document.getElementById("buy-content");
const sellContent = document.getElementById("sell-content");
const chngeCol1 =document.getElementById("changeColor1")
const chngeCol2 =document.getElementById("changeColor2")

buyTab.addEventListener("click", () => {
  buyTab.classList.add("active");
  chngeCol1.classList.add('text-blue-600')
  chngeCol2.classList.remove('text-blue-600')
  sellTab.classList.remove("active");
  buyContent.classList.add("active");
  sellContent.classList.remove("active");
});

sellTab.addEventListener("click", () => {
  sellTab.classList.add("active");
  chngeCol1.classList.remove('text-blue-600')
  chngeCol2.classList.add('text-blue-600')
  buyTab.classList.remove("active");
  sellContent.classList.add("active");
  buyContent.classList.remove("active");
});

const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  const dropdownButton = document.getElementById("dropdown-button");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdownIcon = document.getElementById("dropdown-icon");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    const direction = document.documentElement.dir === "rtl" ? "translateX(0)" : "translateX(0)";
    mobileMenu.style.transform = direction;
  });

  closeMenu.addEventListener("click", () => {
    const direction = document.documentElement.dir === "rtl" ? "translateX(-100%)" : "translateX(100%)";
    mobileMenu.style.transform = direction;
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300); // Wait for the transition to complete before hiding
  });

  dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
    dropdownIcon.classList.toggle("bx-chevron-down");
    dropdownIcon.classList.toggle("bx-chevron-up");
  });
  function handleSelectChange(event) {
    const selectedTab = event.target.value; // دریافت value انتخاب‌شده
    const tabsContainer = document.querySelector(".tabs");
    const targetButton = tabsContainer.querySelector(`[data-target="${selectedTab}"]`);
  
    // شبیه‌سازی کلیک روی دکمه مربوطه
    if (targetButton) {
      targetButton.click();
    }
  }