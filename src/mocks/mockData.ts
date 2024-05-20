import { GithubRepository, GithubUser } from 'src/app/types/GithubAPIType';

export const mockUser: GithubUser = {
  login: 'mohammedvaraliya',
  id: 95087498,
  node_id: 'U_kgDOBarrig',
  avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/Mohammedvaraliya',
  html_url: 'https://github.com/Mohammedvaraliya',
  followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
  following_url:
    'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
  gists_url: 'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
  subscriptions_url:
    'https://api.github.com/users/Mohammedvaraliya/subscriptions',
  organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
  repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
  events_url: 'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/Mohammedvaraliya/received_events',
  type: 'User',
  site_admin: false,
  name: 'Mohammed',
  company: null,
  blog: 'https://linktr.ee/mohammedvaraliya',
  location: 'Mumbai',
  email: null,
  hireable: null,
  bio: 'Full Stack Developer.',
  twitter_username: 'Mohammed_8097',
  public_repos: 26,
  public_gists: 0,
  followers: 16,
  following: 3,
  created_at: '2021-11-26T13:36:26Z',
  updated_at: '2024-04-26T12:20:45Z',
};

export const mockRepos: GithubRepository[] = [
  {
    id: 613840796,
    node_id: 'R_kgDOJJZ3nA',
    name: 'AAD-practicals',
    full_name: 'Mohammedvaraliya/AAD-practicals',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/Mohammedvaraliya/AAD-practicals',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/AAD-practicals/deployments',
    created_at: '2023-03-14T11:30:40Z',
    updated_at: '2023-03-15T07:46:31Z',
    pushed_at: '2023-05-24T01:40:02Z',
    git_url: 'git://github.com/Mohammedvaraliya/AAD-practicals.git',
    ssh_url: 'git@github.com:Mohammedvaraliya/AAD-practicals.git',
    clone_url: 'https://github.com/Mohammedvaraliya/AAD-practicals.git',
    svn_url: 'https://github.com/Mohammedvaraliya/AAD-practicals',
    homepage: null,
    size: 13410,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'C++',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 3,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 8,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 3,
    open_issues: 8,
    watchers: 1,
    default_branch: 'master',
  },
  {
    id: 772047905,
    node_id: 'R_kgDOLgSEIQ',
    name: 'Ahmed-Talha--Dharam-',
    full_name: 'Mohammedvaraliya/Ahmed-Talha--Dharam-',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/Mohammedvaraliya/Ahmed-Talha--Dharam-',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Ahmed-Talha--Dharam-/deployments',
    created_at: '2024-03-14T12:43:47Z',
    updated_at: '2024-03-14T12:43:47Z',
    pushed_at: '2024-03-14T12:43:47Z',
    git_url: 'git://github.com/Mohammedvaraliya/Ahmed-Talha--Dharam-.git',
    ssh_url: 'git@github.com:Mohammedvaraliya/Ahmed-Talha--Dharam-.git',
    clone_url: 'https://github.com/Mohammedvaraliya/Ahmed-Talha--Dharam-.git',
    svn_url: 'https://github.com/Mohammedvaraliya/Ahmed-Talha--Dharam-',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 669713538,
    node_id: 'R_kgDOJ-sEgg',
    name: 'AI-Amplify-Hackathon',
    full_name: 'Mohammedvaraliya/AI-Amplify-Hackathon',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/Mohammedvaraliya/AI-Amplify-Hackathon',
    description:
      'This repository contains the solutions to three problem statements completed during the hackathon. Each problem statement is categorized based on its difficulty level: Easy, Moderate, and Hard.',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/AI-Amplify-Hackathon/deployments',
    created_at: '2023-07-23T07:24:14Z',
    updated_at: '2024-05-18T22:22:24Z',
    pushed_at: '2023-07-24T16:42:54Z',
    git_url: 'git://github.com/Mohammedvaraliya/AI-Amplify-Hackathon.git',
    ssh_url: 'git@github.com:Mohammedvaraliya/AI-Amplify-Hackathon.git',
    clone_url: 'https://github.com/Mohammedvaraliya/AI-Amplify-Hackathon.git',
    svn_url: 'https://github.com/Mohammedvaraliya/AI-Amplify-Hackathon',
    homepage: '',
    size: 1186,
    stargazers_count: 6,
    watchers_count: 6,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      'ai',
      'chatgpt',
      'financial-analysis',
      'hackathon',
      'hackathon-2023',
      'hackathon-project',
      'huggingface-transformers',
      'ml',
      'neural-architecture-search',
      'openai',
      'roberta-model',
      'seq2seq',
    ],
    visibility: 'public',
    forks: 1,
    open_issues: 0,
    watchers: 6,
    default_branch: 'main',
  },
  {
    id: 621733646,
    node_id: 'R_kgDOJQ7nDg',
    name: 'aiml_bot',
    full_name: 'Mohammedvaraliya/aiml_bot',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/Mohammedvaraliya/aiml_bot',
    description:
      'This project is a chatbot designed to answer questions related to MVLU College. The chatbot is built using AIML (Artificial Intelligence Markup Language) and is integrated into a Django web application.',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/aiml_bot',
    forks_url: 'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/teams',
    hooks_url: 'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/issues/events{/number}',
    events_url: 'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/branches{/branch}',
    tags_url: 'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/aiml_bot/deployments',
    created_at: '2023-03-31T09:14:37Z',
    updated_at: '2024-05-17T12:31:41Z',
    pushed_at: '2023-04-12T17:53:40Z',
    git_url: 'git://github.com/Mohammedvaraliya/aiml_bot.git',
    ssh_url: 'git@github.com:Mohammedvaraliya/aiml_bot.git',
    clone_url: 'https://github.com/Mohammedvaraliya/aiml_bot.git',
    svn_url: 'https://github.com/Mohammedvaraliya/aiml_bot',
    homepage: 'http://mohammedvaraliya.pythonanywhere.com/',
    size: 1205,
    stargazers_count: 3,
    watchers_count: 3,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['aiml', 'aiml-bots', 'brain', 'django'],
    visibility: 'public',
    forks: 1,
    open_issues: 0,
    watchers: 3,
    default_branch: 'master',
  },
  {
    id: 510409630,
    node_id: 'R_kgDOHmw7ng',
    name: 'AllYouNeed-NotesApp',
    full_name: 'Mohammedvaraliya/AllYouNeed-NotesApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/Mohammedvaraliya/AllYouNeed-NotesApp',
    description:
      'Magic Notes App gives you a quick and simple experience when you write notes, memo, email, message, shopping list and to do list.  It makes to take a note easier than any other notepad and memo apps.  Let your notes more simpler and securer.',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeed-NotesApp/deployments',
    created_at: '2022-07-04T15:21:57Z',
    updated_at: '2022-09-05T14:13:00Z',
    pushed_at: '2022-10-22T12:02:26Z',
    git_url: 'git://github.com/Mohammedvaraliya/AllYouNeed-NotesApp.git',
    ssh_url: 'git@github.com:Mohammedvaraliya/AllYouNeed-NotesApp.git',
    clone_url: 'https://github.com/Mohammedvaraliya/AllYouNeed-NotesApp.git',
    svn_url: 'https://github.com/Mohammedvaraliya/AllYouNeed-NotesApp',
    homepage: 'https://allyouneed-notesapp.netlify.app/',
    size: 23,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['html', 'javascript'],
    visibility: 'public',
    forks: 1,
    open_issues: 0,
    watchers: 2,
    default_branch: 'master',
  },
  {
    id: 557762206,
    node_id: 'R_kgDOIT7Gng',
    name: 'AllYouNeedNoteBook-ReactApp',
    full_name: 'Mohammedvaraliya/AllYouNeedNoteBook-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp',
    description:
      'AllYouNeedNoteBook-ReactApp is a notebook app that allows users to create an account, add notes, and manage their notes. This application is built using React and Node.js, and it uses MongoDB Atlas to store all user accounts and notes.',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp/deployments',
    created_at: '2022-10-26T08:56:34Z',
    updated_at: '2023-04-16T18:31:18Z',
    pushed_at: '2023-06-12T08:33:52Z',
    git_url:
      'git://github.com/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp.git',
    ssh_url: 'git@github.com:Mohammedvaraliya/AllYouNeedNoteBook-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp.git',
    svn_url: 'https://github.com/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp',
    homepage: 'https://allyouneednotebook-reactapp.netlify.app',
    size: 3987,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      'expressjs',
      'html',
      'javascript',
      'mongodb',
      'mongoos',
      'reactjs',
    ],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master',
  },
  {
    id: 608204829,
    node_id: 'R_kgDOJEB4HQ',
    name: 'AutomaPy',
    full_name: 'Mohammedvaraliya/AutomaPy',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/Mohammedvaraliya/AutomaPy',
    description:
      'This package refers to the topic of automata theory, which includes DFA, NDFA, Mealy machines, Moore machines, Finite state machine and Turing machine.',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/AutomaPy',
    forks_url: 'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/teams',
    hooks_url: 'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/issues/events{/number}',
    events_url: 'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/branches{/branch}',
    tags_url: 'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/AutomaPy/deployments',
    created_at: '2023-03-01T14:37:18Z',
    updated_at: '2023-03-12T16:44:17Z',
    pushed_at: '2023-06-02T05:49:45Z',
    git_url: 'git://github.com/Mohammedvaraliya/AutomaPy.git',
    ssh_url: 'git@github.com:Mohammedvaraliya/AutomaPy.git',
    clone_url: 'https://github.com/Mohammedvaraliya/AutomaPy.git',
    svn_url: 'https://github.com/Mohammedvaraliya/AutomaPy',
    homepage: 'https://pypi.org/project/AutomaPy/',
    size: 80,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['dfa', 'nfa', 'python', 'theory-of-computation', 'turing-machine'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master',
  },
  {
    id: 527937487,
    node_id: 'R_kgDOH3evzw',
    name: 'BSC-CS-Practical-Performed',
    full_name: 'Mohammedvaraliya/BSC-CS-Practical-Performed',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/Mohammedvaraliya/BSC-CS-Practical-Performed',
    description:
      "A compilation of all the code I've written while attending college",
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/BSC-CS-Practical-Performed/deployments',
    created_at: '2022-08-23T10:21:48Z',
    updated_at: '2024-05-09T18:17:19Z',
    pushed_at: '2024-03-27T10:20:53Z',
    git_url: 'git://github.com/Mohammedvaraliya/BSC-CS-Practical-Performed.git',
    ssh_url: 'git@github.com:Mohammedvaraliya/BSC-CS-Practical-Performed.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/BSC-CS-Practical-Performed.git',
    svn_url: 'https://github.com/Mohammedvaraliya/BSC-CS-Practical-Performed',
    homepage: '',
    size: 93599,
    stargazers_count: 3,
    watchers_count: 3,
    language: 'Jupyter Notebook',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      'android-application',
      'angular',
      'angularjs',
      'artificial-intelligence',
      'dart',
      'data-structures',
      'flutter',
      'html-css-javascript',
      'java-8',
      'javascript',
      'jupyter-notebook',
      'kotlin',
      'machine-learning',
      'mongodb',
      'python',
      'rstats',
      'typescript',
    ],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 3,
    default_branch: 'master',
  },
  {
    id: 534753387,
    node_id: 'R_kgDOH9-waw',
    name: 'Data-Structures-And-Algorithms',
    full_name: 'Mohammedvaraliya/Data-Structures-And-Algorithms',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Data-Structures-And-Algorithms',
    description:
      'Data Structures and Algorithms including Linked List , Stack, Queue, Arrays, Hash Table, Search, Strings, Numbers, Trees',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Data-Structures-And-Algorithms/deployments',
    created_at: '2022-09-09T18:03:21Z',
    updated_at: '2024-01-24T17:44:30Z',
    pushed_at: '2024-03-17T10:11:57Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Data-Structures-And-Algorithms.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Data-Structures-And-Algorithms.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Data-Structures-And-Algorithms.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Data-Structures-And-Algorithms',
    homepage: '',
    size: 411,
    stargazers_count: 4,
    watchers_count: 4,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 3,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      'algorithm',
      'algorithms',
      'coding-interviews',
      'data-structures',
      'graph',
      'hash-table',
      'iteration-and-recursion',
      'linked-list',
      'numbers',
      'python',
      'queue',
      'search',
      'sorting-algorithms',
      'stack',
      'strings',
      'traversal-algorithms',
      'tree-data-structure',
      'trees',
    ],
    visibility: 'public',
    forks: 3,
    open_issues: 0,
    watchers: 4,
    default_branch: 'master',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 752153199,
    node_id: 'R_kgDOLNTybw',
    name: 'Google-GeminiPro-Chatbot-Vite-ReactApp',
    full_name: 'Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    private: false,
    owner: {
      login: 'Mohammedvaraliya',
      id: 95087498,
      node_id: 'U_kgDOBarrig',
      avatar_url: 'https://avatars.githubusercontent.com/u/95087498?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Mohammedvaraliya',
      html_url: 'https://github.com/Mohammedvaraliya',
      followers_url: 'https://api.github.com/users/Mohammedvaraliya/followers',
      following_url:
        'https://api.github.com/users/Mohammedvaraliya/following{/other_user}',
      gists_url:
        'https://api.github.com/users/Mohammedvaraliya/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Mohammedvaraliya/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Mohammedvaraliya/subscriptions',
      organizations_url: 'https://api.github.com/users/Mohammedvaraliya/orgs',
      repos_url: 'https://api.github.com/users/Mohammedvaraliya/repos',
      events_url:
        'https://api.github.com/users/Mohammedvaraliya/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Mohammedvaraliya/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    description: 'Google GeminiPro Model Chatbot for MVLU College',
    fork: false,
    url: 'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    forks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/forks',
    keys_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/teams',
    hooks_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/hooks',
    issue_events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/events',
    assignees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/tags',
    blobs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/languages',
    stargazers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/stargazers',
    contributors_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contributors',
    subscribers_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscribers',
    subscription_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/subscription',
    commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/merges',
    archive_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/downloads',
    issues_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp/deployments',
    created_at: '2024-02-03T07:15:19Z',
    updated_at: '2024-03-29T16:20:36Z',
    pushed_at: '2024-03-01T18:54:17Z',
    git_url:
      'git://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    ssh_url:
      'git@github.com:Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    clone_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp.git',
    svn_url:
      'https://github.com/Mohammedvaraliya/Google-GeminiPro-Chatbot-Vite-ReactApp',
    homepage: 'https://mvlu-college-chatbot.netlify.app/',
    size: 465,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['json', 'react', 'typescript', 'vite'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'main',
  },
];
