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

    // Search
    const searchResultWrapper = document.getElementById('search-results');
    const propertySearchInput = document.getElementById('search-input');

    if (searchResultWrapper) {
        // debounce function to delay the search API call
        function debounce(func, delay) {
            let timerId;
            return function (...args) {
                clearTimeout(timerId);
                timerId = setTimeout(() => func.apply(this, args), delay);
            };
        }
    
        function handleSearchInputChange(event) {
            const searchValue = event.target.value;
            const shouldShowResults = searchValue.length > 0;
            searchResultWrapper.classList.toggle('show', shouldShowResults);
        
            if (shouldShowResults) {
                const searchUrl = `https://api.github.com/search/repositories?q=${searchValue}`;
                // const headers = new Headers({
                //     Authorization: 'Bearer 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',
                // });
                // const options = { headers };
                
                fetch(searchUrl)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log(data); // log the response from the API to the console
                        // create HTML elements for each search result
                        const results = data.items.map(item => {
                            const result = document.createElement('ul');
                            result.classList.add('result-menu');
            
                            result.innerHTML = `
                                <li class="result-item">
                                    <a href="${item.html_url}" class="result-link"><span class="material-symbols-rounded">location_on</span> ${item.name} ${item.language}</a>
                                </li>
                            `;
                            return result;
                        });
            
                        // append the search result elements to the DOM
                        searchResultWrapper.innerHTML = '';
                        results.forEach(result => {
                            searchResultWrapper.appendChild(result);
                        });
                    })
                    .catch(error => {
                        console.error('Error fetching search results:', error);
                    });
            } else {
                searchResultWrapper.innerHTML = '';
            }
        }
            
        document.addEventListener('click', function(event) {
            const isClickInside = searchResultWrapper.contains(event.target);
            if (!isClickInside) {
                searchResultWrapper.classList.remove('show');
            }
        });
    
        // debounced event handler function
        const debouncedHandleSearchInputChange = debounce(handleSearchInputChange, 100);
    
        // attach debounced event handler to search input
        propertySearchInput.addEventListener('input', debouncedHandleSearchInputChange);
    }

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
    // const fancyboxGallery = '[data-fancybox="gallery"]';
    
    // if (fancyboxGallery) {
    //     const fancyboxOptions = {
    //         contentClick: "iterateZoom",
    //         Images: {
    //             Panzoom: {
    //             maxScale: 5,
    //             },
    //         },
    //     };

    //     Fancybox.bind(fancyboxGallery, fancyboxOptions);
    // }
});
