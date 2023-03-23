function message() {
  alert("Email = admin@user.com");
  alert("Password = 123456");
}
function showToast(
  message,
  duration = 3000,
  position = "top-right",
  backgroundColor = "#333333"
) {
  Toastify({
    text: message,
    duration: duration,
    position: position,
    backgroundColor: backgroundColor,
  }).showToast();
}
function success() {
  showToast(
    "Login Successful!",
    2000,
    "right",
    "linear-gradient(to right, #00b09b, #96c93d)"
  );
}
function fail() {
  showToast(
    "Wrong Email or Password!",
    2000,
    "center",
    "linear-gradient(to right, #f11523, #7a0b23 )"
  );
}
function login(event) {
  event.preventDefault();
  var fullName = $("#fullName").val();
  var email = $("#email").val();
  var password = $("#password").val();

  if (fullName.length < 3) {
    toastr.error("Type your name correctly!");
  } else if (email === "admin@user.com" && password === "123456") {
    const fullNameParam = encodeURIComponent(fullName); // encode fullName parameter for passing in URL
    window.location.href = `home/home.html?fullName=${fullNameParam}`; // pass fullName as URL parameter
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
      showToast(
        "Your city " +
          '"' +
          CityWordInCapitalize +
          '"' +
          " is already available in list",
        2000,
        "right",
        "linear-gradient(to right, #f11523, #7a0b23 )"
      );
      return;
    }
  }
  if (cityFound === false) {
    cities.push(CityWordInCapitalize);

    showToast(
      '"' +
        CityWordInCapitalize +
        '"' +
        " has been successfully added into the list",
      2000,
      "right",
      "linear-gradient(to right, red, blue)"
    );
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
