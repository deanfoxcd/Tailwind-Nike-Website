import { star } from '../assets/icons';

function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imgURL}
        alt="customer"
        className="h-[120px] w-[120px] rounded-full object-cover"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex items-center justify-center gap-2">
        <img
          src={star}
          alt=""
          width={24}
          height={24}
          className="m-0 object-contain"
        />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
        <h3 className="mt-1 text-center font-palanquin text-3xl font-bold">
          {customerName}
        </h3>
      </div>
    </div>
  );
}

export default ReviewCard;
