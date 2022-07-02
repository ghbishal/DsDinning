import "./coupons.scss";
import {useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

const photos = [
  {src: require("../../assets/coupons/a5flyerback.png"), width: 3, height: 4},
  {src: require("../../assets/coupons/a5flyerfront.png"), width: 3, height: 4},
  {src: require("../../assets/coupons/coupen.png"), width: 4, height: 3},
];

const Coupons = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, {photo, index}) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <section id="coupons">
      <div className="bg-pattern01">
        <div className="coupons-container">
          <div className="coupons-header">
            <h5>COUPONS</h5>
          </div>
          <div className="coupon-image">
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel currentIndex={currentImage} views={photos} />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coupons;
