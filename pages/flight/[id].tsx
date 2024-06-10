import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Detail from '../detail';
import { client } from '@/lib/apollo-client';
import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import type { Flight } from '@/graphql/generated/schemaType';

const Flight: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [flight, setFlight] = useState<Flight | null>(null); // Initialize state with null
  const flightQuery = gql`
    query Flight($flightId: ID) {
      flight(id: $flightId) {
        id
        destination
        origin
        price
      }
    }
  `;
  const { loading, error, data } = useQuery(flightQuery, {
    client,
    variables: {
      flightId: id,
    },
  });

  useEffect(() => {
    if (data) {
      setFlight(data.flight);
    }
  }, [data]);
  return (
    <Detail>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error: {error.message}</h1>
      ) : flight ? (
        <div>
          <h1>Flight {flight.id}</h1>
          From: {flight.origin} To: {flight.destination} Price: {flight.price}€
        </div>
      ) : (
        <h1>Flight not found</h1>
      )}
    </Detail>
  );
};

export default Flight;
