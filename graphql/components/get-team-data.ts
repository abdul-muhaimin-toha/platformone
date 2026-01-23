import getGqlData from '@/lib/get-gql-data';
import { WPConnection, TeamNode } from '../types';
import { teamsImagesRandomQuery, leadershipTeamsQuery, leadershipTeamsByIdsQuery } from '../queries/team-data-query';

interface TeamData {
  teams: WPConnection<TeamNode> & { nodes?: TeamNode[] };
}

/**
 * Fetch random teams images
 */
export const getTeamsImagesRandom = async (
  first: number,
  size: string = 'LARGE',
): Promise<TeamNode[]> => {
  try {
    // Fetch a larger set to allow for client-side randomization if server RAND is unavailable
    // or just to ensure we have enough to pick from.
    // We'll fetch up to 50 teams.
    const data = await getGqlData<TeamData>(teamsImagesRandomQuery, {
      first: 50,
      size,
    });

    if (!data?.teams?.nodes?.length) {
      console.warn(`No teams found for random query`);
      return [];
    }

    // Shuffle the array
    const shuffled = [...data.teams.nodes].sort(() => Math.random() - 0.5);

    // Take the requested amount
    const selectedNodes = shuffled.slice(0, first);

    // Ensure we use the right image URL and format the nodes
    const nodes = selectedNodes.map((node) => ({
      ...node,
      featuredImage: {
        ...node.featuredImage,
        node: {
          ...node.featuredImage.node,
          // sourceUrl takes priority if size was requested
          mediaItemUrl:
            node.featuredImage.node.sourceUrl ||
            node.featuredImage.node.mediaItemUrl,
        },
      },
    }));

    return nodes;
  } catch (error) {
    console.error('Error fetching random teams:', error);
    return [];
  }
};

/**
 * Fetch specific teams by IDs or all teams for Leadership page
 */
export const getLeadershipTeams = async (
  ids?: (string | number)[],
): Promise<TeamNode[]> => {
  try {
    if (ids && ids.length > 0) {
      const stringIds = ids.map((id) => id.toString());
      const data = await getGqlData<{ teams: { nodes: TeamNode[] } }>(
        leadershipTeamsByIdsQuery,
        { ids: stringIds },
      );

      return data?.teams?.nodes || [];
    }

    const data = await getGqlData<{ teams: WPConnection<TeamNode> }>(
      leadershipTeamsQuery,
    );

    if (!data?.teams?.edges) {
      return [];
    }

    return data.teams.edges.map((edge) => edge.node);
  } catch (error) {
    console.error('Error fetching leadership teams:', error);
    return [];
  }
};
