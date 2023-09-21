import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  const {thumbnail, title, rating, price, id} = product;
  const ratingTrack = [];
  const ratingCount = Math.round(rating);
  for (let i = 1; i <= 5; i++) {
    i <= ratingCount ? ratingTrack.push(i) : ratingTrack.push(-i)
  }

  return (
    <div className='border border-primary rounded-lg'>
      <img src={thumbnail} alt="Product Image" className='w-full h-[200px] rounded-t-lg' />
      <div className='p-4'>
        <h4 className='text-xl font-medium'>{title}</h4>
        <div className='flex mt-2 text-orange-400'>
          {
            ratingTrack.map(val => val > 0 ? <AiFillStar key={val}></AiFillStar> : <AiOutlineStar key={val}></AiOutlineStar>)
          }
        </div>
        <span className='text-xl font-medium mt-1 block'>$ {price}</span>
        <Link to={`/products/${id}`} className='btn btn-primary text-white text-base normal-case h-auto min-h-[40px] mt-4'>View Details</Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.array
}

export default ProductCard;