/* Acurist Portal — mock session.
   NO real auth. Just makes the demo behave like an app:
   visiting any page without "logging in" bounces to login.html. */

(function () {
  const KEY = "acurist-portal-mock-session";
  function isLoggedIn() {
    try { return !!JSON.parse(sessionStorage.getItem(KEY) || "null"); }
    catch { return false; }
  }
  function login(email) {
    sessionStorage.setItem(KEY, JSON.stringify({
      email: email || "schen@pacificfamilymed.com",
      loggedInAt: Date.now()
    }));
  }
  function logout() {
    sessionStorage.removeItem(KEY);
    window.location.href = "login.html";
  }
  window.AcuristPortal = { isLoggedIn, login, logout };

  // Pages that opt into the gate set <body data-protected="1">.
  document.addEventListener("DOMContentLoaded", function () {
    if (document.body.getAttribute("data-protected") === "1" && !isLoggedIn()) {
      const here = window.location.pathname.split("/").pop() + window.location.search;
      window.location.href = "login.html?next=" + encodeURIComponent(here);
      return;
    }
    // Active tab highlighting from <body data-page="dashboard">
    const page = document.body.getAttribute("data-page");
    if (page) {
      document.querySelectorAll(".sb-nav a[data-tab]").forEach(a => {
        if (a.getAttribute("data-tab") === page) a.classList.add("active");
      });
    }
    // Hook up [data-action=logout] buttons
    document.querySelectorAll("[data-action=logout]").forEach(b => {
      b.addEventListener("click", function (e) { e.preventDefault(); logout(); });
    });
  });
})();
