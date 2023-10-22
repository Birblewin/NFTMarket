/* eslint-disable react/prop-types */
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function CollectionModal({ closeModal }) {
  return (
    <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-100 flex items-center z-50 animate-modal animate-modal-right">
      <span className="absolute top-4 left-4 text-3xl text-gray-800 cursor-pointer" onClick={closeModal}>
        &times;
      </span>
      <div className="mt-20">
        <div className="header">
          <span className="close-button" onClick={closeModal}>
            &times;
          </span>
          <span className="filter font-size-18 font-weight-bold">Filter</span>
          <span className="reset text-14 font-blue">Reset</span>
        </div>

        <div className="content">
          <span className="collecti font-size-16 font-weight-bold">Sort</span>
          <span className="selected font-size-14">All Time Volume</span>
          <span><NavigateNextIcon className="next-icon text-gray-800" /></span>
        </div>

        <div className="content">
          <span className="collect font-size-16 font-weight-bold">Verification</span>
          <span className="selected font-size-14">Verified Only</span>
          <span><NavigateNextIcon className="next-icon text-gray-800" /></span>
        </div>

        <div className="content">
          <span className="collects font-size-16 font-weight-bold">Categories</span>
          <span className="selected font-size-14">All</span>
          <span><NavigateNextIcon className="next-icon text-gray-800" /></span>
        </div>
      </div>
    </div>
  );
}

export default CollectionModal;
