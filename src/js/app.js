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
                // Set up the API endpoint and credentials
                const searchApiUrl = `https://dummyjson.com/products/search?q=${searchValue}`;
                const searchApiToken = 'your_api_token';

                // Set up the API request options
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + `${searchApiToken}`
                    }
                };
                
                // Make the API request to retrieve the requests
                fetch(searchApiUrl, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        // console.log(data); // log the response from the API to the console
                        // create HTML elements for each search result
                        const results = data.products.map(item => {
                            const result = document.createElement('ul');
                            result.classList.add('result-menu');
            
                            result.innerHTML = `
                                <li class="result-item">
                                    <a href="#" class="result-link"><span class="material-symbols-rounded">location_on</span> ${item.title} ${item.brand} ${item.category}</a>
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
    
        // debounced event handler function
        const debouncedHandleSearchInputChange = debounce(handleSearchInputChange, 300);
    
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


    // Header Toggler
    const navButtonToggler = document.getElementById('nav-button-toggler');
    const navMenuElement = document.querySelector('.nav-menu');

    if (navButtonToggler) {
        navButtonToggler.addEventListener('click', () => {
            navMenuElement.classList.add('show');
    
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            document.body.appendChild(overlay);
            document.body.classList.add('overflow-hidden');
    
            overlay.addEventListener('click', () => {
                navMenuElement.classList.remove('show');
                document.body.classList.remove('overflow-hidden');
                overlay.remove();
            });
        });
        
        // Hide Event Handler 
        document.addEventListener('click', (event) => {
            const isClickInsideNavMenu = navMenuElement.contains(event.target);
            const isClickInsideNavButtonToggler = navButtonToggler.contains(event.target);
        
            if (!isClickInsideNavMenu && !isClickInsideNavButtonToggler) {
                navMenuElement.classList.remove('show');
            }
        });
    }


    if (searchResultWrapper) {
        document.addEventListener('click', function(event) {
            const isClickInside = searchResultWrapper.contains(event.target); 
    
            if (!isClickInside) {
                searchResultWrapper.classList.remove('show');
            }
        });
    }

    // Adding commas to the number input. 
    const numberInputs = document.querySelectorAll(".form-number");

    if (numberInputs) {
        numberInputs.forEach(function(input) {
            input.addEventListener("input", function() {
                // Remove any non-digit characters
                const value = this.value.replace(/[^0-9]/g, "");
                
                // Add commas to the number
                this.value = Number(value).toLocaleString();
            });
        });
    }

});
