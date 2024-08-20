(

    function () {
        const blockSwitch = document.querySelectorAll('.switch')

        blockSwitch.forEach((item) => {
            item.addEventListener('click', contentSwitch)
        })

        function contentSwitch(e) {
            if (e.target.closest('.switch--product')) {
                let tabSwitch = e.target.closest('.switch__link')

                if (!tabSwitch) return
                e.preventDefault()

                if (tabSwitch.classList.contains('switch__link--active')) return

                let contentID = tabSwitch.getAttribute('href')
                let activePosition = document.querySelector('.switch--product .switch__link--active')
                let activeContent = document.querySelector('.product-list--active');

                activePosition.classList.remove('switch__link--active')

                activeContent.classList.remove('product-list--active')

                tabSwitch.classList.add('switch__link--active')
                document.querySelector(contentID).classList.add('product-list--active')
            }

            if (e.target.closest('.switch--testimonials')) {
                let tabSwitch = e.target.closest('.switch__link')

                if (!tabSwitch) return
                e.preventDefault()

                if (tabSwitch.classList.contains('switch__link--active')) return

                let contentID = tabSwitch.getAttribute('href')
                let activePosition = document.querySelector('.switch--testimonials .switch__link--active')
                let activeContent = document.querySelector('.testimonials__conteiner--active');

                activePosition.classList.remove('switch__link--active')
                activeContent.classList.remove('testimonials__conteiner--active')

                tabSwitch.classList.add('switch__link--active')
                document.querySelector(contentID).classList.add('testimonials__conteiner--active')
            }
        }

        /*================================================================*/
        /*===================tab in FEATURES==========================*/
        /*================================================================*/

        const tabControls = document.querySelector('.tab-buttons')

        tabControls.addEventListener('click', toggleTab)

        function toggleTab(e) {

            const tabControl = e.target.closest('.tab-buttons__link')

            if (!tabControl) return
            e.preventDefault()
            if (tabControl.classList.contains('tab-conrols__link--active')) return

            const tabContentID = tabControl.getAttribute('href')
            const tabContent = document.querySelector(tabContentID)
            const activeControl = document.querySelector('.tab-buttons__link--active')
            const activeContent = document.querySelector('.features__grid--active')

            if (activeControl) {
                activeControl.classList.remove('tab-buttons__link--active')
            }
            if (activeContent) {
                activeContent.classList.remove('features__grid--active')
            }

            tabControl.classList.add('tab-buttons__link--active')
            tabContent.classList.add('features__grid--active')

        }


        /*================================================================*/
        /*===================show all FAQ=================================*/
        /*================================================================*/

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

        /*================================================================*/
        /*===================testimonials slider==========================*/
        /*================================================================*/

        const swiper = new Swiper('.testimonials__slider', {
            // Optional parameters
            spaceBetween: 80,
            initialSlide: 1,
            slidesPerView: 3,
            centeredSlides: true,




            // Navigation arrows
            navigation: {
                nextEl: '.testimonials__next',
                prevEl: '.testimonials__prev',
            },

        });



    }
)();