import React from "react";
import { Text } from "../../../../components/text/Text";
import { CardCom } from "../../../../components/card/card-com";
import { Button } from "@mui/material";

export const NewProduct = () => {
  const arrText = [
    {
      title: "New Arrival products",
      subTitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.",
    },
  ];
  const arrCard = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Lui9y1iZUT4P_j7w8NPHnvTJQ-3RIpYzWw&usqp=CAU",
      text: "All Natural Makeup Beauty Cosmetics",
      price: 11.9,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Lui9y1iZUT4P_j7w8NPHnvTJQ-3RIpYzWw&usqp=CAU",
      text: "All Natural Makeup Beauty Cosmetics",
      price: 11.9,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Lui9y1iZUT4P_j7w8NPHnvTJQ-3RIpYzWw&usqp=CAU",
      text: "All Natural Makeup Beauty Cosmetics",
      price: 11.9,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Lui9y1iZUT4P_j7w8NPHnvTJQ-3RIpYzWw&usqp=CAU",
      text: "All Natural Makeup Beauty Cosmetics",
      price: 11.9,
    },
  ];
  return (
    <div style={{ paddingTop: "80px" }}>
      {arrText.map((item, index) => (
        <Text key={index} {...item} />
      ))}

      <div
        style={{
          maxWidth: "1200px",
          display: "flex",
          margin: "0 auto",
          paddingTop: "60px",
          gap: "10px",
        }}
      >
        {arrCard.map((item, index) => (
          <CardCom key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
