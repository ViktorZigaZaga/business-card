import { Carousel, Figure } from "react-bootstrap";

export const MyCarousel = ({certificates}) => {

    return (
        <Carousel fade data-bs-theme="dark">
            {certificates.length === 0 
            ?  (<Carousel.Item className="d-flex justify-content-center">
                    <Figure>
                        <Figure.Image
                            className="rounded"
                            width={600}
                            alt="Certificates no-image"
                            src={'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}
                        />
                    </Figure>
                </Carousel.Item>)
            :  (certificates.map((elem) =>
                    <Carousel.Item className="d-flex justify-content-center" key={elem.id}>
                        <Figure>
                            <Figure.Image
                               className="rounded"
                               width={650}
                                alt={elem.title}
                                src={elem.link}
                            />
                        </Figure>
                    </Carousel.Item>
                ))
            } 
        </Carousel>
    );
}