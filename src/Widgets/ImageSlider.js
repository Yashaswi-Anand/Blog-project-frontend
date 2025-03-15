import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider = () => {
    const images = [{
        image_path: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?cs=srgb&dl=pexels-pok-rie-33563-724921.jpg&fm=jpg',
        message: '\u2022 Imagine   \u2022 Design    \u2022 Reality'
    }, {
        image_path: "https://media.istockphoto.com/id/1408387701/photo/social-media-marketing-digitally-generated-image-engagement.jpg?s=612x612&w=0&k=20&c=VVAxxwhrZZ7amcPYJr08LLZJTyoBVMN6gyzDk-4CXos=",
        message: 'Design With Effective Cost'
    },
    {
        image_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNImaXh9gYmJYvSbgTFhwN3Pj6Fm_4FvG9UbA5J-QVk532qzRED38-BVjCb1uO_Ua-a9k&usqp=CAU",
        message: 'Consult Our Designer',
    }];

    return (
        <div className="slider-container">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                interval={3000}
                transitionTime={500}
            >
                {images.map((image, index) => (
                    <div key={index} className="slider-item">
                        <img src={image.image_path} alt="No images" className="slider-image" />
                        <div className="image-message-box">
                            {/* <p className="image-message">{image.message}</p> */}
                            {image.button_text && <button className="button button-on-image">{image.button_text}</button>}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageSlider;