(function () {
  var $change = document.querySelector("#change");
  var $firstsec = document.querySelector(".main");
  var x = 1;

  $change.addEventListener("click", function () {
    $firstsec.classList.remove("bg" + x);
    x++;
    $firstsec.classList.add("bg" + x);
    if ($firstsec.classList.value === "main section bg5") {
      $firstsec.classList.remove("bg" + x);
      x = 1;
      $firstsec.classList.add("bg" + x);
    }
  });
})();
