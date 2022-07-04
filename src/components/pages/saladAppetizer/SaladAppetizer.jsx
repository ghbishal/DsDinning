import "./saladAppetizer.scss";

import {useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

const photos = [
  {src: require("../../../assets/menu/saladsoup.jpg"), width: 2, height: 2},
  {src: require("../../../assets/menu/appetizer.jpg"), width: 2, height: 2},
];

const SaladAppetizer = () => {
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
    <section id="salad">
      <div className="bg-pattern01">
        <div className="coupons-container">
          <div className="coupons-header">
            <h5>Salad & Appetizer</h5>
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

export default SaladAppetizer;
