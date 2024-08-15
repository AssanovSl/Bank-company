(
    function(){
        const blockSwitch = document.querySelector('.switch')
        blockSwitch.addEventListener('click', contentSwitch)
        
    
        function contentSwitch(e) {
            const tabSwitch = e.target.closest('.switch__link')
            
            if (!tabSwitch) return
            e.preventDefault()
            if (tabSwitch.classList.contains('switch__link--active')) return

            const contentID = tabSwitch.getAttribute('href')
            const activePosition = document.querySelector('.switch__link--active')
            const activeContent = document.querySelector('.product-list--active')

            if (activePosition) {
                activePosition.classList.remove('switch__link--active')
            }

            if (activeContent) {
                activeContent.classList.remove('product-list--active')
            }
            
            tabSwitch.classList.add('switch__link--active')
            document.querySelector(contentID).classList.add('product-list--active')
        }
    }
)();