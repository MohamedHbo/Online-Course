/** @format */
const pagination = document.querySelectorAll(".pagination li");

pagination.forEach(listItem => {
	listItem.addEventListener("click", () => {
		if ((listItem.contains = "active")) {
			listItem.classList.remove("active");
		} else {
			listItem.classList.add("active");
		}
		listItem.previousElementSibling.classList.remove("active");
	});
});
Footer
© 2022 GitHub, Inc.