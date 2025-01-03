import React from 'react';

interface CardProps {
  key: number;
  imageGame: string;
  imageText: string;
  game: string;
  earn: string;
}

const Card: React.FC<CardProps> = ({key, imageGame, imageText, game, earn }) => {
  return (
    <div className="relative w-full h-[81px] md:w-[200px] md:h-[300px] cursor-pointer flex flex-row md:flex-col gap-4 rounded-lg shadow-lg flex-shrink-0">
      <div className="absolute w-[82px] md:w-full md:flex-1 md:absolute md:top-0 md:left-0">
        <img
          src={imageGame}
          className="h-full object-cover rounded-l-lg md:rounded-bl-none md:rounded-t-lg"
          alt={imageText}
        />
      </div>
      <div className="flex flex-col-reverse md:block">
        <div className="font-semibold w-full md:max-w-[180px] max-w-[240px] absolute top-[20px] left-[90px] md:top-[210px] md:left-3">
          <div className="game-container py-4 pr-2 md:pr-0 md:py-0">
            <p className="text-sm md:text-md line-clamp-2">{game}</p>
          </div>
        </div>
        <div className="font-semibold w-full md:max-w-[180px] max-w-[240px] absolute -top-[5px] left-[90px] md:top-[270px] md:left-3">
          <div className="earn-container py-4 pr-2 md:pr-0 md:py-0">
            <p className="text-sm md:text-md line-clamp-1">
              <span className="text-green-500">{earn}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
