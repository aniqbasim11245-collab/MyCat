  const slides = document.querySelectorAll(".phone-slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const featureInfo = document.getElementById("featureInfo");
  const featureTag = document.getElementById("featureTag");
  const featureTitle = document.getElementById("featureTitle");
  const featureDesc = document.getElementById("featureDesc");
  const featurePoints = document.getElementById("featurePoints");

  const featureData = [
    {
      tag: "Cat Profiles",
      title: "Home Page",
      desc: "View and manage all your cats in one place with a clean card-based interface.",
      points: [
        "🐱 View saved cat profiles",
        "🔍 Search cats quickly",
        "📌 Access each cat’s details"
      ]
    },
    {
      tag: "Profile Setup",
      title: "Add New Cat",
      desc: "Create a complete cat profile by adding important details such as name, age, gender, breed, and photo.",
      points: [
        "➕ Add new cat profiles",
        "📷 Upload cat photo",
        "📝 Save breed and basic details"
      ]
    },
    {
      tag: "AI Assistant",
      title: "CatBot AI",
      desc: "Ask CatBot questions about cat care, breeds, symptoms, and general pet guidance directly inside the app.",
      points: [
        "🤖 AI-powered cat assistant",
        "💬 Ask health and care questions",
        "⚠️ Reminds users to verify with vets"
      ]
    },
    {
      tag: "Medical Records",
      title: "Medical History",
      desc: "Access medical records by cat profile, making it easier to keep health information organized.",
      points: [
        "🏥 View records by cat",
        "📁 Organized medical history",
        "➡️ Quick access to past records"
      ]
    },
    {
      tag: "Vet Records",
      title: "Cat Records",
      desc: "Track detailed visit information including medical visits, checkups, symptoms, clinic names, and emergency records.",
      points: [
        "💉 Track vet visits",
        "🚨 Save emergency checkups",
        "📍 Store clinic information"
      ]
    },
    {
      tag: "Growth Tracking",
      title: "Growth Tracking",
      desc: "Monitor your cat’s growth and weight changes over time to better understand their health progress.",
      points: [
        "📊 View growth data",
        "⚖️ Track weight changes",
        "🐾 Compare cats easily"
      ]
    }
  ];

  let currentIndex = 0;

  function updateFeatureInfo(index) {
    featureInfo.classList.add("change");

    setTimeout(() => {
      const data = featureData[index];

      featureTag.textContent = data.tag;
      featureTitle.textContent = data.title;
      featureDesc.textContent = data.desc;

      featurePoints.innerHTML = data.points
        .map(point => `<div>${point}</div>`)
        .join("");

      featureInfo.classList.remove("change");
    }, 180);
  }

  function updateCarousel() {
    slides.forEach((slide) => {
      slide.className = "phone-slide";
    });

    const total = slides.length;

    const active = currentIndex;
    const left = (currentIndex - 1 + total) % total;
    const right = (currentIndex + 1) % total;
    const farLeft = (currentIndex - 2 + total) % total;
    const farRight = (currentIndex + 2) % total;

    slides[active].classList.add("active");
    slides[left].classList.add("left");
    slides[right].classList.add("right");
    slides[farLeft].classList.add("far-left");
    slides[farRight].classList.add("far-right");

    updateFeatureInfo(currentIndex);
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  updateCarousel();
