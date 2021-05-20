import React, { FC, memo } from "react";
import { useLocation } from "react-router-dom";
import { CarDetails } from "../../components/car-details";

import { CarSave } from "../../components/car-save";
import { useFetch } from "../../hooks/use-fetch";
import {
  GetCarResponse,
  buildGetSignleCarUrl,
} from "../../network/gateways/get-one";
import { NotFound } from "../not-found";

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
    return <NotFound />;
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
