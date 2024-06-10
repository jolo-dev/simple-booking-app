import { resolverType } from 'fast-graphql';
import { flights } from '@/data';

import * as schema from '@/graphql/generated/schemaType';

const Query = {
  flightList: (): schema.Query['flightList'] => {
    return flights;
  },

  flight: (_parent: any, args: schema.Flight, _ctx: any) => {
    return flights.find((x) => x.id == args.id);
  },
};

const resolver: resolverType = { Query };

export default resolver;
