function login(event) {
  event.preventDefault();

  const fullName = $("#fullName").val();
  const email = $("#email").val();
  const password = $("#password").val();

  if (email === "admin@user.com" && password === "123456") {
    const fullNameParam = encodeURIComponent(fullName); // encode fullName parameter for passing in URL
    window.location.href = `index.html?fullName=${fullNameParam}`; // pass fullName as URL parameter
    toastr.success("Welcome, " + fullName + "!");
  } else {
    toastr.error("Invalid email or password.");
  }
}
let cities = [
  "Faisalabad",
  "Lahore",
  "Multan",
  "Sargodha",
  "Rajanpur",
  "Bahawalpur",
  "Sheikhupura",
];

// ---------------------------print-cities-----------------------------------

function printCities() {
  document.getElementById("output").innerHTML = " ";

  for (i = 0; i < cities.length; i++) {
    let num = i + 1;
    document.getElementById("output").innerHTML +=
      num + ")" + " " + cities[i] + " " + "<br>";
  }
}

// ---------------------------add-city-----------------------------------

function addCity() {
  document.getElementById("output").innerHTML = " ";
  let checkCity = document.getElementById("input").value;
  if (!checkCity) {
    alert("please enter city name correctly");
    return;
  }
  CityFirstLetter = checkCity.charAt(0).toUpperCase();
  CityAllLetters = checkCity.slice(1).toLowerCase();
  CityWordInCapitalize = CityFirstLetter + CityAllLetters;

  let cityFound = false;
  for (i = 0; i < cities.length; i++) {
    if (cities[i] === CityWordInCapitalize) {
      cityFound = true;
      Toastify({
        text:
          "Your city " +
          '"' +
          CityWordInCapitalize +
          '"' +
          " is already available in list",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        // newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, red, blue)",
        },
        // onClick: function () {}, // Callback after click
      }).showToast();
      return;
    }
  }
  if (cityFound === false) {
    cities.push(CityWordInCapitalize);
    Toastify({
      text:
        '"' +
        CityWordInCapitalize +
        '"' +
        " has been successfully added into the list",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, red, blue)",
      },
    }).showToast();
    for (i = 0; i < cities.length; i++) {
      num = i + 1;
      document.getElementById("output").innerHTML +=
        num + ")" + " " + cities[i] + "<br>";
    }
  }
}

// Action Button for Input
document.getElementById("clear").onclick = function () {
  document.getElementById("input").value = "";
};
// Action Button for Output
document.getElementById((id = "clearOutputButton")).onclick = function () {
  document.getElementById("output").innerText = "";
};
