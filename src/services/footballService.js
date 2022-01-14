import { apiClient } from './apiClient';

export const footballService = {
  getCompetition: () => apiClient().get('/competitions/'),
};
