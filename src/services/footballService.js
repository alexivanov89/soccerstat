import { apiClient } from './apiClient';

export const footballService = {
  getCompetition: (id = '') => apiClient().get(`/competitions/${id}`),
  getMatches: () => apiClient().get('/matches'),
};
