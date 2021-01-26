import semver from 'semver';
import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
  id: 'main',
  name: 'Main library',
  global: 'Twitchjs',
  repo: 'viperlight/Twitch.tvjs',
  defaultTag: 'master',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
  tagFilter: tag => semver.gte(tag, '9.0.0'),
});
