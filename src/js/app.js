import * as Turbo from "@hotwired/turbo";
import { Modal } from 'bootstrap';

document.addEventListener('turbo:load', () => {
    // Sticky Header
    // Get the header element
    let header = document.querySelector(".header");

    if (header) {
        // Add an event listener to the window for when it is scrolled
        window.addEventListener('scroll', function() {
            // Check if the page has been scrolled more than 20 pixels
            if (window.scrollY > 20) {
                // Add the "sticky" class to the header
                header.classList.add("sticky");
            } else {
                // Remove the "sticky" class from the header
                header.classList.remove("sticky");
            }
        });
    }

    // Dropdown
    const toggleDropdown = (dropdown) => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdownMenu.classList.toggle('show');
    };
    
    const closeDropdowns = () => {
        const dropdownMenus = document.querySelectorAll('.dropdown-menu');
        dropdownMenus.forEach(dropdownMenu => {
			if (dropdownMenu.classList.contains('show')) {
				dropdownMenu.classList.remove('show');
			}
        });
    };
    
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', () => {
			const dropdown = dropdownToggle.closest('.dropdown');
			toggleDropdown(dropdown);
        });
    });
    
    document.addEventListener('click', event => {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
			if (!dropdown.contains(event.target)) {
				const dropdownMenu = dropdown.querySelector('.dropdown-menu');
				if (dropdownMenu.classList.contains('show')) {
					dropdownMenu.classList.remove('show');
				}
			}
        });
    });
    
    const menuItems = document.querySelectorAll('.dropdown-menu li a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
			const dropdown = item.closest('.dropdown');
			toggleDropdown(dropdown);
        });
    });

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    function showPanel(panelIndex) {
        if (tabPanels.length > panelIndex && panelIndex >= 0) {
            tabPanels.forEach(panel => {
            panel.classList.remove('active');
            });
            tabPanels[panelIndex].classList.add('active');
        }
    }
        
    function showTab(event) {
        const selectedTab = event.target.dataset.tab;

        tabButtons.forEach(function(button) {
            button.classList.remove('active');
        });
        event.target.classList.add('active');

        tabPanels.forEach(function(panel) {
            if (panel.dataset.tab === selectedTab) {
            panel.classList.add('active');
            }
        });
    }

    showPanel(0);
    tabButtons.forEach(function(button, index) {
        button.addEventListener('click', function(event) {
            showTab(event);
            showPanel(index);
        });
    });

    // Fancy box
    const fancyboxGallery = '[data-fancybox="gallery"]';
    const fancyboxOptions = {
        contentClick: "iterateZoom",
        Images: {
            Panzoom: {
            maxScale: 5,
            },
        },
    };

    Fancybox.bind(fancyboxGallery, fancyboxOptions);

});
