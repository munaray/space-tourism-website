const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

let tabFocus = 0;

tabList.addEventListener("keydown", (e) => {
	const arrowKeyRight = 39;
	const arrowKeyLeft = 37;

	if (e.keyCode === arrowKeyLeft || e.keyCode === arrowKeyRight) {
		tabs[tabFocus].setAttribute("tabindex", -1);

		if (e.keyCode === arrowKeyRight) {
			tabFocus++;
			if (tabFocus >= tabs.length) {
				tabFocus = 0;
			}
		} else if (e.keyCode === arrowKeyLeft) {
			tabFocus--;
			if (tabFocus < 0) {
				tabFocus = tabs.length - 1;
			}
		}

		tabs[tabFocus].setAttribute("tabindex", 0);
		tabs[tabFocus].focus();
	}
});

for (i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", (e) => {
		const targetTab = e.target;
		const targetLocation = targetTab.getAttribute("aria-controls");
		const targetImage = targetTab.getAttribute("data-image");
		const tabContainer = targetTab.parentNode;
		const mainContainer = tabContainer.parentNode;

		const activeTab = tabContainer.querySelector('[aria-selected="true"]');
		activeTab.setAttribute("aria-selected", false);
		targetTab.setAttribute("aria-selected", true);

		const showInfo = mainContainer.querySelectorAll('[role="tabpanel"]');
		for (i = 0; i < showInfo.length; i++) {
			showInfo[i].classList.add("hidden");
		}

		const showImage = mainContainer.querySelectorAll("picture");
		for (i = 0; i < showImage.length; i++) {
			showImage[i].classList.add("hidden");
		}

		const hideInfo = mainContainer.querySelector([`#${targetLocation}`]);
		hideInfo.classList.remove("hidden");

		const hideImage = mainContainer.querySelector([`#${targetImage}`]);
		hideImage.classList.remove("hidden");
	});
}
