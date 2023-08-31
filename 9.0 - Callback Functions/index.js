function foo(bar) {
  bar(); // this is the callback function
}

foo(function () {
  console.log("bar");
});

// alt example

function named() {
  console.log("bar");
}

foo(named);

// another example

function foo(bar) {
  let isNight = true; // or false, depending on your needs
  let isOnline = false; // or false, depending on your needs
  if (isNight) {
    bar();
    console.log("It is night time");
  }
  if (isOnline) {
    bar();
    console.log("You are online");
  }
}
