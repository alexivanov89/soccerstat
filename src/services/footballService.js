import { apiClient } from './apiClient';

export const footballService = {
  getMatches: () => apiClient().get('/matches'),
  getCompetition: (id = '') => apiClient().get(`/competitions/${id}`),
  getTeamsLeague: (id) => apiClient().get(`/competitions/${id}/teams`),
  getMatchesLeague: (id, filters) => {
    const prepareFilters = filters?.reduce((sum, item) => {
      if (item.value) {
        return sum + `${item.name}=${item.value}&`;
      }
      return sum + '';
    }, '');
    return prepareFilters
      ? apiClient().get(`/competitions/${id}/matches?${prepareFilters}`)
      : apiClient().get(`/competitions/${id}/matches`);
  },
  getMatchesTeam: (id, filters) => {
    const prepareFilters = filters?.reduce((sum, item) => {
      if (item.value) {
        return sum + `${item.name}=${item.value}&`;
      }
      return sum + '';
    }, '');
    return prepareFilters
      ? apiClient().get(`/teams/${id}/matches?${prepareFilters}`)
      : apiClient().get(`/teams/${id}/matches/`);
  },
};
