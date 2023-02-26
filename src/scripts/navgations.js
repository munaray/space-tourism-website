const navBar = document.querySelector(".primaryNav");
const hamBuggerMenu = document.querySelector(".mobileNav");
const listItems = document.querySelectorAll(".primaryNav__list");

hamBuggerMenu.addEventListener("click", () => {
	const visibility = navBar.getAttribute("displayMobileNav");

	if (visibility === "false") {
		navBar.setAttribute("displayMobileNav", true);
		hamBuggerMenu.setAttribute("aria-expanded", true);
		for (i = 0; i < listItems.length; i++) {
			listItems[i].setAttribute("listItem", true);
		}
	} else {
		navBar.setAttribute("displayMobileNav", false);
		hamBuggerMenu.setAttribute("aria-expanded", false);
		listItems.forEach((list) => list.setAttribute("listItem", false));
	}
});
