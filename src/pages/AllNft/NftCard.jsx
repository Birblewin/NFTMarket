import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Details from '../AllCollections/Collection';

function NftCard() {
  const cards = Details.map((collection) => (
    <div key={collection._id} className="rounded-lg  border border-solid border-gray-600 w-full ">
      <img className="w-full h-auto rounded" src={collection.cardImage} alt={collection.cardTitle} />
      <div className="texts flex px-2 py-1">
        <p className="text-blue-500  text-base">{collection.cardTitle}</p>
        <VerifiedIcon className="verified-icon text-blue-500 p-1 text-xs" />
      </div>
      <span className="name  p-2 text-lg">{collection.name}</span>
      <div className="details flex justify-between items-center">
        <span className="price   text-xl p-1 m-2 font-bold">{collection.price}</span>
        <span className="banner  text-yellow-600 m-2 px-2 py-0.5 rounded font-bold">
          <span>For Sale</span>
        </span>
      </div>
      <hr className="line border-t border-gray-500" />
      <div className="action  flex">
        <span className="text-lg "><FavoriteBorderOutlinedIcon /></span>
        <span className="text-lg mx-1">0</span>
      </div>
    </div>
  ));

  return (
    <div className="render-cards">
      <div className="cards  gap-5 py-10 px-2 grid md:grid-cols-3  sm:grid-cols-3 lg:grid-cols-5 lg:px-20 ">
        {cards}
      </div>
    </div>
  );
}

export default NftCard;
