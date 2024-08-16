(
    function () {
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

        const blockExpand = document.querySelector('.expand__faq')
        blockExpand.addEventListener('click', faqExpand)

        function faqExpand(e) {
            const buttonFAQexpand = e.target.closest('.faq__button')


            if (!buttonFAQexpand) return
            e.preventDefault()

            const hiddenGrid = document.querySelectorAll('.faq__grid-item--hidden')
            const previewGrid = document.querySelectorAll('.faq__grid-item:nth-child(3), .faq__grid-item:nth-child(4)')
            

            previewGrid.forEach((item) => {
                item.classList.add('faq__grid-item--open')
            })

            hiddenGrid.forEach((item) => {
                item.classList.remove('faq__grid-item--hidden')
            })

            buttonFAQexpand.style.display = 'none'
            }
            
        }
)();