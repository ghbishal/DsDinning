import "./curry.scss";

import {useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

const curry = [
  {src: require("../../../assets/menu/curry01.jpg"), width: 2, height: 2},
  {src: require("../../../assets/menu/curry02.jpg"), width: 2, height: 2},
];

const Curry = () => {
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
    <section id="curry">
      <div className="bg-pattern01">
        <div className="coupons-container">
          <div className="coupons-header">
            <h5>Curry</h5>
          </div>
          <div className="coupon-image">
            <Gallery photos={curry} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel currentIndex={currentImage} views={curry} />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curry;
