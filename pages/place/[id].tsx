import { client } from '@/lib/apollo-client';
import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Place } from '@/graphql/generated/schemaType';
import Detail from '../detail';

const PlacePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [place, setPlace] = useState<Place | null>(null); // Initialize state with null
  const placeQuery = gql`
    query Place($placeId: ID) {
      place(id: $placeId) {
        id
        desciption
        mainPhoto
        priceByNight
        owner {
          email
          name
          photo
        }
        reviews {
          place
          rate
          feedback
          author {
            name
            photo
            email
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(placeQuery, {
    client,
    variables: {
      placeId: id,
    },
  });

  useEffect(() => {
    if (data) {
      setPlace(data.place);
    }
  }, [data]);
  return (
    <Detail>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error: {error.message}</h1>
      ) : place ? (
        <>
          <h1>Place {place.id}</h1>
          <img src={place.mainPhoto ?? ''} alt={`Image of ${place.id}`} />
          <p>{place.desciption}</p>
          <p>Price: {place.priceByNight}</p>
        </>
      ) : (
        <h1>Place not found</h1>
      )}
    </Detail>
  );
};

export default PlacePage;
