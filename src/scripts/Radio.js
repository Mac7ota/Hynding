    const myDiv = document.getElementById("myDiv");
    let prevScrollPos = window.pageYOffset;
    
    window.addEventListener("scroll", () => {
      const currentScrollPos = window.pageYOffset;
    
      if (prevScrollPos > currentScrollPos) {
        myDiv.classList.add("fixed");
      } else {
        myDiv.classList.remove("fixed");
      }
    
      prevScrollPos = currentScrollPos;
    });
