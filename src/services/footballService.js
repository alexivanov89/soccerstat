import { apiClient } from './apiClient';

export const footballService = {
  getMatches: () => apiClient().get('/matches'),
  getCompetition: (id = '') => apiClient().get(`/competitions/${id}`),
  getTeamsLeague: (id) => apiClient().get(`/competitions/${id}/teams`),
  getMatchesLeague: (id) => apiClient().get(`/competitions/${id}/matches`),
  getMatchesTeam: (id) => apiClient().get(`/teams/${id}/matches/`),
};
