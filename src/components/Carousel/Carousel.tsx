import { Carousel } from 'antd';

import './Carousel.css'

interface ImgCarousel  {
    id: number,
    text: string,
    text2? : string
    imageUri: string
}

const imgCarousel: ImgCarousel[]  = [
    {
        id: 1,
        text: 'EXPERT TECHNICIANS, COMPETITIVE PRICES.',
        text2: 'We are committed to earning your trust by providing the expertise and value you expect.',
        imageUri: 'http://carservice.webps.info/assets/themes/carservice/images/slider/image_03.jpg'
    },
    {
        id: 2,
        text: 'MAKE YOUR CAR LAST LONGER',
        text2: 'Free oil change, April 15. Only if you have a "5" on your license plate.',
        imageUri: 'http://carservice.webps.info/assets/themes/carservice/images/slider/image_02.jpg'
    },
    {
        id: 3,
        text: 'FIND THE TIRES THAT MATCH YOUR NEEDS',
        text2: 'Take advantage of our lowest prices which automatically include coupons.',
        imageUri: 'http://carservice.webps.info/assets/themes/carservice/images/slider/image_02.jpg'
    }
]

const CarouselComponent = () => {
    return (
        <div className='carousel'>
            <Carousel effect={'fade'}>
                {
                    imgCarousel.map(page => {
                        return (
                            <div className='carouselItem' key={page.id}>
                                <img src={page.imageUri} alt="" />
                                <h1>{page.text}</h1>
                                <h2>{page?.text2}</h2>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default CarouselComponent