let menuButton = document.getElementsByClassName("menu-button");
			let lists = document.getElementsByClassName("submenu");
			menuButton[0].onclick = function () {
				// for (let list of lists){
				// 	list.classList.toggle("block");
				// }
				menuButton[0].textContent = " ";
				lists[0].classList.toggle("block");
				
			};
			menuButton[1].onclick = function () {
				// for (let list of lists){
				// 	list.classList.toggle("block");
				// }
				menuButton[0].textContent = "≡ Menu";
				lists[0].classList.toggle("block");
				
			};