// Function to handle pet adoption
function adoptPet(petName) {
    document.getElementById("petName").textContent = petName;
    document.getElementById("adoptionModal").style.display = "block";
}

function closeModal()
{
    document.getElementById("adoptionModal").style.display = "none";
}
function submitAdoption() {
    let name = document.getElementById("adopterName").value.trim();
    let email = document.getElementById("adopterEmail").value.trim();
    let phone = document.getElementById("adopterNumber").value.trim();
    if (name === "" || email === "" || phone === "") {
        alert("Please fill out all fields!");
    } else {
        alert(`Thank you, ${name}! We'll contact you soon.`);
        closeModal();
    }
}
document.querySelector('a[href="contact"]').addEventListener("click", function (e){
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({behavior: "smooth" });
});

function searchPets()
{
    let input = document.getElementById("searchBar").value.toLowerCase();
    let pets = document.querySelectorAll(".pet");

    pets.forEach(pet => {
        let petName = pet.querySelector("h3").textContent.toLowerCase();
        let petSpecies = pet.querySelector(".species").textContent.toLowerCase();
        let petColor = pet.querySelector(".color").textContent.toLowerCase();
        if(petName.includes(input) || petSpecies.includes(input) || petColor.includes(input)){
            pet.style.display = "block";
        }
        else{
            pet.style.display = "none";
        }
    });
}

/*document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".help-card");

    function checkScroll(){
        sections.forEach(section => {
            let position = section.getBoundingClientRect().top;
            let screenPostion = window.innerHeight/1.3;

            if(position < screenPostion){
                section.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
});*/

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        counter.innerText = '0';
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const increment = target / 100; // Adjust speed

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter); // Smooth animation
            } else {
                counter.innerText = target; // Ensure exact value at the end
            }
        };

        setTimeout(updateCounter, 500); // Small delay before animation starts
    });

    // Make counter visible smoothly
    setTimeout(() => {
        document.querySelector('.counter-container').style.opacity = "1";
        document.querySelector('.counter-container').style.transform = "translateY(0)";
    }, 500);
});



