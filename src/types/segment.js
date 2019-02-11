import { shape, number } from 'prop-types';

export const blockType = shape({
  group_population: number.isRequired,
  home_owner_population: number.isRequired,
  family_home_owner_population: number.isRequired,
  nonfamily_home_owner_population: number.isRequired,
  renter_population: number.isRequired,
  family_renter_population: number.isRequired,
  nonfamily_renter_population: number.isRequired,
  market_size: number.isRequired,
});
