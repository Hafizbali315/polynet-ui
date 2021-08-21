const hamburgerBtn = document.querySelector('.hamburger')
const cancelBtn = document.querySelector('.cancel')
const navbarToggler = document.querySelector('.navbar__toggler')
const mobileMenuSidebar = document.querySelector('.mobile_menu_sidebar')

// Mobile Menu Toggler
const showMobileMenu = () => {
	hamburgerBtn.style.display = 'none'
	cancelBtn.style.display = 'block'

	if (hamburgerBtn.style.display === 'none') {
		mobileMenuSidebar.style.display = 'block'
	}
}

const hideMobileMenu = () => {
	hamburgerBtn.style.display = 'block'
	cancelBtn.style.display = 'none'

	if (hamburgerBtn.style.display === 'block') {
		mobileMenuSidebar.style.display = 'none'
	}
}

hamburgerBtn.addEventListener('click', showMobileMenu)
cancelBtn.addEventListener('click', hideMobileMenu)
