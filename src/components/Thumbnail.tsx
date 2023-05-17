import React from "react";

interface Props{
  description: string, 
  image: string, 
  width: number
}

export const Thumbnail = ({ description, image, width = 50 }: Props) => {
  console.log(width, "width")
  return (
    <div className="thumbnail">
      <img alt={description} src={image} height={100} />
    </div>
  );
};
