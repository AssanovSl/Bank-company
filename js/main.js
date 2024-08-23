(

    function () {
        /*================================================================*/
        /*========================burger menu=============================*/
        /*================================================================*/

        const burgerIcon = document.querySelector('.burger-icon');
        console.log(burgerIcon);
        burgerIcon.addEventListener('click', burgerInit)

        function burgerInit(e) {
            if (document.documentElement.clientWidth > 850) return

            if (!document.body.classList.contains('body--opened-menu')) {
                document.body.classList.add('body--opened-menu')
                document.querySelector('.burger--closed').style.display = 'block'
                document.querySelector('.burger--opened').style.display = 'none'

            } else {
                document.body.classList.remove('body--opened-menu')
                document.querySelector('.burger--closed').style.display = 'none'
                document.querySelector('.burger--opened').style.display = 'block'
            }
        }


        /*================================================================*/
        /*===================tab in page==========================*/
        /*================================================================*/

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

        const buttonkExpand = document.querySelector('.faq__button')
        /*    console.log(buttonkExpand)  */

        buttonkExpand.addEventListener('click', faqExpand)

        function faqExpand(e) {
            /*        console.log('Click')  */
            e.preventDefault()

            const hiddenGrid = document.querySelectorAll('.faq__grid-item--hidden')
            const previewGrid = document.querySelectorAll('.faq__grid-item:nth-child(3), .faq__grid-item:nth-child(4)')

            previewGrid.forEach((item) => {
                item.classList.add('faq__grid-item--open')
                /*            console.log('сбросил маску')  */
            })

            hiddenGrid.forEach((item) => {
                item.classList.remove('faq__grid-item--hidden')
                /*            console.log('выплыл вниз')  */
            })

            buttonkExpand.style.display = 'none';
            /*        console.log('кнопка пропала')   */


            document.querySelector('.collapse__button').style.display = 'flex'
        }

        /*================================================================*/
        /*===================hide all FAQ=================================*/
        /*================================================================*/

        const buttonHide = document.querySelector('.collapse__button')
        /*    console.log(buttonHide)   */

        buttonHide.addEventListener('click', faqHide)

        function faqHide(e) {
            /*      console.log('Click close')  */
            e.preventDefault()

            const hiddenGrid = document.querySelectorAll('.faq__grid-item:nth-child(5), .faq__grid-item:nth-child(6)');
            const previewGrid = document.querySelectorAll('.faq__grid-item:nth-child(3), .faq__grid-item:nth-child(4)')

            previewGrid.forEach((item) => {
                item.classList.remove('faq__grid-item--open')
                /*            console.log('сбросил маску close') */
            })

            hiddenGrid.forEach((item) => {
                item.classList.add('faq__grid-item--hidden')
                /*            console.log('выплыл вниз close')  */
            })

            buttonHide.style.display = 'none';
            /*        console.log('кнопка пропала close') */


            document.querySelector('.faq__button').style.display = 'flex'
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