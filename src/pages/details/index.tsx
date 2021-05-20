import React, { FC, memo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CarDetails } from "../../components/car-details";

import { CarSave } from "../../components/car-save";
import { useFetch } from "../../hooks/use-fetch";
import { GetCarResponse } from "../../network/gateways/get-one";
import { buildGetSignleCarUrl } from "../../network/utilities/url-builders";

import styles from "./styles.module.css";

export const Details: FC = memo(() => {
  const currentCarId = useLocation().pathname.split("/")[2];

  const { response, isLoading, error } = useFetch<GetCarResponse>(
    buildGetSignleCarUrl(currentCarId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !response) {
    return null;
  }

  return (
    <article className={styles.container}>
      <img
        height={600}
        alt={response.car.modelName}
        src={response.car.pictureUrl}
      />
      <section className={styles.infoBlock}>
        <CarDetails car={response.car} />
        <CarSave car={response.car} />
      </section>
    </article>
  );
});
